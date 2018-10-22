import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { ScrollView, Text, View, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import Input from '../../common/Input';
import ActionButton from '../../common/ActionButton';
import styles from './styles';
import { white, black } from '../../../constants/styleConstants';
import * as constraints from '../../../utils/constraints';

const SignInForm = ({ handleSubmit }) => (
    <View contentContainerStyle={styles.container} keyboardShouldPersistTaps={'handled'} onSubmit={handleSubmit}>
      <View style={styles.field}>
        <Text style={styles.label}>NAME</Text>
        <Field
        name='userName'
        component={Input}
        />
        <Text style={styles.label}>PASSWORD</Text>
        <Field
            name='password'
            component={Input}
            password
        />
        <View style={styles.buttonsContainer}>
            <ActionButton title='SIGN IN' backgroundColor={black} textColor={white} onPress={handleSubmit}/>
            <TouchableOpacity
                style={[styles.buttonLargeContainer, styles.primaryButton]}
                onPress={() => {}}>
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
            </TouchableOpacity>
        </View>
    </View>
    </View>
  );

export default reduxForm({ 
    form: 'signIn',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
   // validate: constraints.validations(constraints.signIn)
 })(SignInForm);