import React from 'react'
import { FooterContainer } from '../containers/footerContainer'
import { JumboContainer } from '../containers/jumbotronContainer'
import { AccordionContainer } from '../containers/accordionContainer'

const Home = () => {
	return (
		<div>
			<JumboContainer />
			<AccordionContainer />
			<FooterContainer />
		</div>
	)
}

export default Home
