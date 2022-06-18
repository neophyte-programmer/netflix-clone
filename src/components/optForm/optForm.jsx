import React from 'react'
import { Container, Input, Break, Button, Text } from './styles/optForm'

export const OptForm = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>
}

const OptFormInput = ({ children, ...restProps }) => {
	return <Input {...restProps} />
}

const OptFormBreak = ({ children, ...restProps }) => {
	return <Break {...restProps}>{children}</Break>
}

const OptFormButton = ({ children, ...restProps }) => {
	return (
		<Button {...restProps}>
			{children} <img src='./images/icons/chevron-right.png' alt='Try Now' />{' '}
		</Button>
	)
}

const OptFormText = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>
}

// OptForm.Container = OptFormContainer
OptForm.Input = OptFormInput
OptForm.Break = OptFormBreak
OptForm.Button = OptFormButton
OptForm.Text = OptFormText
