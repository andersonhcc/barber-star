import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex:1;
  background-color: rgba(34, 34, 34, 0.4);
  justify-content: center;
  align-items: center;

`;

export const Main = styled.View`
  width: 90%;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.background_finish};
`;

export const IconX = styled(Feather)`
  font-size: 18px;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 17px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Form = styled.View`
  padding-top: 10%;
  justify-content: center;
  align-items: center;
`;

export const InputName = styled.TextInput`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
`;

export const WrapperButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const TextChoose = styled.Text`
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
`;


export const ButtonHairCuts = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  width: 90%;
  padding-top: 3%;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;

export const BoxInfo = styled.View`
  width: 90%;
  flex-direction: row;
  padding-left: 10px;
`;

export const IconMaterial = styled(MaterialIcons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TitleHairCut = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  margin-left: 5px;
`;

export const IconFeather = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.title};
`;

