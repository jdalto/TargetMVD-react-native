import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';

class TargetScreen extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.targetContainer}>
        <View style={styles.safeAreaTop}>
            <View style={styles.mapContainer}>
            <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            </View>
        </View>         
      </View>
    );
  }
}

export default TargetScreen;
