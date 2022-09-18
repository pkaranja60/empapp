import React from 'react';
import {Layout, Select, SelectItem} from '@ui-kitten/components';

const data = ['Medical', 'Annual', 'Maternity', 'Education', 'Other'];

const AppPicker = ({selectedIndex, onSelect}) => {
  const displayValue = data[selectedIndex.row];

  const renderOption = title => <SelectItem title={title} />;

  return (
    <Layout>
      <Select
        placeholder="Default"
        selectedIndex={selectedIndex}
        onSelect={onSelect}
        value={displayValue}>
        {data.map(renderOption)}
      </Select>
    </Layout>
  );
};

export default AppPicker;
