import {Picker} from '@react-native-picker/picker';
import React from 'react';

const AppPicker = ({selectedValue, onValueChange}) => {
  return (
    <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
      <Picker.Item labe="Medical Leave" value="Medical" />
    </Picker>
  );
};

export default AppPicker;
