import React, {Component} from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import SignInForm from '../../components/user/SignInForm';
import signInBackground from '../../assets/background.png';
import { signIn } from '../../actions/userActions';
import { connect } from 'react-redux';

import { destroy } from 'redux-form/immutable';
import PropTypes from 'prop-types';
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
                            <Text style={styles.targetMvdText}>WELCOME TO TARGET MVD</Text>
                        </View>
                    </ImageBackground>
                </View>         
            </View>
          );
      }
}