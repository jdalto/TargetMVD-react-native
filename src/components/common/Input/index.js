import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import { redDefault, darkGrey, defaultBlack, black } from '../../../constants/styleConstants';
import styles from './styles';

class Input extends Component {
  render () {
    const {
      input: { onChange, ...restInput },
      password = false,
      characterRestriction,
      multiline = false,
      returnKeyType = 'done',
      placeholder,
      meta: { touched, error }                 
    } = this.props;
    return(
      <View style={styles.container}>  
      <TextInput
          style={[styles.inputArea, { borderColor: (error && touched ? redDefault : black), borderWidth: (error && touched ? 1.5 : 0.5) }]}
          tintColor={darkGrey}
          baseColor={defaultBlack}
          lineWidth={0.3}
          onChangeText={onChange}
          secureTextEntry={password}
          {...restInput}
          characterRestriction={characterRestriction}
          multiline={multiline}
          returnKeyType={returnKeyType}
          placeholder={placeholder}
      />
      {error && touched && <Text style ={styles.errorText}>{error}</Text>}
    </View>
    )
  }
};

const { string, object, bool, number } = PropTypes;

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool,
  characterRestriction: number,
  multiline: bool,
  returnKeyType: string
};

export default Input;