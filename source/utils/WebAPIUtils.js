/**
 * Created by F on 2017/6/7.
 */
var SnapkiteStreamClient = require('snapkite-stream-client');
var TweetActionCreator = require('../actions/TweetActionCreators');
var SnapkiteConfig = {
    hostname: "212.47.229.222",
    port: 3000,
    delayInMilliseconds: 1500,
    cacheNumberOfTweets: 20
};

function initializeStreamOfTweets() {
    SnapkiteStreamClient.initialiseStream(TweetActionCreator.receiveTweet, SnapkiteConfig);
}

module.exports = {
    initializeStreamOfTweets: initializeStreamOfTweets
};