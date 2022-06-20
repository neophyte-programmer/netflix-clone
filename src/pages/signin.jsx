import React, { useState } from 'react'
import { FooterContainer } from '../containers/footerContainer'
import { HeaderContainer } from '../containers/headerContainer'
import Form from '../components/form/form'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	// form validation
  const handleSignIn = (e) => {
    e.preventDefault()

    // implement Firebase 
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
          <Form.Link to='/signup'>Sign Up now</Form.Link>
          </Form.Text>
				</Form>
			</HeaderContainer>
			<FooterContainer> </FooterContainer>
		</>
	)
}

export default SignIn
