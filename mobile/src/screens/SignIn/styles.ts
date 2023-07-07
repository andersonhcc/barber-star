import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background};

`;

export const Header = styled.View`
  width: 100%;
  margin-top: 80px;

`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const TitleStar = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.medium};
   color: ${({ theme }) => theme.colors.primary}; 
`;


export const SubTitle = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  line-height: 25px;
  margin-top: 16px;

`;

export const Form = styled.View`
  width: 100%;
  margin: 74px 0;


`;

export const Footer = styled.View`
  align-items: center;

  
`;

export const WrapperSignUp = styled.View`
  flex-direction: row;
  padding-top: 2%;


`;

export const ButtonSignUp = styled.TouchableOpacity``;

export const LabelSignUp = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_datail};  
`;

export const TileSignUp = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};  
`;
