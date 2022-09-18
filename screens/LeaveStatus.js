import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Card} from '@ui-kitten/components';

const LeaveStatus = () => {
  return (
    <View style={styles.container}>
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.listContainer}>
          <Card style={styles.listCard}>
            <Text>List</Text>
            <Text>List</Text>
            <Text>List</Text>
            <Text>List</Text>
            <Text>List</Text>
          </Card>
          <Card style={styles.listCard}>
            <Text>List</Text>
            <Text>List</Text>
          </Card>
          <Card style={styles.listCard}>
            <Text>List</Text>
          </Card>
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
