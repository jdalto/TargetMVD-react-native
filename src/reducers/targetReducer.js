import * as types from '../actions/actionTypes'
import Immutable from 'immutable'

export const initialState = Immutable.Map({
    loading: false,
    items: [],
  });

export default function targetReducer(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_TARGETS_BEGIN:{
      return {
        ...state,
        loading: true,
      };
    }
    case types.FETCH_TARGETS_SUCCESS:{
      return {
        ...state,
        loading: false,
        items: action.targets
      };
    }
    case types.FETCH_TARGETS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.CREATE_NEW_TARGET_BEGIN: {
      return {
        ...state,
        loading: true,
      };
    } 
    case types.CREATE_NEW_TARGET_SUCCESS: {
      return {
        ...state,
        loading: false,
        items: [ ...state.items, action.newTarget]
      };
    } 
    case types.CREATE_NEW_TARGET_ERROR: {
      return {
        ...state,
        loading: false
      };
    }                  
    default:
      return state;
  }
}
