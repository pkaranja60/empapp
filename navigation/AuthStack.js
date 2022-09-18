import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

import Login from '../screens/auth/Login';
import LeaveRequest from '../screens/LeaveRequest';
import LeaveStatus from '../screens/LeaveStatus';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>;
  }
  return (
    <Stack.Navigator initialRouteName={Login}>
      {userToken !== null ? (
        <>
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="LeaveRequest" component={LeaveRequest} />
          <Stack.Screen name="LeaveStatus" component={LeaveStatus} />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
