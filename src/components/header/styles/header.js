import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'

// export const Header = styled.header``
export const Background = styled.div`
	display: flex;
	flex-direction: column;
	// If there is an image provided, it will be displayed else the default image will be displayed
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85)), url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
		top left / cover no-repeat;
	border-bottom: 8px solid #222;
    height: 97vh;

    @media (max-width: 1000px) {
        height: 60vh;
        
    }
`

export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	height: 64px;
	padding: 18px 0;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`

export const Logo = styled.img`
	height: 32px;
	width: 108px;

	@media (min-width: 1449px) {
		height: 45px;
		width: 167px;
	}
`

export const ButtonLink = styled(ReactRouterLink)`
	display: block;
	background-color: #e50914;
	text-decoration: none;
	color: #fff;
	width: 84px;
	height: fit-content;
	border: 0;
	border-radius: 4px;
	font-size: 15px;
	padding: 8px 17px;
	cursor: pointer;
	box-sizing: border-box;

	&:hover {
		background-color: #f40612;
	}
`
