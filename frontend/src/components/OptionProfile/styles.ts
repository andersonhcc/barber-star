import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  
  padding-top: 5%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.TextInput`

  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 30px;

  border-radius: 5px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;

  margin-top: 2%;

`;
