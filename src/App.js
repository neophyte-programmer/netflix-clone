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
				<Route exact path={ROUTES.HOME} component={Home} />

				<Route exact path={ROUTES.BROWSE} component={Browse} />

				<Route exact path={ROUTES.SIGN_UP} component={SignUp} />

				<Route exact path={ROUTES.SIGN_IN} component={SignIn} />
			</Switch>
		</Router>
	)
}

export default App
