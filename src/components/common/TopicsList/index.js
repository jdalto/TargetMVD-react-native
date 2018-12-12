import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { getTopicIcon } from '../../../utils/helpers';
import styles from './styles';
import { TOPICS } from '../../../constants/appConstants';

const TopicsList = ({ onTopicSelect }) => (
  <View style={styles.container}>
    { 
      TOPICS.map((topic) => (
        <TouchableOpacity key={topic.id} onPress={() => onTopicSelect(topic.id)} style={styles.field}>
          <View style={styles.topicIcon}>
            <Image source={getTopicIcon(topic.id)}/>
          </View>
          <Text style={styles.topicTitle}>{topic.title}</Text>
        </TouchableOpacity>)
      )
    }
  </View> 
);

export default TopicsList;
