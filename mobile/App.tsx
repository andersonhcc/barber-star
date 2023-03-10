import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import * as SplashScreen from "expo-splash-screen";

import { ThemeProvider } from "styled-components";
import theme from './src/styles/theme';
import { Routes } from './src/routes';

import { AuthProvider } from './src/context/AuthContext';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";



SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

export default function App() {


  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;



  return (

    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='dark-content'
        translucent
        backgroundColor={"transparent"}
      />
      <NavigationContainer>
        <AuthProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Routes />

          </GestureHandlerRootView>
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>


  );
}

