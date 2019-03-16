import { Map } from 'immutable';
import * as Actions from '../actions/actionTypes';
import initialState from '../stores/initialState';

export default (stateParam, action) => {
  const state = stateParam || initialState;
  const reducerMap = {

    // RECEIVE_TWEET
    [Actions.RECEIVE_TWEET]: (states, payload) => (states.set('tweet', payload.tweet)),

    // ADD_TWEET_TO_COLLECTION
    [Actions.ADD_TWEET_TO_COLLECTION]: (states, payload) => (
      states.setIn(['collectionTweets', payload.tweet.id], payload.tweet)),

    // REMOVE_TWEET_FROM_COLLECTION
    [Actions.REMOVE_TWEET_FROM_COLLECTION]: (states, payload) => (
      states.deleteIn(['collectionTweets', payload.tweet.id])),

    // REMOVE_ALL_TWEETS_FROM_COLLECTION
    [Actions.REMOVE_ALL_TWEETS_FROM_COLLECTION]: (states, payload) => (
      states.set('collectionTweets', Map())),

    // SET_COLLECTION_NAME
    [Actions.SET_COLLECTION_NAME]: (states, payload) => (
      states.set('collectionName', payload.collectionName))
  };

  console.log(`action: ${JSON.stringify(action)}`);
  if (typeof action === 'object') {
    const { payload, type } = action;
    const reducer = reducerMap[type];
    return reducer ? reducer(state, payload) : state;
  }
  return state;
};
