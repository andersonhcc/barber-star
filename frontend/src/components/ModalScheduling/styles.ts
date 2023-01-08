import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

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
  
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export const WrapperButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  
  padding: 20px;
`;

