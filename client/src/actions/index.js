import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from './types';
import streams from '../apis/streams';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');
  // console.log('actions fetchStreams:FETCH_STREAMS');
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/stream/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (formValues, id) => async (dispatch) => {
  const reponse = await streams.put(`/stream/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: reponse.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/steams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
