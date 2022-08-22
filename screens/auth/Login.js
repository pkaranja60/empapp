import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const Login = () => {
  const [workId, SetWorkId] = useState();

  useEffect(() => {});

  const onSubmit = e => {};

  return (
    <View style={styles.login}>
      <Image
        style={styles.touchableCardImage}
        source={require('../../assets/images/employee.svg')}
      />
      <Text style={styles.loginText}>Login to proceed</Text>

      <View style={styles.loginForm}>
        <TextInput
          placeholder="Work Id"
          style={styles.textInput}
          onChangeText={e => SetWorkId(e)}
          defaultValue={workId}
        />
        <TouchableOpacity style={styles.touchable} onPress={e => onSubmit(e)}>
          <Text style={styles.touchableText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  loginText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  loginForm: {
    marginHorizontal: 15,
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: '#dbdbdb',
    // borderColor: '#efefef',
    // backgroundColor: '#dbdbdb',
    marginTop: 10,
    padding: 13,
    borderRadius: 5,
    fontSize: 16,
    color: '#212121',
  },
  touchable: {
    backgroundColor: '#5ca046',
    padding: 20,
    elevation: 1,
    borderRadius: 15,
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  touchableText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
  },
});
