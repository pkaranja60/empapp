import React from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import {Card} from '@ui-kitten/components';

const renderLeave = ({leave}) => {
  <View>
    <Card style={styles.listCard}>
      <Text>{leave.leaveType}</Text>
    </Card>
  </View>;
};

const LeaveStatus = () => {
  return (
    <View style={styles.container}>
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={leave => leave._id}
            renderItem={renderLeave}
            vertical
            decelerationRate="fast"
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  listContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  listCard: {
    marginBottom: 10,
    elevation: 15,
    borderRadius: 10,
    padding: 10,
  },
});

export default LeaveStatus;
