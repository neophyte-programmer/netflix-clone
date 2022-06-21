import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
	Logo,
	ButtonLink,
	Background,
	Container,
	Feature,
	Text,
	FeatureCallOut,
	TextLink,
	Group,
	Profile,
	Picture,
	Dropdown,
	Search,
	SearchInput,
	SearchIcon,
	PlayButton,
} from './styles/header'

// bg prop for dynamic background
const Header = ({ bg = true, children, ...restProps }) => {
	// if the header takes a background, set the background, take restProps and pass children else just pass children as object
	return bg ? <Background {...restProps}>{children}</Background> : children
}

const HeaderFeature = ({ children, ...restProps }) => {
	return <Feature {...restProps}>{children}</Feature>
}

const HeaderFeatureCallOut = ({ children, ...restProps }) => {
	return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

const HeaderText = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>
}

const HeaderTextLink = ({ children, ...restProps }) => {
	return <TextLink {...restProps}>{children}</TextLink>
}

const HeaderFrame = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>
}

const HeaderLogo = ({ to, ...restProps }) => {
	return (
		<ReactRouterLink to={to}>
			<Logo {...restProps} />
		</ReactRouterLink>
	)
}

const HeaderButtonLink = ({ to, children, ...restProps }) => {
	return (
		<ButtonLink to={to} {...restProps}>
			{children}
		</ButtonLink>
	)
}

const HeaderGroup = ({ to, children, ...restProps }) => {
	return (
		<Group to={to} {...restProps}>
			{children}
		</Group>
	)
}

const HeaderProfile = ({ children, ...restProps }) => {
	return <Profile {...restProps}>{children}</Profile>
}

const HeaderPicture = ({ src, ...restProps }) => {
	return <Picture src={`/images/users/${src}.png`} {...restProps} />
}

const HeaderDropdown = ({ children, ...restProps }) => {
	return <Dropdown {...restProps}>{children}</Dropdown>
}

const HeaderSearch = ({ searchTerm, setSearchTerm, ...restProps }) => {
	const [searchActive, setSearchActive] = useState(false)

	return (
		<Search {...restProps}>
			<SearchIcon
				onClick={() => setSearchActive((searchActive) => !searchActive)}
			>
				<img src='/images/icons/search.png' alt='search' />
			</SearchIcon>
			<SearchInput
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				placeholder='Search films and series'
				active={searchActive}
			/>
		</Search>
	)
}

const HeaderPlayButton = ({ children, ...restProps }) => {
	<PlayButton {...restProps}>{children}</PlayButton>
}

Header.Feature = HeaderFeature
Header.Text = HeaderText
Header.TextLink = HeaderTextLink
Header.FeatureCallOut = HeaderFeatureCallOut
Header.Frame = HeaderFrame
Header.Logo = HeaderLogo
Header.ButtonLink = HeaderButtonLink
Header.Group = HeaderGroup
Header.Profile = HeaderProfile
Header.Picture = HeaderPicture
Header.Dropdown = HeaderDropdown
Header.Search = HeaderSearch
Header.PlayButton = HeaderPlayButton

export default Header
