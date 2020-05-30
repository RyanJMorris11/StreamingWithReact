import { SIGN_IN, SIGN_OUT } from '../actions/types';

// Capatalized syntax = final value
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

// if state == undefined, then if will use the initial state
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
