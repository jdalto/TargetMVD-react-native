import React, {Component} from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import SignInForm from '../../components/user/SignInForm';
import signInBackground from '../../assets/background.png';
import { signUp, doSubmit } from '../../actions/userActions';
import { connect } from 'react-redux';

import { destroy } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import styles from './styles';

class SignInScreen extends Component {
    constructor(props) {
        super(props);
      }

      render(){
        const { signUp, doSubmit } = this.props;
        return (
            <View style={styles.signInContainer}>
                <View style={styles.safeAreaTop}>
                    <ImageBackground source={signInBackground} style={styles.container} resizeMode='stretch'>
                        <View>
                            <Text style={styles.targetMvdText}>TARGET MVD</Text>
                            <SignInForm onSubmit={user => doSubmit()}/>
                        </View>
                    </ImageBackground>
                </View>         
            </View>
          );
      }
}

// SignInScreen.propTypes = {
//   signIn: PropTypes.func.isRequired
// };

// const mapState = state => ({
//   // authenticated: state.getIn(['session', 'authenticated']),
//   // loading: state.getIn(['user', 'loading']),
// });

const mapDispatch = dispatch => ({
  //signIn: user => dispatch(signIn(user)),
  destroyForm: () => dispatch(destroy('signIn')),
});

export default connect(null, mapDispatch)(SignInScreen);