import React from 'react';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

import { useTheme } from 'styled-components';
import { useAuth } from '@context/AuthContext';

import { Loading } from '@components/Loading';

export function Routes (){
    const theme = useTheme();
    const { isAuthenticated, loading } = useAuth();

    if(loading){
      return(
        <Loading color={theme.colors.white} size='large'/>
      )
    }


    return (
      isAuthenticated ? <AppRoutes /> : <AuthRoutes/>
    )

}