import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (min-width: 425px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  margin: auto;
  top: 150px;
  left: 15%;
  font-size: 30px;
  @media (min-width: 425px) {
    left: 40%;
    font-size: 40px;
  }
`;

export const StyledButton = styled.button`
  padding: 20px;
  margin: 10px;
  background: transparent;
  border: 1px solid lightgrey;
  border-radius: 20px;
`;
