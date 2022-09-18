import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#694fad',
        tabBarStyle: {
          width: '50%',
          marginLeft: '20%',
          position: 'absolute',
          elevation: 0,
          ...styles.tabBar,
        },
      }}>
      <Tab.Screen
        name="Home_Tab"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
          },
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    bottom: 20,
    height: 60,
    borderRadius: 35,
    elevation: 1.5,
    width: 250,
    borderWidth: 1,
    borderColor: '#dbdbdb',
  },
});

export default TabNavigator;
