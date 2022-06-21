import React from 'react'
import { SelectProfileContainer } from './profileContainer'
import { FirebaseContext } from '../context/firebase'
import { useContext, useState, useEffect } from 'react'
import Loading from '../components/loading/loading'

export const BrowseContainer = ({ slides }) => {
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
		loading ? (
			<Loading src={user.photoURL} />
		) : null
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	)
}
