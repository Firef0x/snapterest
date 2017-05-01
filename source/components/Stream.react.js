/**
 * Created by F on 2017/4/20.
 */
var React = require('react');
var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');
var SnapkiteConfig = {
  hostname: "212.47.229.222",
  port: 3000,
  delayInMilliseconds: 1500,
  cacheNumberOfTweets: 20
};

var Stream = React.createClass({
    getInitialState: function () {
        return {
            tweet: null
        };
    },

    componentDidMount: function () {
        SnapkiteStreamClient.initialiseStream(this.handleNewTweet, SnapkiteConfig);
    },

    componentWillUnmount: function () {
        SnapkiteStreamClient.destroyStream();
    },

    handleNewTweet: function (tweet) {
        this.setState({
            tweet: tweet
        });
    },

    render: function () {
        var tweet = this.state.tweet;

        if (tweet) {
            return (
                <StreamTweet tweet={tweet} onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }
        return (
            <Header text="正等待从 Twitter 中传入公共图片..." />
        );
    }
});

module.exports = Stream;
