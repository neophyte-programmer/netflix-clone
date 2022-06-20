import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Home from './pages/home'
import Browse from './pages/browse'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

const App = () => {
	const user = null
	return (
		<Router>
			<Switch>
				{/* <Route exact path={ROUTES.SIGN_IN} component={SignIn} /> */}
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
					<SignIn />
				</IsUserRedirect>

				{/* <Route exact path={ROUTES.SIGN_UP} component={SignUp} /> */}
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
					<SignUp />
				</IsUserRedirect>

				{/* <Route exact path={ROUTES.BROWSE} component={Browse} /> */}
				<ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
					<Browse />
				</ProtectedRoute>

				{/* <Route exact path={ROUTES.HOME} component={Home} /> */}
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
					<Home />
				</IsUserRedirect>


			</Switch>
		</Router>
	)
}

export default App
