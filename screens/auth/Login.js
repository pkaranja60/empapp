import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../features/auth/authSlice';

const Login = () => {
  const [workId, SetWorkId] = useState();

  const dispatch = useDispatch();

  const {user, isLoading, isSuccess, isError, message} = useSelector(
    state => state.auth,
  );

  useEffect(() => {
    if (isSuccess || user) {
    }
  });

  const onSubmit = e => {
    e.preventDefault();

    const userData = {
      workId,
    };

    dispatch(login(userData));
  };

  return (
    <View style={styles.login}>
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
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#efefef',
    backgroundColor: '#dbdbdb',
    marginTop: 10,
    padding: 13,
    borderRadius: 4,
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
    fontWeight: '400',
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
  },
});
