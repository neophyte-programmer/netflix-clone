import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import {
	Container,
	Inner,
	Title,
	Frame,
	Item,
	Header,
	Body,
} from './styles/accordion'

// Context is a React component that provides the value of the state
const ToggleContext = createContext()

export const Accordion = ({ children, ...restProps }) => {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	)
}

const AccordionContainer = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>
}
Accordion.Container = AccordionContainer

const AccordionTitle = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>
}
Accordion.Title = AccordionTitle

const AccordionFrame = ({ children, ...restProps }) => {
	return <Frame {...restProps}>{children}</Frame>
}
Accordion.Frame = AccordionFrame

const AccordionItem = ({ children, ...restProps }) => {
	// Managing the state of the accordion item
	const [toggleShow, setToggleShow] = useState(false) // accordion is closed by default
	return (
		// shares the state with the children (AccordionHeader and AccordionBody) 
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}> 
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	)
}
Accordion.Item = AccordionItem

const AccordionHeader = ({ children, ...restProps }) => {
	// We need to use useContext to access the toggleShow state
	const { toggleShow, setToggleShow } = useContext(ToggleContext)
	return (
		// Onclick, pass the previous state and invert it
		<Header
			onClick={() => setToggleShow((toggleShow) => !toggleShow)}
			{...restProps}
		>
			{children}
			{/* If the state is true, display the close img else display the add img*/}
			{toggleShow ? (
				<img src='./images/icons/close-slim.png' alt='close' />
			) : (
				<img src='./images/icons/add.png' alt='add' />
			)}

		</Header>
	)
}
Accordion.Header = AccordionHeader

const AccordionBody = ({ children, ...restProps }) => {
	// We need to use useContext to access the toggleShow state
	const { toggleShow } = useContext(ToggleContext)

	// If the state is true, display the body
	return toggleShow ? <Body {...restProps}>{children}</Body> : null
}
Accordion.Body = AccordionBody

// export default Accordion
