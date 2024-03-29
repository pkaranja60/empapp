import {IndexPath} from '@ui-kitten/components';
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppPicker from '../components/AppPicker';
// import AppPicker from '../components/AppPicker';
import {DatePicker} from '../components/DatePicker';

export default function LeaveRequest() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [description, setDescription] = useState('');
  const [leaveType, setLeaveType] = useState(new IndexPath(0));

  return (
    <View style={styles.container}>
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.textWrapper}>
            <Text style={styles.textLabel}>Start Date</Text>
            <Text category="h6">
              Selected date: {startDate.toLocaleDateString()}
            </Text>
            <DatePicker
              date={startDate}
              onSelect={nextDate => setStartDate(nextDate)}
            />
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.textLabel}>End Date</Text>
            <Text category="h6">
              Selected date: {endDate.toLocaleDateString()}
            </Text>
            <DatePicker
              date={endDate}
              onSelect={nextDate => setEndDate(nextDate)}
            />
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.textLabel}>Reason for Leave</Text>
            <AppPicker
              selectedIndex={leaveType}
              onSelect={index => setLeaveType(index)}
            />
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.textLabel}>Description</Text>
            <TextInput
              style={styles.textInput}
              placeholder="If you chose Others please explain further ..... "
              placeholderTextColor="#778899"
              label="description"
              value={description}
              onChangeText={newText => setDescription(newText)}
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
    padding: 5,
  },
  textLabel: {
    fontFamily: 'Poppins-Medium',
    letterSpacing: 1,
    fontSize: 12,
    color: '#9400d3',
    marginBottom: 10,
  },
  form: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  textInput: {
    backgroundColor: '#e6e7ec',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 6,
    height: 100,
    padding: 10,
    color: '#212121',
    fontSize: 16,
  },
  touchableButton: {
    backgroundColor: '#f66e43',
    borderRadius: 15,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
    textTransform: 'uppercase',
  },
});
