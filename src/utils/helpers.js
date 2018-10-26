import { Alert } from 'react-native';
import _ from 'lodash';

//import { defaultError } from '../constants/messages';
//export const getTopSpacing = () => (Platform.OS === 'ios' ? 100 : 100);

export const getTopSpacing = () => ('20%');

export const alertErrors = (message = '') => {
    Alert.alert(
      'An error ocurred',
      message,
      [{ text: 'OK' }],
      { cancelable: false }
    );
};

export const getFullErrorMessage = (errors) => {
  let fullErrorMessage = '';
  _.forEach(errors, function(value, index) {
    fullErrorMessage += `${index.toUpperCase()} ${value[0]} \n`;
  });
  return fullErrorMessage;
}