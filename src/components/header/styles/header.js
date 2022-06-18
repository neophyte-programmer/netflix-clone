import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

// export const Header = styled.header``
export const Background = styled.div``

export const Frame = styled.div``

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
    height:32px;
    width:108px;

    @media (min-width: 1449px) {
        height:45px;
        width:167px;
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