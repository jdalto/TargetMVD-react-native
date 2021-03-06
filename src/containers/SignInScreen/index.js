import React, { Component } from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import SignInForm from '../../components/user/SignInForm';
import signInBackground from '../../assets/background.png';
import { signIn, facebookSignIn } from '../../actions/userActions';
import { connect } from 'react-redux';
import styles from './styles';
import Loading from '../../components/common/Loading';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.navigateToSignUp = this.navigateToSignUp.bind(this);
  }

  navigateToSignUp = () => {
    const { navigator } = this.props;
    navigator.push({
      screen: 'targetmvd.SignUpScreen',
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }

  render(){
    const { signIn, facebookSignIn, loading, authenticated } = this.props;

    if (loading || authenticated) {
      return <Loading />;
    }

    return (
      <View style={styles.signInContainer}>
        <View style={styles.safeAreaTop}>
          <ImageBackground source={signInBackground} style={styles.container} resizeMode="cover">
            <View style={styles.formContainer}>
              <Text style={styles.targetMvdText}>TARGET MVD</Text>
              <SignInForm onSubmit={user => signIn(user.toJS())}  goToSignUp={this.navigateToSignUp} 
                facebookSignIn={ accessToken => facebookSignIn(accessToken) }/>
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
  signIn: user => dispatch(signIn(user)),
  facebookSignIn: accessToken => dispatch(facebookSignIn(accessToken))
});

export default connect(mapState, mapDispatch)(SignInScreen);
