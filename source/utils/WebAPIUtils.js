/**
 * Created by F on 2017/6/7.
 */
import { initializeStream } from 'snapkite-stream-client';
import receiveTweet from '../actions/TweetActionCreators';

const snapkiteConfig = {
  hostname: '212.47.229.222',
  port: 3000,
  delayInMilliseconds: 1500,
  cacheNumberOfTweets: 20
};

const initializeStreamOfTweets = () => {
  initializeStream(receiveTweet, snapkiteConfig);
};

export {
  initializeStreamOfTweets as default
};
