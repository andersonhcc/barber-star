import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';


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
  width: 100%;
`;

export const BoxHairCut = styled.View`
  flex: 1;
  width: 90%;
  margin-top: 15px;
  border-radius: 10px;
  flex-direction: row;
  padding: 10px 10px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

`;

export const NameHairCut = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 15px;
`;

export const Icon = styled(AntDesign).attrs({
  name: "disconnect"
})`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.white};
`;


export const Price = styled.Text`

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};

  position: absolute;
  right: 0;

  margin-right: 10px;
  margin-top: 5px;

`;

export const Footer = styled.View`
  width: 100%;
  height: 120px;
  align-items: center;
`;