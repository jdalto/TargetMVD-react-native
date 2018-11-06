import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Text, View, TouchableOpacity } from 'react-native';
import Input from '../../common/Input';
import ActionButton from '../../common/ActionButton';
import styles from './styles';
import { white, black } from '../../../constants/styleConstants';
import * as constraints from '../../../utils/constraints';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { alertErrors } from '../../../utils/helpers'

class SignInForm extends Component {
  constructor(props) {
    super(props);
  }

  handleFacebookSignIn(error, result, facebookSignIn){
    if (error) {
      alertErrors('login has error: ' + result.error);
    } else if (result.isCancelled) {
      alertErrors('login is cancelled.');
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          facebookSignIn(data.accessToken.toString());
        }
      )
    }
  }

  render() {
    const { handleSubmit, goToSignUp, facebookSignIn } = this.props;

    return(
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
          <View style={styles.facebookSignInContainer}>
            <LoginButton
              readPermissions={['email']}
              onLoginFinished={(error, result) => this.handleFacebookSignIn(error,result,facebookSignIn)}
              onLogoutFinished={() => console.log('logout.')}/>
          </View>
        </View>
        <View style={styles.dividerContainer}/>
        <TouchableOpacity onPress={goToSignUp}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    )
  };
}

export default reduxForm({ 
    form: 'signIn',
    validate: constraints.validations(constraints.signIn)
 })(SignInForm);
 