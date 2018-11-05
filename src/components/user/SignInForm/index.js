import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Text, View, TouchableOpacity } from 'react-native';
import Input from '../../common/Input';
import ActionButton from '../../common/ActionButton';
import styles from './styles';
import { white, black } from '../../../constants/styleConstants';
import * as constraints from '../../../utils/constraints';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const SignInForm = ({ handleSubmit, goToSignUp }) => (
  <View style={styles.container} keyboardShouldPersistTaps={'handled'} onSubmit={handleSubmit}>
    <View style={styles.formContainer}>
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
    </View>    
    <View style={styles.buttonsContainer}>
      <ActionButton title='SIGN IN' backgroundColor={black} textColor={white} onPress={handleSubmit}/>
      <TouchableOpacity>  
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.connectWithFacebookText}>CONNECT WITH FACEBOOK</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.dividerContainer}/>
    <TouchableOpacity onPress={signUpLink}>
      <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
    <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
  </View>
);

export default reduxForm({ 
    form: 'signIn',
    validate: constraints.validations(constraints.signIn)
 })(SignInForm);
 