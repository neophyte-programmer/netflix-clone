import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Check if user is logged in and redirect to browse page if they are.
export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => {
				if (!user) {
					// If user is not logged in, redirect to sign in page.
					return children
				}
				if (user) {
					// If user is logged in, redirect to browse page.
					return (
						<Redirect
							to={{
								pathname: loggedInPath,
							}}
						/>
					)
                }
                return null
			}}
		/>
	)
}

// Protect the browse page from unauthenticated users.
export const ProtectedRoute = ({ user, children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children
                }
                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: '/signin',
                                state: {from: location}
                            }}
                        />
                    )
                }
                return null
            }}
        />
    )
}