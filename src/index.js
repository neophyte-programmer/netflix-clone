import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { GlobalStyles } from './globalStyles'
import 'normalize.css'
import firebase from './lib/firebase.prod.js'
import { FirebaseContext } from './context/firebase'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// Removing React.StrictMode from here because it is interrupting my routing
	// <React.StrictMode>
		<>
			<FirebaseContext.Provider value={{ firebase }}>
				<GlobalStyles />
				<App />
			</FirebaseContext.Provider>
		</>
	// </React.StrictMode>
)
