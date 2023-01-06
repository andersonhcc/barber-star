import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import * as yup from 'yup';

import { useAuth } from '../../context/AuthContext';
import { api } from '../../services/api';

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
  WrapperSignUp,
  ButtonSignUp,
  LabelSignUp,
  TileSignUp,
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('teste@teste.com');
  const [password, setPassword] = useState('123123');
  const [name, setName] = useState('');
  const theme = useTheme();
  const [signUp, setSignUp] = useState(false);
  const { signIn, loadingAuth } = useAuth();

  async function handleSignIn() {
    
    
    try {

      const schema = yup.object().shape({
        password: yup.string()
          .required('A senha é obrigatória'),
        email: yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido')
      })

      await schema.validate({ email, password });



      await signIn({ email, password });



    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert('Opa', error.message)
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }

  }

  async function handleSignUp() {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
      });

      Alert.alert('Cadastrado com sucesso!');

    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Não foi possível cadastrar sua barbearia!');

    }
  }


  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
      style={{backgroundColor: '#1F1B24', flex:1}}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Container>
          <Header>
            <Title>
              Bem vindo à <TitleStar>BarberStar.</TitleStar>
            </Title>

            <SubTitle>
              {signUp ? 'Cadastre sua barbearia' : 'Entre na sua barbearia'}
            </SubTitle>
          </Header>

          <Form>

            {signUp &&
              <Input
                iconName='home'
                placeholder='Nome da barbearia'
                onChangeText={setName}
                value={name}
              />

            }
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
            {signUp ?
              <ButtonDefault
                title="Cadastrar"
                backgroundColor={theme.colors.primary}
                disabled={false}
                onPress={handleSignUp}
              />

              : <ButtonDefault
                title="Entrar"
                backgroundColor={theme.colors.primary}
                disabled={false}
                onPress={handleSignIn}
                isLoading={loadingAuth}
              />
            }


            <WrapperSignUp>
              {signUp ?
                <>
                  <LabelSignUp>Deseja efetuar login? Clique</LabelSignUp>
                  <ButtonSignUp
                    onPress={() => setSignUp(false)}
                    activeOpacity={0.7}
                  >
                    <TileSignUp> aqui</TileSignUp>
                  </ButtonSignUp>
                </>
                :
                <>
                  <LabelSignUp>Deseja cadastrar sua barbearia? Clique</LabelSignUp>
                  <ButtonSignUp
                    onPress={() => setSignUp(true)}
                    activeOpacity={0.7}
                  >
                    <TileSignUp> aqui</TileSignUp>
                  </ButtonSignUp>
                </>
              }

            </WrapperSignUp>

          </Footer>

        </Container>

      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>

  );
}