import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Text, View } from 'react-native';
import Input from '../../common/Input';
import ActionButton from '../../common/ActionButton';
import styles from './styles';
import { white, black } from '../../../constants/styleConstants';
import * as constraints from '../../../utils/constraints';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { alertErrors } from '../../../utils/helpers';
import LinkButton from '../../common/LinkButton';

const SignInForm = ({ handleSubmit, goToSignUp, facebookSignIn  }) => {

  const handleFacebookSignIn = (error, result) => {
    if (error) {
      alertErrors('login has error: ' + result.error);
    } else if (result.isCancelled) {
      alertErrors('login is cancelled.');
    } else {
      AccessToken.getCurrentAccessToken().then(
        ({ accessToken }) => {
          facebookSignIn(`${accessToken}`);
        }
      )
    }
  }

  return(
    <View style={styles.container} keyboardShouldPersistTaps="handled" onSubmit={handleSubmit}>
      <View style={styles.formContainer}>
        <View style={styles.field}>
          <Text style={styles.label}>EMAIL</Text>
          <Field
            name="email"
            component={Input}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>PASSWORD</Text>
          <Field
            name="password"
            component={Input}
            password
          />
        </View>    
      </View>    
      <View style={styles.buttonsContainer}>
        <ActionButton title="SIGN IN" backgroundColor={black} textColor={white} onPress={handleSubmit}/>
        <LinkButton text="Forgot your password?" textStyle={styles.forgotPasswordText}/>
        <View style={styles.facebookSignInContainer}>
          <LoginButton
            readPermissions={['email']}
            onLoginFinished={(error, result) => handleFacebookSignIn(error, result)}
            onLogoutFinished={() => {}}/>
        </View>
      </View>
      <View style={styles.dividerContainer}/>
      <LinkButton text="SIGN UP" textStyle={styles.buttonText} onPress={goToSignUp}/>
    </View>
  )
}

export default reduxForm({ 
    form: 'signIn',
    validate: constraints.validations(constraints.signIn)
 })(SignInForm);
 