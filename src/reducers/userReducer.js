import * as types from '../actions/actionTypes'
import Immutable from 'immutable'

export const initialState = Immutable.Map({
    loading: false,
    doingSignUp: false
  });

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case types.SIGN_UP_SUCCESS:{
      const newState = state.set('doingSignUp', false);
      return newState.set('loading', true);
    }      
    case types.SIGN_UP_ERROR:
      return state.set('loading', false);
    case types.SUBMIT_SIGN_UP:{
      const newState = state.set('doingSignUp', true);
      return newState.set('loading', true);
    }      
    case types.SUBMIT_SIGN_IN:
    case types.SUBMIT_FACEBOOK_SIGN_IN:{
      return state.set('loading', true);
    }
    case types.SIGN_IN_SUCCESS:
    case types.FACEBOOK_SIGN_IN_SUCCESS:
    case types.SIGN_IN_ERROR:
    case types.FACEBOOK_SIGN_IN_ERROR:
      return state.set('loading', false);                        
    default:
      return state;
  }
}
