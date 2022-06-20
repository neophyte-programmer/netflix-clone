import React from 'react'
import Header from '../components/header/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.png'

export const HeaderContainer = ({children}) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt='netflix' src={logo} />
                <Header.ButtonLink to="/signin" >Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

