/**
 * Created by F on 2017/5/5.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter  = require('events').EventEmitter;

var tweet         = null;
var CHANGE_EVENT  = "change";

function setTweet(receivedTweet) {
    tweet = receivedTweet;
}

function emitChange() {
    TweetStore.emit(CHANGE_EVENT);
}

var TweetStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getTweet: function () {
        return tweet;
    }
});

function handleAction(action) {
    if (action.type === 'receive_tweet') {
        setTweet(action.tweet);
        emitChange();
    }
}

TweetStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = TweetStore;