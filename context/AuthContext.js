import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState, createContext} from 'react';
import {useEffect} from 'react';
import {LOGIN_URL} from '../services/config';

export const AuthContext = createContext();

// export const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {user: action.payload};
//     case 'LOGOUT':
//       return {user: null};
//     default:
//       return state;
//   }
// };

export const AuthContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

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
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
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
  }, []);

  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
