import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  // console.log('reducer: action -> ', action.type);
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }; // this is amazing
    case DELETE_STREAM:
      return _.omit(state, action.payload); // payload is the stream's id this time
    default:
      return state;
  }
};
