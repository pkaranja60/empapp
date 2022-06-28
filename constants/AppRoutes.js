import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text, View} from 'react-native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import LeaveRequest from '../screens/LeaveRequest';
import LeaveStatus from '../screens/LeaveStatus';
import Login from '../screens/auth/Login';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      labeled="false"
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('TabNavigator');
  }, 3000);
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
}

const AppRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LeaveRequest"
          component={LeaveRequest}
          options={{
            headerStyle: {
              backgroundColor: '#993399',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            },
          }}
        />
        <Stack.Screen
          name="LeaveStatus"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#993399',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
