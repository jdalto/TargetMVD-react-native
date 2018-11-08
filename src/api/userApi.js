import api from './apiService';

class Session {
  static signIn(user) {
    return api.post('/users/sign_in', user);
  }

  static signUp(user) {
    return api.post('/users', user);
  }

  static facebookSignIn(accessToken) {
    return api.post('/users/sign_in/facebook', accessToken);
  }
}

export default Session;