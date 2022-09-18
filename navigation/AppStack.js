import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import LeaveRequest from '../screens/LeaveRequest';
import LeaveStatus from '../screens/LeaveStatus';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="LeaveRequest" component={LeaveRequest} />
      <Stack.Screen name="LeaveStatus" component={LeaveStatus} />
    </Stack.Navigator>
  );
};

export default AppStack;
