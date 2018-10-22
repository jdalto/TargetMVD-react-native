import React, {Component} from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import SignUpForm from '../../components/user/SignUpForm';
import signUpBackground from '../../assets/background.png';
import { signUp, doSubmit } from '../../actions/userActions';
import { connect } from 'react-redux';

import { destroy } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import styles from './styles';

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.navigateToSignIn = this.navigateToSignIn.bind(this);
      }

      navigateToSignIn = () => {
        const { navigator } = this.props;
        navigator.push({
          screen: 'targetmvd.SignInScreen',
          navigatorStyle: {
            navBarHidden: true
          }
        });
      }

      render(){
        const { signUp, doSubmit } = this.props;
        return (
            <View style={styles.signUpContainer}>
            <View style={styles.safeAreaTop}>
            <ImageBackground source={signUpBackground} style={styles.container} resizeMode='stretch'>
                <View>
                  <Text style={styles.targetMvdText}>TARGET MVD</Text>
                  <SignUpForm onSubmit={user => doSubmit()} signInLink={this.navigateToSignIn}/>
                </View>
                </ImageBackground>
            </View>
              
            </View>
          );
      }
}

// SignUpScreen.propTypes = {
//   signUp: PropTypes.func.isRequired
// };

// const mapState = state => ({
//   // authenticated: state.getIn(['session', 'authenticated']),
//   // loading: state.getIn(['user', 'loading']),
// });

const mapDispatch = dispatch => ({
  //signUp: user => dispatch(signUp(user)),
  doSubmit: () => dispatch(doSubmit()),
  destroyForm: () => dispatch(destroy('signUp')),
});

export default connect(null, mapDispatch)(SignUpScreen);