import styled from 'styled-components/macro'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	// height: 100%;
	// margin-top: 20px;
	flex-wrap: wrap;

	@media (max-width: 1000px) {
		// flex-direction: column; This breaks my code my i am not removing it because i want to figure out why
		align-items: center;
	}
`

export const Input = styled.input`
	max-width: 450px;
	width: 100%;
	border: 0;
	padding: 10px;
	height: 70px;
	box-sizing: border-box;
    outline: none;

	@media (max-width: 600px) {
		max-width: 350px;
		height: 50px;
	}
`

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	height: 70px;
	background: #e50914;
	color: white;
	text-transform: capitalize;
	padding: 0 32px;
	font-size: 26px;
	border: 0;
	cursor: pointer;
	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 24px;
		@media (max-width: 1000px) {
			width: 16px;
		}
	}
	&:hover {
		background: #f40612;
	}
	@media (max-width: 1000px) {
		height: 50px;
		font-size: 16px;
		margin-top: 20px;
		font-weight: bold;
	}
`

export const Text = styled.h3`
	font-size: 19.2px;
	font-weight: normal;
	color: white;
	text-align: center;
	padding: 0 20px;

	@media (max-width: 600px) {
		font-size: 18px;
		line-height: 22px;
	}
`
