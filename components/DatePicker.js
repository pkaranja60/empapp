import React from 'react';
import {Datepicker} from '@ui-kitten/components';
import Feather from 'react-native-vector-icons/Feather';

const CalendarIcon = () => {
  <Feather name="calendar" size={24} color="black" />;
};

export const DatePicker = ({date, onSelect}) => {
  return (
    <Datepicker
      placeholder="Pick a Date"
      date={date}
      onSelect={onSelect}
      accessoryRight={CalendarIcon}
    />
  );
};
