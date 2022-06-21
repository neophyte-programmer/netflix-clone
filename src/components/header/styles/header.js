import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'



export const Background = styled.div`
	display: flex;
	flex-direction: column;
	// If there is an image provided, it will be displayed else the default image will be displayed
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.85),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.85)
		),
		url(${({ src }) =>
				src
					? `../images/misc/${src}.jpg`
					: '../images/misc/home-bg.jpg'})
			top right / cover no-repeat;
	border-bottom: 8px solid #222;
	height: 97vh;
	// overflow: hidden;

	// // @media (max-width: 1100px) {
	// position: relative;
	// // }

	@media (max-width: 1000px) {
		height: 70vh;
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

export const Feature = styled(Container)`
	flex-direction: column;
	align-items: normal;
	width: 50%;
	position: absolute;
	left: 5%;
	bottom: 30%;

	@media (max-width: 1100px) {
		// display: none;
		padding: 0;
		flex-direction: column;
		width: 90%;
		margin: 0 auto;
		bottom: 20%;
	}
`

export const Text = styled.p`
	color: #fff;
	font-size: 22px;
	line-height: normal;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	margin: 20px 0 0 0;

	@media (max-width: 1100px) {
		font-size: 16px;
	}
`
export const FeatureCallOut = styled.h2`
	color: #fff;
	font-size: 50px;
	line-height: normal;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	margin: 0;
	font-weight: bold;

	@media (max-width: 1100px) {
		font-size: 24px;
	}
`

export const TextLink = styled.p`
	color: #fff;
	text-decoration: none;
	margin-left: 15px;
	// if it active, give a font weight of 700
	font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
	cursor: pointer;

	&:hover {
		font-weight: bold;
	}
`

export const Group = styled.div`
	display: flex;
	align-items: center;
`

export const SearchInput = styled.input`
	background-color: rgba(64, 64, 64, 0.5);
	color: white;
	border: 1px solid white;
	transition: width 0.5s;
	height: 30px;
	font-size: 14px;
	border-radius: 4px;
	margin-left: ${({ active }) => (active === true ? '10px' : '0')};
	padding: ${({ active }) => (active === true ? '0 10px' : '0')};
	opacity: ${({ active }) => (active === true ? '1' : '0')};
	width: ${({ active }) => (active === true ? '200px' : '0px')};
	&:focus {
		background-color: rgba(0, 0, 0, 0.8);
	}
`

export const Search = styled.div`
	display: flex;
	align-items: center;
	svg {
		color: white;
		cursor: pointer;
	}
	@media (max-width: 700px) {
		display: none;
	}
`

export const SearchIcon = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: 0;
	outline: 0;
	height: 32px;
	width: 32px;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		filter: brightness(0) invert(1);
		width: 16px;
	}
`

export const Picture = styled.button`
	background: url(${({ src }) => src});
	background-size: contain;
	border: 0;
	width: 32px;
	height: 32px;
	cursor: pointer;
`

export const Dropdown = styled.div`
	display: none;
	position: absolute;
	background-color: black;
	padding: 10px;
	width: 100px;
	top: 32px;
	right: 10px;
	border-radius: 4px;
	${Group}:last-of-type ${TextLink} {
		cursor: pointer;
	}
	${Group} {
		margin-bottom: 10px;
		// border-bottom: 1px solid white;
		padding-bottom: 10px;
		&:last-of-type {
			margin-bottom: 0;
		}
		${TextLink} {
			cursor: pointer;
		}
		${Picture} {
			cursor: default;
		}
	}
	button {
		margin-right: 10px;
	}
	p {
		font-size: 12px;
		margin-bottom: 0;
		margin-top: 0;
	}
`

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
	position: relative;
	button {
		cursor: pointer;
	}
	&:hover > ${Dropdown} {
		display: flex;
		flex-direction: column;
	}
`

export const PlayButton = styled.button`
	box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
	background-color: #e6e6e6;
	color: #000;
	border-width: 0;
	padding: 10px 20px;
	border-radius: 5px;
	max-width: 130px;
	font-weight: bold;
	font-size: 20px;
	margin-top: 10px;
	cursor: pointer;
	transition: background-color 0.5s ease;
	&:hover {
		background-color: #ff1e1e;
		color: white;
	}
`
