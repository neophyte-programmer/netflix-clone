import React from 'react'
import { HeaderContainer } from '../containers/headerContainer'
import { JumboContainer } from '../containers/jumbotronContainer'
import { AccordionContainer } from '../containers/accordionContainer'
import { FooterContainer } from '../containers/footerContainer'

const Home = () => {
	return (
        <div>
            <HeaderContainer />
			<JumboContainer />
			<AccordionContainer />
			<FooterContainer />
		</div>
	)
}

export default Home
