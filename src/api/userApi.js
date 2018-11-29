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

  static resetPassword(userId) {
    const request = {
      email: 'jdalto@rootstrap.com',
      redirect_url: 'http://www.example.com'
    };
    return api.post('/users/password', userId);
  }
}

export default Session;