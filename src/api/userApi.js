import api from './apiService';

class Session {
  static signIn(user) {
    return api.post('/users/sign_in', user);
  }

  static signUp(user) {
    return api.post('/users', user);
  }

  static updateAccount(user) {
    debugger;
    return api.post('/users/me', user);
  }
}

export default Session;