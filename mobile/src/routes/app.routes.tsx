import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../@types/react-navigation';
import { SceneName } from './scene-name';


import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Scheduling } from '@screens/Scheduling';
import { HairCuts } from '@screens/HairCuts';
import { UserConfigs } from '@screens/UserConfigs';

import { useTheme } from 'styled-components';


const Tab = createBottomTabNavigator<RootStackParamList>();


export function AppRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator

      initialRouteName={SceneName.Scheduling}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: `${theme.colors.primary}`,
        tabBarInactiveTintColor: `${theme.colors.white}`,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: theme.colors.background_finish,
          position: 'absolute',
          paddingHorizontal: 20,
          borderTopColor: theme.colors.background,
          borderRadius: 20,
          marginBottom: 10,
          width: '90%',
          marginLeft: '5%',
        }
      }}
    >

      <Tab.Screen
        name={SceneName.UserConfigs}
        component={UserConfigs}
        options={{
          tabBarIcon: ({ color }) => {
            return <Feather name="settings" size={24} color={color} />
          }
        }}
      />

      <Tab.Screen
        name={SceneName.Scheduling}
        component={Scheduling}
        options={{
          tabBarIcon: ({ color }) => {
            return <Feather name="scissors" size={24} color={color} />
          }
        }}
      />



      <Tab.Screen
        name={SceneName.HairCuts}
        component={HairCuts}
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialCommunityIcons name="hair-dryer" size={24} color={color} />
          }
        }}
      />


    </Tab.Navigator>
  );
}