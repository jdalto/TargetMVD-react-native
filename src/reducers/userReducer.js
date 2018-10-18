import * as types from '../actions/actionTypes'

// export const initialState = Immutable.Map({
//     loading: false,
//     doingSignUp: false
//   });

export default function userReducer(state = [], action) {
    switch(action.type) {
        case types.SIGN_UP_SUCCESS:
            return state;
        case types.SIGN_UP_ERROR:
            return state;
        default:
            return state;
    }
}