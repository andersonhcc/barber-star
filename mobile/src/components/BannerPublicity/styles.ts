import styled from 'styled-components/native';

export const Container = styled.View`
  width: 95%;
  height: 150px;


  padding: 5% 5%;

  margin-top: 5%;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.background_finish};

`;

export const TextPublicty = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};

`;

export const LabelPublicty = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 17px;
  color: ${({ theme }) => theme.colors.white};

`;

export const ButtonPublicty = styled.TouchableOpacity`
  width: 80px;
  height: 30px;

  margin-top: 5%;

  justify-content: center;
  align-items: center;

  border-radius: 15px;

  background-color: ${({ theme }) => theme.colors.white};

`;

export const TitleButton = styled.Text`

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.title};

`;
