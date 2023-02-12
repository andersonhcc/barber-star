import styled , { css }from 'styled-components/native';

interface TextProps {
  isPremium: boolean;
}

export const Container = styled.SafeAreaView`
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
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 23px;
  color: ${({ theme }) => theme.colors.primary};
`;


export const TitlePlan = styled.Text`
  padding-top: 5%;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.title};
`;

export const BoxPlan = styled.View`
  width: 90%;
  margin-top: 10px;
  padding: 10px 30px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const SubTitlePLan = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.check};

  ${({ isPremium, theme }) => isPremium ? css`color: ${theme.colors.secondary};` : css`color: ${theme.colors.check};`}
`;

export const ButtonChangePlan = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.check};
`;

export const TitleButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Buttons = styled.View`
  width: 90%;
  padding-top: 10%;
  justify-content: center;
  align-items: center;
`;

