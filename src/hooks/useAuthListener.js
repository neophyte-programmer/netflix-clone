import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

const useAuthListener = () => {
	// We want to listen to the auth state of the user and how it changes
	const [user, setUser] = useState(
		// checking if the user is in local storage
		JSON.parse(localStorage.getItem('authUser'))
	)

	const {firebase} = useContext(FirebaseContext)

	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                // if there is an authenticated user, we want to store it in local storage
				localStorage.setItem('authUser', JSON.stringify(authUser))
				setUser(authUser)
            } else {
                // if there is no authenticated user, we want to remove it from local storage
				localStorage.removeItem('authUser')
				setUser(null)
			}
		})

		return () => listener()
	}, [])

	return { user }
}

export default useAuthListener
