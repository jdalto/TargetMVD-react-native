import React, {Component}from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import ModalDropdown from 'react-native-modal-dropdown';
import {redDefault, black} from '../../../constants/styleConstants'

class Select extends Component {
  constructor(props){
    super(props);
    this.state = {value: props.input.value};  
  }

  handleOnSelectChange(value) {
    this.props.input.value = parseInt(value);
    this.props.input.onChange(this.props.input.value);
  };

  render () {
    const {
      input: { onChange, value, ...inputProps }, 
      options,
      width,
      dropDownHeight,
      dropDownWidth,
      defaultValue,
      onDropdownWillShow,
      meta: { touched, error },
      ...pickerProps
    } = this.props;
    return(
      <View style={styles.container}>
        <ModalDropdown
          style={[styles.selectArea, { borderColor: (error && touched ? redDefault : black), 
            borderWidth: (error && touched ? 1.5 : 0.5), width }]}
          dropdownStyle={[styles.dropDownArea, {width: dropDownWidth, height: dropDownHeight}]}
          textStyle={styles.dropdownText}
          defaultValue={ defaultValue || value }
          onSelect={ value => this.handleOnSelectChange(value) }
          onDropdownWillShow={onDropdownWillShow}
          options={ options }
          { ...inputProps }
          { ...pickerProps }
        />
        {error && touched && <Text style ={styles.errorText}>{error}</Text>}
      </View> 
    )
  }
};

export default Select;
