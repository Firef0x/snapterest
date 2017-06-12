/**
 * Created by F on 2017/4/20.
 */
var React = require('react');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');
var TweetStore = require('../stores/TweetStore');

var Stream = React.createClass({
    getInitialState: function () {
        return {
            tweet: TweetStore.getTweet()
        };
    },

    componentDidMount: function () {
        TweetStore.addChangeListener(this.onTweetChange);
    },

    componentWillUnmount: function () {
        TweetStore.removeChangeListener(this.onTweetChange);
    },

    onTweetChange: function () {
        this.setState({
            tweet: TweetStore.getTweet()
        });
    },

    render: function () {
        var tweet = this.state.tweet;

        if (tweet) {
            return (
                <StreamTweet tweet={tweet} />
            );
        }
        return (
            <Header text="正等待从 Twitter 中传入公共图片..." />
        );
    }
});

module.exports = Stream;
