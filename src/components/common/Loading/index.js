import React from 'react';
import { string } from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const Loading = ({ size = 'large' }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} />
  </View>
);

Loading.propTypes = {
  size: string
};

export default Loading;