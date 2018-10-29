import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Text, View, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import Input from '../../common/Input';
import ActionButton from '../../common/ActionButton';
import styles from './styles';
import { white, black } from '../../../constants/styleConstants';
import * as constraints from '../../../utils/constraints';

const SignInForm = ({ handleSubmit }) => (
  <View style={styles.container} keyboardShouldPersistTaps={'handled'} onSubmit={handleSubmit}>
    <View style={styles.field}>
      <Text style={styles.label}>EMAIL</Text>
      <Field
        name='email'
        component={Input}
      />
    </View>
    <View style={styles.field}>
      <Text style={styles.label}>PASSWORD</Text>
      <Field
        name='password'
        component={Input}
        password
      />
    </View>        
    <View style={styles.buttonsContainer}>
      <ActionButton title='SIGN IN' backgroundColor={black} textColor={white} onPress={handleSubmit}/>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.connectWithFacebookText}>CONNECT WITH FACEBOOK</Text>
      </TouchableOpacity>
      <Divider style={styles.dividerContainer} />
      <TouchableOpacity>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default reduxForm({ 
    form: 'signIn',
    validate: constraints.validations(constraints.signIn)
 })(SignInForm);