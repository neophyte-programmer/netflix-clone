import React from 'react'
import { HeaderContainer } from '../containers/headerContainer'
import Feature from '../components/feature/feature'
import { OptForm } from '../components/optForm/optForm'
import { JumboContainer } from '../containers/jumbotronContainer'
import { AccordionContainer } from '../containers/accordionContainer'
import { FooterContainer } from '../containers/footerContainer'

const Home = () => {
	return (
		<div>
			<HeaderContainer>
				<>
					<Feature>
						<Feature.Title>
							Unlimited movies, TV shows, and more.
						</Feature.Title>
						<Feature.SubTitle>
							Watch anywhere. Cancel anytime.
						</Feature.SubTitle>
						<OptForm>
							<OptForm.Text>
								Ready to watch? Enter your email to create or
								restart your membership.
							</OptForm.Text>
							<OptForm.Break />
							<OptForm.Input placeholder='Enter your email' />
							<OptForm.Button>Get Started</OptForm.Button>
						</OptForm>
					</Feature>
				</>
			</HeaderContainer>
			<JumboContainer />
			<AccordionContainer />
			<FooterContainer />
		</div>
	)
}

export default Home
