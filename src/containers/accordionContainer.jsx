import React from 'react'
import accordionData from '../fixtures/faqs.json'
import { Accordion } from '../components/accordion/accordion'
import { OptForm } from '../components/optForm/optForm'

export const AccordionContainer = () => {
	return (
		<Accordion.Container>
			<Accordion.Title> Frequently Asked Questions </Accordion.Title>
			<Accordion.Frame>
				{accordionData.map((item) => (
					<Accordion.Item key={item.id}>
						<Accordion.Header>{item.header}</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion.Frame>

			<OptForm>
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your
					membership.
				</OptForm.Text>
				<OptForm.Break />
				<OptForm.Input placeholder='Enter your email' />
				<OptForm.Button>Get Started</OptForm.Button>
			</OptForm>
			
		</Accordion.Container>
	)
}
