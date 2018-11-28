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

export const getTopicIcon = (id) => {
  switch(id){
    case 1:
      return require('../assets/football.png')
    case 2:
      return require('../assets/travel.png')
    case 3:
      return require('../assets/politics.png')
    case 4:
      return require('../assets/art.png')
    case 5:
      return require('../assets/dating.png')
    case 6:
      return require('../assets/music.png')
    case 7:
      return require('../assets/movies.png')
    case 8:
      return require('../assets/series.png')
    case 9:
      return require('../assets/food.png')
  }
}
