import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './react-navigation';
import { SceneName } from './scene-name';

import { Scheduling } from '../screens/Scheduling';


const Stack = createNativeStackNavigator<RootStackParamList>();


export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, headerLeft: undefined, gestureEnabled: false, }}
      initialRouteName={SceneName.Scheduling}
    >

      <Stack.Screen
        name={SceneName.Scheduling}
        component={Scheduling}
      />



    </Stack.Navigator>
  );
}