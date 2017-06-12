/**
 * Created by F on 2017/5/5.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');

function addTweetToCollection(tweet) {
    var action = {
        type: 'add_tweet_to_collection',
        tweet: tweet
    };

    AppDispatcher.dispatch(action);
}

function removeTweetFromCollection(tweetId) {
    var action = {
        type: 'remove_tweet_from_collection',
        tweet: tweetId
    };

    AppDispatcher.dispatch(action);
}

function removeAllTweetsFromCollection() {
    var action = {
        type: 'remove_all_tweets_from_collection'
    };

    AppDispatcher.dispatch(action);
}

function setCollectionName(collectionName) {
    var action = {
        type: 'set_collection_name',
        collectionName: collectionName
    };

    AppDispatcher.dispatch(action);
}

module.exports = {
    addTweetToCollection: addTweetToCollection,
    removeTweetFromCollection: removeTweetFromCollection,
    removeAllTweetsFromCollection: removeAllTweetsFromCollection,
    setCollectionName: setCollectionName,
};
