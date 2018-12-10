import React, { Component } from 'react';
import { View, Image } from 'react-native';
import profileAvatar from '../../assets/profileCircles.png';
import styles from './styles';
import ProfileForm from '../../components/user/ProfileForm';
import { connect } from 'react-redux';
import { updateAccount } from '../../actions/userActions';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
  }
  render(){
    const { updateAccount, loading, userAccount } = this.props;
    if (loading)
      return <Loading/>;
    return (
      <View style={styles.profileContainer}>
        <View style={styles.safeAreaTop}>
          <View style={styles.container}>
            <View style={styles.avatarContainer}>
              <Image source={profileAvatar} resizeMode='contain'/>
            </View>
            <View style={styles.formContainer}>
              <ProfileForm userAccount={userAccount}onSubmit={user => updateAccount(user.toJS())}/>
            </View>
          </View>
        </View>         
      </View>
    );
  }
}

const mapState = state => ({
  loading: state.getIn(['user', 'loading']),
  userAccount: state.getIn(['session', 'user'])
});

const mapDispatch = dispatch => ({
  updateAccount: user => dispatch(updateAccount(user)),
});

export default connect(mapState, mapDispatch)(ProfileScreen);
