import { Alert } from 'react-native';
import _ from 'lodash';

export const getTopSpacing = () => ('20%');  //TODO: Fix this

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
