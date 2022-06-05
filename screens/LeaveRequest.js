import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {DatePicker} from '../components/DatePicker';

export default function LeaveRequest() {
  const {startDate, setStartDate} = useState('');
  const {endDate, setEndDate} = useState('');
  const {description, setDescription} = useState('');

  return (
    <View style={styles.container}>
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.textWrapper}>
            <Text style={styles.textLabel}>Start Date</Text>
            <DatePicker date={startDate} onSelect={setStartDate} />
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.textLabel}>End Date</Text>
            <DatePicker date={endDate} onSelect={setEndDate} />
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.textLabel}>Description</Text>
            <TextInput
              style={styles.textInput}
              placeholder="If you chose Others please explain further ..... "
              placeholderTextColor="#778899"
              label="description"
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </View>

          <TouchableOpacity style={styles.touchableButton}>
            <Text style={styles.buttonText}>Submit Request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  textWrapper: {
    marginVertical: 5,
  },
  textLabel: {
    fontWeight: '500',
    letterSpacing: 1,
    fontSize: 12,
    color: '#9400d3',
    marginVertical: 12,
  },
  form: {
    marginHorizontal: 8,
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  textInput: {
    backgroundColor: '#e6e7ec',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 6,
    height: 100,
    padding: 10,
    color: '#000',
    fontSize: 12,
  },
  touchableButton: {
    backgroundColor: '#f66e43',
    borderRadius: 15,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#fff',
    textTransform: 'uppercase',
  },
});
