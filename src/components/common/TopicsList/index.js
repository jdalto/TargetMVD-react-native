import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { getTopicIcon } from '../../../utils/helpers';
import styles from './styles';

export const Topics = [
  {
    'id': 1,
    'title': 'Football'
  },
  {
    'id': 2,
    'title': 'Travel'
  },
  {
    'id': 3,
    'title': 'Politics'
  },
  {
    'id': 4,
    'title': 'Art'
  },
  {
    'id': 5,
    'title': 'Dating'
  },
  {
    'id': 6,
    'title': 'Music'
  },
  {
    'id': 7,
    'title': 'Movies'
  },
  {
    'id': 8,
    'title': 'Series'
  },
  {
    'id': 9,
    'title': 'Food'
  }
];

const TopicsList = ({ onTopicSelect }) => (
  <View style={styles.container}>
    { 
      Topics.map( (topic) => {
        return (
          <TouchableOpacity key={topic.id} onPress={e => onTopicSelect(e,topic.id)} style={styles.field}>
            <View style={styles.topicIcon}>
              <Image source={getTopicIcon(topic.id)}/>
            </View>
            <Text style={styles.topicTitle}>{topic.title}</Text>
            </TouchableOpacity>
          );
        })
    }
  </View> 
);

export default TopicsList;

export const getTopicTitle = (id) => {
  const topic = Topics.find((element) => {
    return element.id === id;
  })
  return topic.title;
}
