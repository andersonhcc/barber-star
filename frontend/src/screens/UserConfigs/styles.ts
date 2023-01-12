import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-left: 5%;
  
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 110px;
  flex-direction: row;

  justify-content: space-between;
  align-items: flex-end;

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 23px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.View`
  flex: 1;
`;
