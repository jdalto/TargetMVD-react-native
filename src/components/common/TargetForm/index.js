import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Text, View } from 'react-native';
import Input from '../../common/Input';
import ActionButton from '../../common/ActionButton';
import styles from './styles';
import { white, black } from '../../../constants/styleConstants';
import * as constraints from '../../../utils/constraints';
import TopicsList from '../../common/TopicsList';
import TopicSelector from '../TopicSelector';

class TargetForm  extends Component {
  constructor(props){
    super(props);
    this.state = { 
      toggleSelectTopic: false,
      selectedTopic: ''
    };
    this.renderTopicsList = this.renderTopicsList.bind(this);
    this.handleTopicSelection = this.handleTopicSelection.bind(this);
  }

  renderTopicsList(){
    this.setState({
      toggleSelectTopic: true
    })
  }

  handleTopicSelection(topicId){
    this.setState({
      selectedTopic: topicId,
      toggleSelectTopic: false
    })
  }

  render(){
    const { toggleSelectTopic, selectedTopic } = this.state;
    const { handleSubmit } = this.props;
    if(toggleSelectTopic)
      return <TopicsList onTopicSelect={this.handleTopicSelection}/>;
    else 
      return (
        <View style={styles.container} keyboardShouldPersistTaps="handled" onSubmit={handleSubmit}>
          <View style={styles.field}>
            <Text style={styles.label}>SPECIFY AREA LENGHT</Text>
            <Field
              name="areaLenght"
              component={Input}
              keyboardType="numeric"
              width={250}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>TARGET TITLE</Text>
            <Field
              name="targetTitle"
              component={Input}
              width={250}
            />
          </View> 
          <View style={styles.field}>
            <Text style={styles.label}>SELECT A TOPIC</Text>
            <Field
              name="topic"
              component={TopicSelector}
              defaultValue="What do you want to talk about?"
              width={250}
              onPress={(e) => this.renderTopicsList(e)}
              selectedTopic={selectedTopic}
            />
          </View> 
          <View style={styles.buttonsContainer}>
            <ActionButton title="SAVE TARGET" backgroundColor={black} textColor={white} onPress={handleSubmit}/>
          </View>
        </View>
      )
  }
};

export default reduxForm({ 
    form: "targetForm",
    validate: constraints.validations(constraints.createTarget)
 })(TargetForm);
