import React from 'react';
import { Navigation } from 'react-native-navigation';
import { TouchableOpacity, View, Image } from 'react-native';
import { black } from '../../constants/styleConstants';

class ProfileNavBarButton extends React.Component {
  constructor(props){
    super(props);
    this.goTo = this.goTo.bind(this);
    this.state = { componentId: '' };
    Navigation.events().registerComponentDidAppearListener(({ componentId }) => {
    this.setState({
        componentId: componentId
    })
   });
  }   

  goTo() {
    Navigation.push(this.state.componentId, {
      component: {
        name: 'targetmvd.ProfileScreen',
        options: {
          topBar: {
            title: {
              text: 'Profile'
            },
            backButton: {
              color: black,
              icon: require('../../assets/leftArrow.png')
            },
            buttonColor: black,
          }
        }
      }
    });
  }
  render(){
    return(
      <TouchableOpacity onPress={this.goTo} underlayColor={'transparent'}>
        <View>
          <Image source={require('../../assets/profile.png')}/>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ProfileNavBarButton;
