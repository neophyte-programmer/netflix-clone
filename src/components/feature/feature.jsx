import React from "react";
import { Inner, Title, SubTitle } from "./styles/feature";

const Feature = ({ children, ...restProps }) => { 
    return <Inner {...restProps}>{children}</Inner>
}

export const FeatureTitle = ({ children, ...restProps }) => { 
    return <Title {...restProps}>{children}</Title>
}

export const FeatureSubTitle = ({ children, ...restProps }) => { 
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Feature.Title = FeatureTitle;
Feature.SubTitle = FeatureSubTitle;


export default Feature;