import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 20px 0 40px;
`;

export const StyledInput = styled.input`
  border-radius: 20px 0 0 20px;
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  background: #f1f1f1;
  width: 60%;
  margin-left: 5%;
  @media (min-width: 425px) {
    width: 50%;
    margin-left: 20%;
  }
`;

export const StyledButton = styled.button`
  border-radius: 0 20px 20px 0;
  float: left;
  padding: 10px;
  background: -webkit-linear-gradient(#3f9bff, #c03db5);
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
  width: 30%;
  @media (min-width: 425px) {
    width: 10%;
  }
`;
