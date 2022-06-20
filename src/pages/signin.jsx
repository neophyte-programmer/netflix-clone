import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from '../containers/footerContainer'
import { HeaderContainer } from '../containers/headerContainer'
import Form from '../components/form/form'
import * as ROUTES from '../constants/routes'

const SignIn = () => {
  const history = useHistory()
  const { firebase} = useContext(FirebaseContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	// form validation
  const handleSignIn = (e) => {
    e.preventDefault()

    // implement Firebase with promise
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      // redirect to browse page when user is signed in
      history.push(ROUTES.BROWSE)
    }).catch((error) => {
      // If there is an error, set the email and password to empty strings and set the error to the error message
      setEmail('')
      setPassword('')
      setError(error.message)
    })
  } 

  // If password or email is empty, isInvalid will be true
  const isInvalid = password === '' || email === ''

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignIn} method='POST'>
            {/* When the value of input changes, set the email to the current value of the form */}
						<Form.Input
							placeholder='Email Address'
							value={email}
							onChange={({ target }) => setEmail(target.value)}
            />
            {/* When the value of input changes, set the password to the current value of the form */}
						<Form.Input
							placeholder='Password'
							type='password'
							autoComplete='off'
							value={password}
							onChange={({ target }) => setPassword(target.value)}
            />
            {/* Disable button if any of the inputs are not validated */}
            <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>New To Nutiflix? {' '}           
          <Form.Link to='/signup'>Sign up now</Form.Link>
          </Form.Text>
          <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot</Form.SmallText>
				</Form>
			</HeaderContainer>
			<FooterContainer> </FooterContainer>
		</>
	)
}

export default SignIn
