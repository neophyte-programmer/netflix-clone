import React, { useState, useContext, createContext } from 'react'
import {
	Container,
	Group,
	Title,
	SubTitle,
	Text,
	Feature,
	FeatureTitle,
	FeatureText,
	FeatureClose,
	Maturity,
	Content,
	Entities,
	Meta,
	Item,
	Image,
} from './styles/card'

export const FeatureContext = createContext()

const Card = ({ children, ...restProps }) => {
	const [showFeature, setShowFeature] = useState(false)
	const [itemFeature, setItemFeature] = useState({})

	return (
		<FeatureContext.Provider
			value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
		>
			<Container {...restProps}>{children}</Container>
		</FeatureContext.Provider>
	)
}

const CardGroup = ({ children, ...restProps }) => {
	return <Group {...restProps}>{children}</Group>
}
const CardTitle = ({ children, ...restProps }) => {
	return <Title {...restProps}> {children} </Title>
}
const CardSubTitle = ({ children, ...restProps }) => {
	return <SubTitle {...restProps}> {children}</SubTitle>
}
const CardText = ({ children, ...restProps }) => {
	return <Text {...restProps}> {children}</Text>
}
const CardMeta = ({ children, ...restProps }) => {
	return <Meta {...restProps}> {children}</Meta>
}

const CardEntities = ({ children, ...restProps }) => {
	return <Entities {...restProps}> {children}</Entities>
}
const CardItem = ({ item, children, ...restProps }) => {
	const { setShowFeature, setItemFeature } = useContext(FeatureContext)

	return (
		<Item
			{...restProps}
			onClick={() => {
				setItemFeature(item)
				setShowFeature(true)
			}}
		>
			{children}
		</Item>
	)
}

const CardImage = ({ ...restProps }) => {
	return <Image {...restProps} />
}

// we need the category to access the folders
const CardFeature = ({ children, category, ...restProps }) => {
	const { showFeature, itemFeature, setShowFeature } =
		useContext(FeatureContext)

	// if showFeature is true, show the feature else return null
	return showFeature ? (
        <Feature
            {...restProps}
			src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
		>
			<Content>
				<FeatureTitle>{itemFeature.title}</FeatureTitle>
				<FeatureText>{itemFeature.description}</FeatureText>
				<FeatureClose onClick={() => setShowFeature(false)}>
					<img src='/images/icons/close.png' alt='Close' />
				</FeatureClose>
			</Content>
			<Group margin='30px 5px' flexDirection='row' alignItems='center'>
                <Maturity rating={itemFeature.maturity}>
                    {/* If the maturity is less than 13 display PG else display the rating itself */}
					{itemFeature.maturity < 13 ? 'PG' : itemFeature.maturity}
                </Maturity>
                <FeatureText fontWeight="bold">
                    {/* Capitalising the first letter  */}
                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                </FeatureText>
			</Group>
		</Feature>
	) : null
}

Card.Group = CardGroup
Card.Title = CardTitle
Card.SubTitle = CardSubTitle
Card.Text = CardText
Card.Meta = CardMeta
Card.Entities = CardEntities
Card.Item = CardItem
Card.Image = CardImage
Card.Feature = CardFeature

export default Card
