import React, {Component}from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ModalDropdown from 'react-native-modal-dropdown';
import {redDefault, black} from '../../../constants/styleConstants'

class Select extends Component {
  constructor(props){
    super(props);
    this.state = {value: props.input.value};  
  }

  handleOnSelectChange(value) {
    switch(value) {
      case '0':
        this.props.input.value = 0;
        break;
      case '1':
        this.props.input.value = 1;
        break;
    }
    this.props.input.onChange(this.props.input.value);
  };

  render () {
    const {
      input: { onChange, value, ...inputProps }, 
      options, 
      meta: { touched, error },
      ...pickerProps
    } = this.props;
    return(
      <View style={styles.container}>
        <ModalDropdown
            style={[styles.selectArea, { borderColor: (error && touched ? redDefault : black), borderWidth: (error && touched ? 1.5 : 0.5) }]}
            dropdownStyle={styles.dropDownArea}
            textStyle={styles.dropdownText}
            defaultValue={ value }
            onSelect={ value => this.handleOnSelectChange(value) }
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
