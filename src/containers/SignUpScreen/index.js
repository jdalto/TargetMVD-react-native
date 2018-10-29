import React, {Component} from 'react';
import { Text, View, ImageBackground } from 'react-native';
import SignUpForm from '../../components/user/SignUpForm';
import signUpBackground from '../../assets/background.png';
import { signUp } from '../../actions/userActions';
import { connect } from 'react-redux';

import { destroy } from 'redux-form/immutable';
import styles from './styles';
import Loading from '../../components/common/Loading';

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
    const { signUp, loading } = this.props;
    if (loading) {
      return <Loading />;
    }
    return (
      <View style={styles.signUpContainer}>
        <View style={styles.safeAreaTop}>
          <ImageBackground source={signUpBackground} style={styles.container} resizeMode='cover'>
            <View style={styles.formContainer}>
              <Text style={styles.targetMvdText}>TARGET MVD</Text>
              <SignUpForm onSubmit={user => signUp(user.toJS())} signInLink={this.navigateToSignIn}/>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated']),
  loading: state.getIn(['user', 'loading']),
});

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user)),
  destroyForm: () => dispatch(destroy('signUp')),
});

export default connect(mapState, mapDispatch)(SignUpScreen);