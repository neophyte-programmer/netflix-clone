import React from 'react'
import { Container, Row, Column, Link, Break, Title, Text } from './styles/footer'

const Footer = ({children, ...restProps}) => {
  return (
      <Container {...restProps}>
        {children}
    </Container>
  )
}

const FooterRow = ({ children, ...restProps}) => {
    return <Row {...restProps}>{children}</Row>
}
Footer.Row = FooterRow

const FooterColumn = ({ children, ...restProps}) => {
    return <Column {...restProps}>{children}</Column>
}
Footer.Column = FooterColumn

const FooterLink = ({ children, ...restProps}) => {
    return <Link {...restProps}>{children}</Link>
}
Footer.Link = FooterLink

const FooterBreak = ({ children, ...restProps}) => {
    return <Break {...restProps}>{children}</Break>
}
Footer.Break = FooterBreak

const FooterTitle = ({ children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
}
Footer.Title = FooterTitle

const FooterText = ({ children, ...restProps}) => {
    return <Text {...restProps}>{children}</Text>
}
Footer.Text = FooterText


export default Footer