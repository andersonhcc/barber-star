import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding: 0 24px;


`;

export const Header = styled.View`
  width: 100%;
  margin-top: 120px;


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
  color: ${({ theme }) => theme.colors.text};
  line-height: 25px;
  margin-top: 16px;

`;

export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;

export const Footer = styled.View`
  align-items: center;
`;
