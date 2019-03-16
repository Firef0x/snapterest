/**
 * Created by F on 2017/5/5.
 */
import {
  ADD_TWEET_TO_COLLECTION,
  REMOVE_TWEET_FROM_COLLECTION,
  REMOVE_ALL_TWEETS_FROM_COLLECTION,
  SET_COLLECTION_NAME
} from './actionTypes';

function addTweetToCollection(tweet) {
  return (dispatch) => {
    const action = {
      type: ADD_TWEET_TO_COLLECTION,
      payload: {
        tweet
      }
    };

    dispatch(action);
  };
}

function removeTweetFromCollection(tweet) {
  return (dispatch) => {
    const action = {
      type: REMOVE_TWEET_FROM_COLLECTION,
      payload: {
        tweet
      }
    };

    dispatch(action);
  };
}

function removeAllTweetsFromCollection() {
  return (dispatch) => {
    const action = {
      type: REMOVE_ALL_TWEETS_FROM_COLLECTION,
      payload: {}
    };

    dispatch(action);
  };
}

function setCollectionName(collectionName) {
  return (dispatch) => {
    const action = {
      type: SET_COLLECTION_NAME,
      payload: {
        collectionName
      }
    };

    dispatch(action);
  };
}

export {
  addTweetToCollection,
  removeTweetFromCollection,
  removeAllTweetsFromCollection,
  setCollectionName
};
