import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import EditProfile from '../screens/EditProfile';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
          },
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons
                name="account-edit"
                size={34}
                backgroundColor={'#fff'}
                color={'#000'}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
          },
        }}
      />
    </ProfileStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#694fad',
        tabBarStyle: {
          width: '50%',
          marginLeft: '20%',
          position: 'absolute',
          elevation: 0.3,
          ...styles.tabBar,
        },
      }}>
      <Tab.Screen
        name="Home_Tab"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStackScreen"
        component={ProfileStackScreen}
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
    width: 250,
    borderWidth: 1.5,
    borderColor: '#dbdbde',
  },
});

export default TabNavigator;
