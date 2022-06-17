import React from 'react'
import accordionData from '../fixtures/faqs.json'
import { Accordion } from '../components/accordion/accordion'

export const AccordionContainer = () => {
	return (
		<Accordion.Container>
			<Accordion.Title> Frequently Asked Questions </Accordion.Title>
			{accordionData.map((item) => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion.Container>
        
	)
}
