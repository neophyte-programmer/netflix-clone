import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { GlobalStyles } from './globalStyles'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<>
			<GlobalStyles />
			<App />
		</>
	</React.StrictMode>
)
