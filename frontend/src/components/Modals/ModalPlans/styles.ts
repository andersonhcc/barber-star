import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 


export const Container = styled.View`
  flex: 1;
  padding-left: 5%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 110px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 23px;
  color: ${({ theme }) => theme.colors.primary};
`;


export const TitleFree = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 10px;
`;

export const Main = styled.View`
  flex: 1;
`;

export const BoxPlan = styled.View`
  width: 90%;
  margin-top: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;


export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 10px;
`;

export const TitlePremium = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.check};
  padding-bottom: 10px;
`;

export const WrapperButton = styled.View`
  width: 100%;
  padding-top: 5%;
  align-items: center;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const IconLeft = styled(AntDesign)`
  font-size: 30px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.background_finish};
`;