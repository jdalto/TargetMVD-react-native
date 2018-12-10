import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Text, View } from 'react-native';
import Input from '../../common/Input';
import ActionButton from '../../common/ActionButton';
import styles from './styles';
import { white, black } from '../../../constants/styleConstants';
import * as constraints from '../../../utils/constraints';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View contentContainerStyle={styles.container} keyboardShouldPersistTaps={'handled'} onSubmit={this.props.handleSubmit}>
    <View style={styles.formContainer}>
      <View style={styles.field}>
        <Text style={styles.label}>USERNAME</Text>
        <Field
          name='name'
          component={Input}
          width={180}
          value={this.props.userAccount.getIn(['name'])}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>EMAIL</Text>
        <Field
          name='email'
          component={Input}
          width={180}
          value={this.props.userAccount.getIn(['email'])}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>PASSWORD</Text>
        <Field
          name='password'
          component={Input}
          password
          width={180}
          value='*******'
        />
      </View>
    </View>    
    <View style={styles.buttonsContainer}>
      <ActionButton title='SAVE CHANGES' backgroundColor={black} textColor={white} onPress={this.props.handleSubmit}/>
    </View>
  </View>
    );
  }
};

export default reduxForm({ 
    form: 'profileEdition',
    validate: constraints.validations(constraints.profileEdition)
 })(ProfileForm);
