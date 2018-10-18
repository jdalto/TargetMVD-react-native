import React from 'react';
import { string, number, func } from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { black, white, orange } from '../../../constants/styleConstants';
import styles from './styles'

const ActionButton = ({
  title,
  onPress,
  backgroundColor,
  borderColor
}) => (
    <Button
    title={title}
    onPress={onPress}
    titleStyle={{ fontSize: "4" }}
    buttonStyle={[styles.container, { backgroundColor: backgroundColor, borderColor: borderColor}]}
  />
  );

ActionButton.propTypes = {
  onPress: func,
  title: string.isRequired,
  color: string,
  textColor: string,
  accessibilityLabel: string
};

export default ActionButton;