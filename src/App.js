import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Home from './pages/home'
import Browse from './pages/browse'
import SignIn from './pages/signin'
import SignUp from './pages/signup'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.HOME}>
					<Home />
				</Route>
				<Route exact path={ROUTES.BROWSE}>
					<Browse />
				</Route>
				<Route exact path={ROUTES.SIGN_UP}>
					<SignUp />
				</Route>
				<Route exact path={ROUTES.SIGN_IN} component={SignIn} />
				{/* <SignIn />
				</Route> */}
			</Switch>
		</Router>
	)
}

export default App
