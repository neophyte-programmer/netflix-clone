import React from 'react'
import { SelectProfileContainer } from './profileContainer'
import { FirebaseContext } from '../context/firebase'
import { useContext, useState, useEffect } from 'react'
import Loading from '../components/loading/loading'
import Header from '../components/header/header'
import Player from '../components/player/player'
import * as ROUTES from '../constants/routes'
import logo from '../logo.png'
import { PlayButton } from '../components/header/styles/header'
import Card from '../components/card/card'
import { FooterContainer } from './footerContainer'

export const BrowseContainer = ({ slides }) => {
	// creating a default collection to display - series/films
	const [category, setCategory] = useState('series')
	const [searchTerm, setSearchTerm] = useState('')
	const [profile, setProfile] = useState({})
	const [loading, setLoading] = useState(true)
	const [slideRows, setSlideRows] = useState([])

	// Firebase authentication stuff
	const { firebase } = useContext(FirebaseContext)
	const user = firebase.auth().currentUser || {}

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [profile.displayName])

	// setting the active slide rows and filtering them based of active collection -series/films
	useEffect(() => {
		setSlideRows(slides[category])
	}, [slides, category])

	return profile.displayName ? (
		<>
			{loading ? (
				<Loading src={user.photoURL} />
			) : (
				<Loading.ReleaseBody />
			)}
			<Header src='originals1'>
				<Header.Frame>
					<Header.Group>
						<Header.Logo to={ROUTES.HOME} src={logo} />
						<Header.TextLink
							active={category === 'series' ? 'true' : 'false'}
							onClick={() => setCategory('series')}
						>
							Series
						</Header.TextLink>
						<Header.TextLink
							active={category === 'films' ? 'true' : 'false'}
							onClick={() => setCategory('films')}
						>
							Films
						</Header.TextLink>
					</Header.Group>
					<Header.Group>
						<Header.Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>

						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>
										{user.displayName}
									</Header.TextLink>
								</Header.Group>
								<Header.Group>
									<Header.TextLink
										onClick={() => {
											firebase.auth().signOut()
										}}
									>
										Sign Out
									</Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>
				<Header.Feature>
					<Header.FeatureCallOut>
						Watch Originals Now
					</Header.FeatureCallOut>
					<Header.Text>
						The Mikaelsons move to New Orleans and form an alliance
						with local witches in an effort to rule the city once
						again in this "Vampire Diaries" spinoff.
					</Header.Text>
					<PlayButton>Play</PlayButton>
				</Header.Feature>
			</Header>

			{/* Extracting and maping over data */}
			<Card.Group style={{margin: '70px 0 0 0'}}>
				{slideRows.map((slideItem) => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
						<Card.Entities>
							{/* getting the movies based on whether we are in the series or movies section */}
							{slideItem.data.map((item) => (
								<Card.Item key={item.id} item={item}>
									<Card.Image
										src={`./images/${category}/${item.genre}/${item.slug}/small.jpg`}
									/>
									<Card.Meta>
										<Card.SubTitle>
											{item.title}
										</Card.SubTitle>
										<Card.Text>
											{item.description}
										</Card.Text>
									</Card.Meta>
								</Card.Item>
							))}
						</Card.Entities>
						<Card.Feature category={category}>
							<Player>
									<Player.Button />
									<Player.Video src="/videos/intro.mp4" />
							</Player>
						</Card.Feature>
					</Card>
				))}
			</Card.Group>
			<FooterContainer />
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	)
}
