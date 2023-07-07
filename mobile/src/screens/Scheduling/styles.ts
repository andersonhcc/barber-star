import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding-left: 5%;
`;

export const Header = styled.View`
  width: 100%;
  height: 120px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 23px;
  color: ${({ theme }) => theme.colors.title};
`;


export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};

`;

export const Main = styled.View`
  flex:1;
  padding-top: 5%;
  padding-left: 5%;
`;

export const WrapperTitleScheduling = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  
`;

export const TitleScheduling = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 23px;
  color: ${({ theme }) => theme.colors.title};
`;

export const ButtonAddScheduling = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 50px ;
  align-items: center;
  justify-content: center;

  margin-left: 15px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LabelButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-size: 20px;

`;


export const WrapperList = styled.View`
  flex: 1;
`;


export const ButtonSignUp = styled.TouchableOpacity`
  justify-content: center;
  padding: 25px 20px;
`;

export const Icon = styled(AntDesign).attrs({
  name: "logout"
})`
  font-size: 23px;
  color: ${({ theme }) => theme.colors.title};
`;


// componnent default flatlist


export const Default = styled.View`
  height: 100%;
  padding-top: 20%;
  align-items: center;
`;

export const TextDefault = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};

`;
