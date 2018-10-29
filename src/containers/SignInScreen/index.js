import React, {Component} from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import SignInForm from '../../components/user/SignInForm';
import signInBackground from '../../assets/background.png';
import { signIn } from '../../actions/userActions';
import { connect } from 'react-redux';
import styles from './styles';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { signIn } = this.props;
    return (
      <View style={styles.signInContainer}>
        <View style={styles.safeAreaTop}>
          <ImageBackground source={signInBackground} style={styles.container} resizeMode='cover'>
            <View style={styles.formContainer}>
              <Text style={styles.targetMvdText}>TARGET MVD</Text>
              <SignInForm onSubmit={user => signIn(user.toJS())}/>
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
});

export default connect(mapState, mapDispatch)(SignInScreen);