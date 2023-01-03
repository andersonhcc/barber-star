import React, { useState, useEffect, useContext, ReactNode, createContext } from "react";
import { Alert } from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../services/api";

interface IAuth {
  user: IUser;
  signIn: (credentials: ISignIn) => Promise<void>;
  loadingAuth: boolean;
}

interface IAuthProvider {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  token: string;
}


interface ISignIn {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as IAuth);

function AuthProvider({ children }: IAuthProvider) {
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [user, setUser] = useState<IUser>({
    id: '',
    name: '',
    email: '',
    token: '',
  });

  async function signIn ({ email, password} : ISignIn){
    setLoadingAuth(true)

    try {
      const response = await api.post('/users/session', {
        email,
        password,
      })

      const { id, name, token } = response.data;
      const data = {
        ...response.data,
      }

      await AsyncStorage.setItem('@barbestar', JSON.stringify(data));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;


      setUser({
        id,
        name,
        token,
        email,
      });

      Alert.alert('Logado com sucesso!')


      setLoadingAuth(false);
    
    } catch (error) {
        console.log(error);
        Alert.alert('Entrar', 'Email e/ou senha incorretos');
        setLoadingAuth(false);
    }

  }


  return (
    <AuthContext.Provider
      value={{
        signIn,
        loadingAuth,
        user,
      }}
    >
      {children}

    </AuthContext.Provider>
  )

}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }