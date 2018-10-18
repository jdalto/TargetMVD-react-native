import React from 'react';
import styles from './styles';
import ModalDropdown from 'react-native-modal-dropdown';

const Select = ({ 
  input: { onChange, value, ...inputProps }, 
  options, 
  ...pickerProps 
  }) => (
  <ModalDropdown
    style={styles.selectArea}
    dropdownStyle={styles.dropDownArea}
    textStyle={styles.dropdownText}
    defaultValue={ value }
    onSelect={ value => onChange(value) }
    options={ options }
    { ...inputProps }
    { ...pickerProps }
  />
);

export default Select;