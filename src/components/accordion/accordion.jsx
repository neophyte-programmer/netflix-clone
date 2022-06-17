import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import { Container, Inner, Title, Frame, Item, Header, Body } from './styles/accordion'

// Context is a React component that provides the value of the state
const ToggleContext = createContext()

const Accordion = ({ children, ...restProps }) => {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	)
}

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
	const [toggleShow, setToggleShow] = useState(false)
    return (
        // ToggleContext.Provider is a React component that provides the context
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
		<Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
			{children}
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

export default Accordion
