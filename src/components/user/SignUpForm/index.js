import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { ScrollView, Text, View, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import Input from '../../common/Input';
import Select from '../../common/Select';
import ActionButton from '../../common/ActionButton';
import styles from './styles';
import { white, black } from '../../../constants/styleConstants';
import * as constraints from '../../../utils/constraints';

const SignUpForm = ({ handleSubmit }) => (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps={'handled'}>
      <View style={styles.field}>
        <Text style={styles.label}>NAME</Text>
        <Field
        name='userName'
        component={Input}
        />
        <Text style={styles.label}>EMAIL</Text>
        <Field
            name='email'
            keyboardType={'email-address'}
            component={Input}
        />
        <Text style={styles.label}>PASSWORD</Text>
        <Field
            name='password'
            component={Input}
            password
            placeholder='MIN. 6 CHARACTERS LONG'
        />
        <Text style={styles.label}>CONFIRM PASS.</Text>
        <Field
            name='passwordConfirmation'
            component={Input}
            password
            placeholder='MIN. 6 CHARACTERS LONG'
        />
        <Text style={styles.label}>GENDER</Text>
        <Field
            name='gender'
            component={ Select }
            options={['Male', 'Female']}
            defaultValue='SELECT YOUR GENDER'
        />
        <View style={styles.buttonsContainer}>
            <ActionButton title='SIGN UP' backgroundColor={black} textColor={white} onPress={handleSubmit}/>
            <Divider style={{ backgroundColor: black, margin:10}} />
            <TouchableOpacity
                style={[styles.buttonLargeContainer, styles.primaryButton]}
                onPress={() => {}}>
                <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
  );

export default reduxForm({ 
    form: 'signUp',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: constraints.validations(constraints.signUp)
 })(SignUpForm);