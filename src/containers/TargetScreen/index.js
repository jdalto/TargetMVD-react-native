import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { connect } from 'react-redux';
import Loading  from '../../components/common/Loading';
import TargetForm from '../../components/common/TargetForm';
import { getTargets, createNewTarget } from '../../actions/targetActions';
import { getTopicIcon } from '../../utils/helpers';
import { transparentYellow, white } from '../../constants/styleConstants';

class TargetScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      toggleNewTarget: false,
      loadTargets: false,
      newTarget: null
     }
    this.handlePressMap = this.handlePressMap.bind(this);
  }

  handleCreatNewTargetClick = () => {
    this.setState({
      toggleNewTarget: true,
    });
  }

  componentDidMount(){
    this.props.getTargets().then( () => {
      this.setState({
        loadTargets: true,
      });
    }, error => {
      console.log(error);
    } );
  }

  handlePressMap(e){
    this.setState({
      newTarget: { coordinate: e.nativeEvent.coordinate },
      toggleNewTarget: false
    })
  }

  renderNewTarget(){
    return (
      <View>
        <Marker 
          coordinate={this.state.newTarget.coordinate}
          draggable
          image={require('../../assets/pointer.png')}
        >
        </Marker>
        <Circle
          center = { this.state.newTarget.coordinate }
          radius = { 50 }
          strokeColor = { transparentYellow }
          fillColor = { white }
        />
      </View>
    )
  }

  renderMarkers(){
    return this.props.targets.map( (target) => {
      const lat = parseFloat(target.latitude);
      const lng = parseFloat(target.longitude);
      return (
        <View key={target.id}>
          <Marker 
            coordinate={{ latitude: lat, longitude: lng }}
            image={getTopicIcon(target.topicId)}
             >
          </Marker>
          <Circle
              center = { { latitude: lat, longitude: lng} }
              radius = { target.radius }
              strokeColor = { transparentYellow }
              fillColor = { transparentYellow }
            />
        </View>
      );
    });
  }

  render(){
    const { createNewTarget } = this.props;
    const { toggleNewTarget, loadTargets, newTarget  } = this.state;

    let componenToRender = toggleNewTarget ? <TargetForm onSubmit={(target) => createNewTarget(target.toJS(), newTarget)} /> : (
                        <TouchableOpacity onPress={this.handleCreatNewTargetClick}>
                          <Image source={require('../../assets/group.png')} style={styles.targetIcon}/>
                          <Text style={styles.createTargetText}>CREATE NEW TARGET</Text>
                        </TouchableOpacity>
                      );
    if (!loadTargets)
      return <Loading />;
    else
      return (
        <View style={styles.targetContainer}>
          <View style={styles.container}>
            <View style={[styles.mapContainer, {height: toggleNewTarget ?  '40%' : '80%'}]}>
              <MapView
                provider={PROVIDER_GOOGLE}
                showsUserLocation={ true }
                style={styles.map}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121
                }}
                onPress={this.handlePressMap}
              >
              {loadTargets ? this.renderMarkers() : null}
              {newTarget ? this.renderNewTarget() : null}
              </MapView>
          </View>
          <View style={toggleNewTarget ? styles.targetForm : styles.createTargetButtonContainer}>
            {componenToRender}
          </View>
        </View>  
      </View> 
      );
  }
}

const mapStateToProps = state => ({
  targets: state.getIn(['targetReducer']).items,
  loading: state.getIn(['targetReducer']).loading,
  error: state.getIn(['targetReducer'])
});

const mapDispatch = dispatch => ({
  createNewTarget: (target, coordinates) => dispatch(createNewTarget(target, coordinates)),
  getTargets: () => dispatch(getTargets())
});

export default connect(mapStateToProps, mapDispatch)(TargetScreen);
