import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { redDefault, black } from '../../../constants/styleConstants';
import { getTopicTitle } from '../TopicsList';

const TopicSelector = ({
  input: { onChange, onFocus, ...restInput },
  width,
  defaultValue,
  onPress,
  selectedTopic = null,
  meta: { touched, error }}) => {

  const handleTopicSelection = (topic) => {
    if (topic !== ''){
      onChange(topic);
      return getTopicTitle(topic);
    }
  }

  return(
    <TouchableOpacity style={styles.container} onPress={onPress}>  
      <Text
        style={[styles.inputArea, { borderColor: (error && touched ? redDefault : black),
          borderWidth: (error && touched ? 1.5 : 0.5), width }]}
        {...restInput}
      >
        {selectedTopic !== '' ? handleTopicSelection(selectedTopic) : defaultValue}
      </Text>
      {error && touched && <Text style ={styles.errorText}>{error}</Text>}
    </TouchableOpacity>
  )
};

export default TopicSelector;
