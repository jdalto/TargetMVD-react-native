import * as types from './actionTypes';
import { sessionService } from 'redux-react-native-session';
import userApi from '../api/userApi';
import { alertErrors, getFullErrorMessage } from '../utils/helpers';

export const signUpSuccess = () => ({
  type: types.SIGN_UP_SUCCESS
});
  
export const signUpError = () => ({
  type: types.SIGN_UP_ERROR
});

export const submitSignUp = () => ({
  type: types.SUBMIT_SIGN_UP
});

export const submitSignIn = () => ({
  type: types.SUBMIT_SIGN_IN
});

export const signInSuccess = () => ({
  type: types.SIGN_IN_SUCCESS
});

export const signInError = () => ({
  type: types.SIGN_IN_ERROR
});

export const creatingNewTarget = () => ({
  type: types.CREATING_NEW_TARGET
});

export const signUp = (user) =>
(dispatch) => {
  dispatch(submitSignUp());
  return userApi.signUp(user)
    .then((user) => {
      sessionService.saveUser(user)
        .then(() => {
          dispatch(signUpSuccess());
        });
    }).catch((err) => {
      dispatch(signUpError());
      alertErrors(getFullErrorMessage(err.errors));
    });
};

export const signIn = (user) =>
  (dispatch) => {
    dispatch(submitSignIn());
    userApi.signIn(user).then((user) => {
      sessionService.saveUser(user)
        .then(() => {
          dispatch(signInSuccess());
        });
    }).catch(({ errors }) => {
      dispatch(signInError());
      alertErrors(errors[0]);
    });
};
