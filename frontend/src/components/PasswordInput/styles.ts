import styled, { css } from 'styled-components/native';


interface Props {
  isFocused: boolean;
}


export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;


`;

export const IconContainer = styled.View<Props>`
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;

  ${({ isFocused, theme}) => 
  isFocused &&
  css`
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.primary};
  ` 
}


  background-color: ${({ theme }) => theme.colors.line};

`;

export const InputText = styled.TextInput<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.title};

  ${({ isFocused, theme}) => 
  isFocused &&
  css`
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.primary};
  ` 
}

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;

  padding: 0 23px;
`; 

export const ChangePasswordVisibilityButton = styled.TouchableOpacity``;