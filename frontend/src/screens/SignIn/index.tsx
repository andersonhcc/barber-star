import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import { useTheme } from 'styled-components';

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { ButtonDefault } from '../../components/ButtonDefault';

import {
  Container,
  Header,
  Title,
  TitleStar,
  SubTitle,
  Form,
  Footer,
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Container>
          <Header>
            <Title>
              Bem vindo à <TitleStar>Barber Star.</TitleStar>
            </Title>
            <SubTitle>
              Entre na sua barbearia{'\n'}
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize={'none'}
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <ButtonDefault
              title="Entrar"
              backgroundColor={theme.colors.primary}
              disabled={true}
            />

            <ButtonDefault
              title="Criar conta"
              backgroundColor={theme.colors.secondary}
              style={{ marginTop: 20}}
              disabled={true}
            />

          </Footer>

        </Container>

      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>

  );
}