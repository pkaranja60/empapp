import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <MaterialIcons name="account-circle" size={35} color="white" />
            <View style={styles.informationContainer}>
              <Text style={styles.textPrimary}>Name & Other Information</Text>
            </View>
            <View style={styles.informationOtherContainer}>
              <View>
                <Text style={styles.textPrimary}>Leave Days Remaining</Text>
                <Text style={styles.textPrimary}>Leave Days Remaining</Text>
              </View>
              <View style={styles.lineStyle} />
              <View>
                <Text style={styles.textPrimary}>Leave Days Applied</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.sectionContainer}>
        <TouchableOpacity
          style={styles.touchableCard}
          onPress={() => navigation.navigate('LeaveRequest')}>
          <Image
            style={styles.touchableCardImage}
            source={require('../assets/images/icons8-form-64.png')}
          />
          <Text style={styles.textSecondary}>Leave Application</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableCard}
          onPress={() => navigation.navigate('LeaveStatus')}>
          <Image
            style={styles.touchableCardImage}
            source={require('../assets/images/icons8-notification-center-100.png')}
          />
          <Text style={styles.textSecondary}>Notifications</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingHorizontal: 5,
  },
  cardContainer: {
    flexDirection: 'column',
  },
  card: {
    margin: 10,
    marginTop: 20,
    borderRadius: 20,
    height: 200,
    backgroundColor: '#694fad',
  },
  informationContainer: {
    padding: 10,
    marginVertical: 10,
  },
  informationOtherContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textPrimary: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  touchableCard: {
    margin: 15,
    marginTop: 25,
    // marginVertical: 4,
    // marginHorizontal: 5,
    // marginLeft: '3%',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    borderRadius: 10,
    height: 115,
    width: '40.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableCardImage: {
    resizeMode: 'contain',
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSecondary: {
    padding: 5,
    textAlign: 'center',
    color: '#993399',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  lineStyle: {
    borderWidth: 0.8,
    height: 50,
    borderColor: '#fff',
    margin: 10,
  },
});

export default Home;
