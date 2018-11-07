import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Text, View, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import Input from '../../common/Input';
import Select from '../../common/Select';
import ActionButton from '../../common/ActionButton';
import styles from './styles';
import { white, black } from '../../../constants/styleConstants';
import * as constraints from '../../../utils/constraints';
import LinkButton from '../../common/LinkButton';

const SignUpForm = ({ handleSubmit, goToSignIn }) => {
  return (
    <View contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" onSubmit={handleSubmit}>
      <View style={styles.field}>
        <Text style={styles.label}>NAME</Text>
        <Field
          name="name"
          component={Input}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>EMAIL</Text>
        <Field
          name="email"
          keyboardType="email-address"
          component={Input}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>PASSWORD</Text>
        <Field
          name="password"
          component={Input}
          password
          placeholder="MIN. 8 CHARACTERS LONG"
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>CONFIRM PASSWORD</Text>
        <Field
          name="password_confirmation"
          component={Input}
          password
          placeholder="MIN. 8 CHARACTERS LONG"
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>GENDER</Text>
        <Field
          name="gender"
          component={Select}
          options={['Male', 'Female']}
          defaultValue="SELECT YOUR GENDER"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <ActionButton title="SIGN UP" backgroundColor={black} textColor={white} onPress={handleSubmit}/>
        <Divider style={styles.dividerContainer} />
        <LinkButton text="SIGN IN" textStyle={styles.buttonText} onPress={goToSignIn}/>
      </View>
    </View>
  )
};

export default reduxForm({ 
    form: 'signUp',
    validate: constraints.validations(constraints.signUp)
 })(SignUpForm);
 