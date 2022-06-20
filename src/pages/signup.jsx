import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from '../containers/footerContainer'
import { HeaderContainer } from '../containers/headerContainer'
import Form from '../components/form/form'
import * as ROUTES from '../constants/routes' 

const SignUp = () => {
  const history = useHistory() // when user clicks on sign up, redirect to browse page
  const { firebase } = useContext(FirebaseContext)
  
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = firstName === '' || password === '' || email === ''

  const handleSignUp = (e) => { 
    e.preventDefault()

    // implement Firebase with promise
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            {/* When the value of input changes, set the value to the current value of the form */}
						<Form.Input
							placeholder='First Name'
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
            />
						<Form.Input
							placeholder='Email Address'
							value={email}
							onChange={({ target }) => setEmail(target.value)}
            />
						<Form.Input
							placeholder='Password'
              value={password}
              type='password'
							autoComplete='off'
							onChange={({ target }) => setPassword(target.value)}
            />
            {/* Disable button if any of the inputs are not validated */}
            <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default SignUp