import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';

import LoginSVG from '../../assets/images/employee.svg';
import {AuthContext} from '../../context/AuthContext';

const Login = ({navigation}) => {
  const {login} = useContext(AuthContext);

  const [workId, SetWorkId] = useState('');

  return (
    <View style={styles.login}>
      <View style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
          <LoginSVG width={300} height={300} />
        </View>
        <Text style={styles.loginText}>Login to proceed</Text>

        <View style={styles.action}>
          <Icon name="id-badge" color={'black'} size={20} />
          <TextInput
            placeholder="WorkId"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={e => SetWorkId(e)}
            defaultValue={workId}
            style={[
              styles.textInput,
              {
                color: 'gray',
              },
            ]}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.touchable}
            // onPress={() => navigation.navigate(Home)}
            onPress={() => login(workId)}>
            <Text style={styles.touchableText}>Login</Text>
          </TouchableOpacity>
        </View>
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
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    marginLeft: 10,
  },

  touchable: {
    backgroundColor: '#5ca046',
    padding: 20,
    elevation: 1,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    marginTop: 20,
  },
  touchableText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
