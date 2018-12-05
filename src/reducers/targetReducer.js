import * as types from '../actions/actionTypes'
import Immutable from 'immutable'

export const initialState = Immutable.Map({
    loading: false,
    items: Immutable.List()
  });

export default function targetReducer(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_TARGETS_BEGIN:
    case types.CREATE_NEW_TARGET_BEGIN:{
      return state.set('loading', true);
    }
    case types.FETCH_TARGETS_SUCCESS:{
      const newState = state.set('loading', false);
      return newState.set('items', Immutable.List(action.targets));
    }
    case types.FETCH_TARGETS_ERROR:
    case types.CREATE_NEW_TARGET_ERROR:{
      return state.set('loading', false);
    } 
    case types.CREATE_NEW_TARGET_SUCCESS:{
      const { newTarget } = action;
      const newState = state.set('loading', false);
      return newState.update('items', items => items.push(newTarget));
    }                  
    default:
      return state;
  }
}
