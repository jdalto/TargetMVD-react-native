import * as types from './actionTypes';

export const signUpSuccess = () => ({
    type: types.SIGN_UP_SUCCESS
  });
  
export const signUpError = () => ({
    type: types.SIGN_UP_ERROR
  });

export const submitSignUp = () => ({
    type: types.SUBMIT_SIGN_UP
});

export function doSubmit() {
  debugger;
  return true;
};

  // export const signUp = user =>
  // (dispatch) => {
  //   dispatch(cleanOnboarding());
  //   dispatch(submitSignUp());
  //   return userApi.signUp({ user })
  //     .then(({ user }) => {
  //       dispatch(setOnboardingType(onboardingTypes.default));
  //       sessionService.saveUser(user)
  //         .then(() => {
  //           pushNotifications.init();
  //           dispatch(signUpSuccess());
  //         });
  //     }).catch((err) => {
  //       dispatch(signUpError());
  //       alertErrors(err.errors.fullMessages[0]);
  //     });
  // };
