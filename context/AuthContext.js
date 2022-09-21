import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState, createContext} from 'react';
import {useEffect} from 'react';
import {LOGIN_URL, PROFILE_URL} from '../services/config';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const login = workId => {
    setIsLoading(true);
    axios
      .post(LOGIN_URL, {workId})
      .then(response => {
        let userInfo = response.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.token);

        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        AsyncStorage.setItem('userToken', userInfo.token);
      })
      .catch(e => {
        console.log(e.message);
      });

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const loadProfile = token => {
    setIsLoading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(PROFILE_URL, config)
      .then(response => {
        let employeeProfile = response.data;
        setUserProfile(employeeProfile);
      })
      .catch(e => {
        console.log(e.message);
      });

    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
    loadProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, userInfo, userProfile}}>
      {children}
    </AuthContext.Provider>
  );
};
