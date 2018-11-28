import React from 'react';
import { string, func } from 'prop-types';
import { Button } from 'react-native-elements';
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
      textStyle={styles.title}
      buttonStyle={[styles.container, { backgroundColor, borderColor }]}
      fontFamily="Open Sans"
      fontStyle="normal"
      fontWeight="600"
      fontSize={11}
    />
);

ActionButton.propTypes = {
  onPress: func,
  title: string.isRequired,
  textColor: string,
  backgroundColor: string,
  borderColor: string,
  accessibilityLabel: string
};

export default ActionButton;
