import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Logo, ButtonLink, Background, Container, Frame } from './styles/header'


// bg prop for dynamic background
const Header = ({ bg = true, children, ...restProps }) => {
    // if the header takes a background, set the background, take restProps and pass children else just pass children as object
    return bg ? <Background {...restProps}>{children}</Background> : children
}

const HeaderFrame = ({ children, ...restProps }) => { 
    return <Container {...restProps}>{children}</Container>
}

const HeaderLogo = ({ to, ...restProps }) => { 
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

const HeaderButtonLink = ({ children, ...restProps }) => { 
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}


Header.Frame = HeaderFrame
Header.Logo = HeaderLogo
Header.ButtonLink = HeaderButtonLink

export default Header