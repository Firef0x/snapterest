/**
 * Created by F on 2017/4/21.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Tweet = require('./Tweet.react');
var Header = require('./Header.react');

var StreamTweet = React.createClass({
    getInitialState: function () {
        console.log("[Snapterest] StreamTweet: 1. 运行初始化状态方法");

        return {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        };
    },

    componentWillMount: function () {
        console.log("[Snapterest] StreamTweet: 2. 运行组件挂载前方法");

        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: 'Twitter 上的最新公共照片'
        });

        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    },

    componentDidMount: function () {
        console.log("[Snapterest] StreamTweet: 3. 运行组件挂载后方法");

        var componentDOMRepresentation = ReactDOM.findDOMNode(this);
        window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    },

    componentWillReceiveProps: function (nextProps) {
        console.log("[Snapterest] StreamTweet: 4. 运行组件获取参数前方法");

        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetLength = nextProps.tweet.text.length;
        var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
        var headerText;

        this.setState({
            numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
        });

        if (isNumberOfCharactersIncreasing) {
            headerText = '推文的字数在增长...';
        } else {
            headerText = '正等待从 Twitter 中传入公共图片...';
        }

        this.setState({
            headerText: headerText
        });

        window.snapterest.numberOfReceivedTweets++;
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        console.log("[Snapterest] StreamTweet: 5. 运行组件是否更新方法");

        return (nextProps.tweet.text.length>1);
    },

    componentWillUpdate: function (nextProps, nextState) {
        console.log("[Snapterest] StreamTweet: 6. 运行组件更新前方法");
    },

    render: function () {
        console.log("[Snapterest] StreamTweet: 运行渲染方法");

        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection} />
            </section>
        );
    },

    componentDidUpdate: function (nextProps, nextState) {
        console.log("[Snapterest] StreamTweet: 7. 运行组件更新后方法");

        window.snapterest.numberOfDisplayedTweets++;
    },

    componentWillUnmount: function () {
        console.log("[Snapterest] StreamTweet: 8. 运行组件卸载前方法");

        delete window.snapterest;
    }
});

module.exports = StreamTweet;
