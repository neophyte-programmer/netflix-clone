import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    justify-content: center;
  text-align: center;
    margin: 0 auto;
    height: 100%;
  `;
  
  export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 700;
  margin: 0 auto;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;