import React, {Component} from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import SignUpForm from '../../components/user/SignUpForm';
import signUpBackground from '../../assets/background.png';
import { signUp } from '../../actions/userActions';
import { connect } from 'react-redux';

import { destroy } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import styles from './styles';

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
      }

      render(){
        const { signUp } = this.props;
        return (
            <View style={styles.signUpContainer}>
            <View style={styles.safeAreaTop}>
            <ImageBackground source={signUpBackground} style={styles.container} resizeMode='stretch'>
                <View>
                  <Text style={styles.targetMvdText}>TARGET MVD</Text>
                  <SignUpForm onSubmit={user => signUp(user.toJS())}/>
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
  signUp: user => dispatch(signUp(user)),
  destroyForm: () => dispatch(destroy('signUp')),
});

export default connect(null, mapDispatch)(SignUpScreen);