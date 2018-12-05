import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { redDefault, black } from '../../../constants/styleConstants';
import { TOPICS } from '../../../constants/appConstants';

const TopicSelector = ({
  input: { onChange, onFocus, ...restInput },
  width,
  defaultValue,
  onPress,
  selectedTopic = null,
  meta: { touched, error }}) => {

  const setTopicValue = (id) => {
    onChange(id);
    const topic = TOPICS.find((element) => {
      return element.id === id;
    })
    return topic.title;
  }

  return(
    <TouchableOpacity style={styles.container} onPress={onPress}>  
      <Text
        style={[
          styles.inputArea,
          { 
            borderColor: (error && touched ? redDefault : black),
            borderWidth: (error && touched ? 1.5 : 0.5),
            width 
          }
        ]}
        {...restInput}
      >
        {selectedTopic !== '' ? setTopicValue(selectedTopic) : defaultValue}
      </Text>
      {error && touched && <Text style ={styles.errorText}>{error}</Text>}
    </TouchableOpacity>
  )
};

export default TopicSelector;
