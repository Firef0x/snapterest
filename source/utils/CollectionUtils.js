/**
 * Created by F on 2017/5/1.
 */
import getListOfTweetIds from './TweetUtils';

const getNumberOfTweetsInCollection = collection => (
  getListOfTweetIds(collection).length
);

const isEmptyCollection = collection => (
  getNumberOfTweetsInCollection(collection) === 0
);

export {
  getNumberOfTweetsInCollection,
  isEmptyCollection
};
