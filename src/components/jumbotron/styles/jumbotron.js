// Macro is going to give the name of the component in the dev tools
import styled from 'styled-components/macro'

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50 5%;
    color: #fff;
    overflow: hidden; 
`

export const Inner = styled.div`
	display: flex;
	// Take direction from the props
	flex-direction: ${({ direction }) => direction};
	align-items: center;
	justify-content: space-between;
	max-width: 1100px;
	margin: auto;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.2;
    margin-bottom: .5rem;

    @media (max-width: 600px){
        font-size: 2.2rem;
    }
`

export const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`
export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2{
            margin-bottom: 50px;
        }
    }
`