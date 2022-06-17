import React from 'react'
import { Row, Column, Link, Break } from './styles/footer'

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

const FooterColumn = ({ }) => {
    return <Column>{children}</Column>
}
Footer.Column = FooterColumn

const FooterLink = ({ }) => {
    return <Link>{children}</Link>
}
Footer.Link = FooterLink

const FooterBreak = ({ }) => {
    return <Break>{children}</Break>
}
Footer.Break = FooterBreak


export default Footer