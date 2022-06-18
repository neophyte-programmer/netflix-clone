import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Home from './pages/home'
import Browse from './pages/browse'
import SignIn from './pages/signin'
import SignUp from './pages/signup'

// The version 6 of react-router-dom introduced a new component called Routes which is an upgrade from Switch.
// Also the new component introduced a new prop called element which is a React component.
// The element prop is used to render the component that is being matched.
// The Route component doesn't take any children.


const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path={ROUTES.HOME} element={<Home />} />

				<Route exact path={ROUTES.BROWSE} element={<Browse />} />

				<Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />

				<Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
			</Routes>
		</Router>
	)
}

export default App
