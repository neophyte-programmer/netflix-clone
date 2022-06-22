import React, { useState, useContext, createContext } from "react";
import { Container, Group, Title, SubTitle, Text, Meta, Item, Image } from "./styles/card";

export const FeatureContext = createContext()

const Card = ({children, ...restProps}) => {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

const CardGroup = ({ children, ...restProps}) => {
    return <Group {...restProps}>{children}</Group>
}
const CardTitle = ({ children, ...restProps }) => {
    return (
        <Title {...restProps}> {children} </Title>
    )
 }
const CardSubTitle = ({ children, ...restProps}) => { 
    return (
        <SubTitle {...restProps}> {children}</SubTitle>
    )
}
const CardText = ({ children, ...restProps}) => { 
    return (
        <Text {...restProps}> {children}</Text>
    )
}
const CardMeta = ({ children, ...restProps}) => { 
    return (
        <Meta {...restProps}> {children}</Meta>
    )
}
const CardItem = ({ item, children, ...restProps }) => { 
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)

    return (
        <Item {...restProps} onClick={() => {
            setItemFeature(item)
            setShowFeature(true)
        }}>
            {children}
        </Item>
    )
}

const CardImage = ({ ...restProps }) => {
    return <Image {...restProps}  />
}


Card.Group = CardGroup
Card.Title = CardTitle
Card.SubTitle = CardSubTitle
Card.Text = CardText
Card.Meta = CardMeta
Card.Item = CardItem
Card.Image = CardImage

export default Card