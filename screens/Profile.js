import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const Profile = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={() => logout()}>
        <Text style={styles.touchableText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    backgroundColor: '#5ca046',
    padding: 20,
    elevation: 1,
    borderRadius: 15,
    width: '95%',
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
