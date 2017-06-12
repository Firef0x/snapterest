/**
 * Created by F on 2017/5/5.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveTweet(tweet) {
    var action = {
        type: 'receive_tweet',
        tweet: tweet
    };

    AppDispatcher.dispatch(action);
}

module.exports = {
    receiveTweet: receiveTweet
};
