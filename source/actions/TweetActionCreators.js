/**
 * Created by F on 2017/5/5.
 */
import { RECEIVE_TWEET } from './actionTypes';

function receiveTweet(tweet) {
  return (dispatch) => {
    const action = {
      type: RECEIVE_TWEET,
      payload: {
        tweet
      }
    };

    dispatch(action);
  };
}

export {
  receiveTweet as default
};
