import React, { useState, useEffect, useContext, ReactNode, createContext } from "react";
import { Alert } from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../services/api";

interface IAuth {
  user: IUser;
  signIn: (credentials: ISignIn) => Promise<void>;
  signOut: () => void;
  loadingAuth: boolean;
  isAuthenticated: boolean;
  loading: boolean;


}

interface IAuthProvider {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  token: string;
  endereco?: string;
}


interface ISignIn {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as IAuth);

function AuthProvider({ children }: IAuthProvider) {
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);


  const [user, setUser] = useState<IUser>({
    id: '',
    name: '',
    email: '',
    token: '',
  });

  const isAuthenticated = !!user.name;


  async function signIn({ email, password }: ISignIn) {
    setLoadingAuth(true)
    try {
      const response = await api.post('/users/session', {
        email,
        password,
      })

      const { id, name, token, endereco } = response.data;
      const data = {
        ...response.data,
      }

      await AsyncStorage.setItem('@barbestar', JSON.stringify(data));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;


      setUser({
        id,
        name,
        token,
        endereco,
        email,
      });

      setLoadingAuth(false);

    } catch (error) {
      console.log(error);
      Alert.alert('Entrar', 'Email e/ou senha incorretos');
      setLoadingAuth(false);
    }
  }


  async function signOut() {
    await AsyncStorage.clear()
      .then(() => {
        setUser({
          id: '',
          name: '',
          email: '',
          token: '',
        })
      })
  }

  useEffect(() => {
    async function getUser() {
      const userInfo = await AsyncStorage.getItem('@barberstar');
      let hasUser: IUser = JSON.parse(userInfo || '{}');

      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;
        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          token: hasUser.token,
        })
      }

      setLoading(false);
    }

    getUser();

  }, [])


  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        loadingAuth,
        user,
        isAuthenticated,
        loading
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