import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {EMPLOYEE_LOGIN} from '../../constants/AppUrls';

// Login user
const login = async employeeData => {
  const response = await axios.post(EMPLOYEE_LOGIN, employeeData);

  if (response.data) {
    await AsyncStorage.setItem('@key', JSON.stringify(response.data));
    console.log(response.data);
  }

  return response.data;
};

const logout = async () => {
  await AsyncStorage.removeItem('@key');
};

const authService = {
  login,
  logout,
};

export default authService;
