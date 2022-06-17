import React from 'react'
import Jumbotron from './components/jumbotron/jumbotron'
import jumbotronData from './fixtures/jumbo.json'

const App = () => {
	return (
		<div>
			<Jumbotron.Container>
				{/* Pass the data and direction from the json file to the component */}
				{jumbotronData.map((item) => (
					<Jumbotron key={item.id} direction={item.direction}>
						<Jumbotron.Pane>
							<Jumbotron.Title>{item.title}</Jumbotron.Title>
							<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
					</Jumbotron>
				))}
			</Jumbotron.Container>
		</div>
	)
}

export default App
