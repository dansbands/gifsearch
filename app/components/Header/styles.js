import styled from 'styled-components';

export const SiteHeader = styled.header`
  font-family: 'Alata', sans-serif;
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  height: 100px;
  border-bottom: 1px solid black;
`;

export const StyledSpan = styled.span`
  font-size: 30px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  @media (min-width: 425px) {
    margin-left: 50px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 30px;
  letter-spacing: 3px;
  background: -webkit-linear-gradient(#3f9bff, #c03db5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: 425px) {
    font-size: 50px;
  }
`;

export const StyledText = styled.span`
  @media (max-width: 425px) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: right;
`;
