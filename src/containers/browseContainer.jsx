import React from 'react'
import { SelectProfileContainer } from './profileContainer'
import { FirebaseContext } from '../context/firebase'
import { useContext, useState, useEffect } from 'react'
import Loading from '../components/loading/loading'
import Header from '../components/header/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.png'
import { PlayButton } from '../components/header/styles/header'

export const BrowseContainer = ({ slides }) => {
    const [searchTerm, setSearchTerm] = useState('')
	const [profile, setProfile] = useState({})
	const [loading, setLoading] = useState(true)
	const { firebase } = useContext(FirebaseContext)
	const user = firebase.auth().currentUser || {}

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [profile.displayName])

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
						<Header.TextLink>Series</Header.TextLink>
						<Header.TextLink>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => {
                                        firebase.auth().signOut()
                                    }}>Sign Out</Header.TextLink>
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
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	)
}
