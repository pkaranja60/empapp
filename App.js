import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './navigation/AuthStack';

import {AuthContextProvider} from './context/AuthContext';

export default () => (
  <AuthContextProvider>
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <AuthStack />
      </ApplicationProvider>
    </NavigationContainer>
  </AuthContextProvider>
);
