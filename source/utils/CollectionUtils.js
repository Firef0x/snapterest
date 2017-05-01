/**
 * Created by F on 2017/5/1.
 */

function getNumberOfTweetsInCollection(collection) {
    var TweetUtils = require('./TweetUtils');
    var listOfCollectionTweetIds = TweetUtils.getListOfTweetIds(collection);

    return listOfCollectionTweetIds.length;
}

function isEmptyCollection (collection) {
    return (getNumberOfTweetsInCollection(collection) === 0);
}

module.exports = {
    getNumberOfTweetsInCollection: getNumberOfTweetsInCollection,
    isEmptyCollection: isEmptyCollection
};
