import React from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import { primaryBold, darkGrey, defaultBlack, errorColor } from '../../../constants/styleConstants';
import styles from './styles';

const Input = ({
  input: { onChange, ...restInput },
  password = false,
  characterRestriction,
  multiline = false,
  returnKeyType = 'done',
  placeholder  
}) => (
  <TextInput
      style={styles.inputArea}
      tintColor={darkGrey}
      baseColor={defaultBlack}
      lineWidth={0.3}
      onChangeText={onChange}
      secureTextEntry={password}
      {...restInput}
      errorColor={errorColor}
      characterRestriction={characterRestriction}
      multiline={multiline}
      returnKeyType={returnKeyType}
      placeholder={placeholder}
  />
);

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