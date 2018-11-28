import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { redDefault, black } from '../../../constants/styleConstants';
import { getTopicTitle } from '../TopicsList';

class TopicSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTopic: null
    };
    this.handleTopicSelection = this.handleTopicSelection.bind(this);
  }

  handleTopicSelection(value) {
    if (value !== ''){
      const { input } = this.props;
      input.value = value;
      input.onChange(this.props.input.value);
      return getTopicTitle(value);
    }
  };

  render () {
    const {
      input: { onChange, onFocus, ...restInput },
      width,
      defaultValue,
      onPress,
      selectedTopic = null,
      meta: { touched, error }                 
    } = this.props;
    return(
      <TouchableOpacity style={styles.container} onPress={onPress}>  
        <Text
          style={[styles.inputArea, { borderColor: (error && touched ? redDefault : black),
            borderWidth: (error && touched ? 1.5 : 0.5), width }]}
          {...restInput}
        >
        {selectedTopic !== '' ? this.handleTopicSelection(selectedTopic) : defaultValue}
        </Text>
        {error && touched && <Text style ={styles.errorText}>{error}</Text>}
      </TouchableOpacity>
    )
  }
};

export default TopicSelector;
