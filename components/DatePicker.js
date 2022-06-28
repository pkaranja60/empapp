import React from 'react';
import {Datepicker, Icon} from '@ui-kitten/components';
import Feather from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native';

const CalendarIcon = () => <Feather name="calendar" size={24} color="black" />;

export const DatePicker = ({date, onSelect}) => {
  return (
    <Datepicker
      style={styles.datePicker}
      placeholder="Pick a Date"
      date={date}
      onSelect={onSelect}
      accessoryRight={CalendarIcon}
    />
  );
};

const styles = StyleSheet.create({
  datePicker: {
    padding: 5,
    borderRadius: 4,
    fontSize: 16,
    color: '#212121',
  },
});
