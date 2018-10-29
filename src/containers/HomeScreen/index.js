import React, {Component} from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import signInBackground from '../../assets/background.png';
import styles from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.signInContainer}>
        <View style={styles.safeAreaTop}>
          <ImageBackground source={signInBackground} style={styles.container} resizeMode='cover'>
            <View style={styles.formContainer}>
              <Text style={styles.welcomeText}>WELCOME TO TARGET MVD</Text>
            </View>
          </ImageBackground>
        </View>         
      </View>
    );
  }
}