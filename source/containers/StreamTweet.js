/**
 * Created by F on 2017/4/21.
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tweet from '../components/Tweet';
import Header from '../components/Header';
import { addTweetToCollection } from '../actions/CollectionActionCreators';

class StreamTweet extends Component {
  constructor() {
    super();
    this.addTweetToCollection = this.addTweetToCollection.bind(this);
    console.log('[Snapterest] StreamTweet: 1. 运行初始化状态方法');

    this.state = {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    };
  }

  componentWillMount() {
    console.log('[Snapterest] StreamTweet: 2. 运行组件挂载前方法');

    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Twitter 上的最新公共照片'
    });

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  }

  componentDidMount() {
    console.log('[Snapterest] StreamTweet: 3. 运行组件挂载后方法');

    window.snapterest.headerHtml = this.node.children[0].outerHTML;
    window.snapterest.tweetHtml = this.node.children[1].outerHTML;
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Snapterest] StreamTweet: 4. 运行组件获取参数前方法');

    const currentTweetLength = this.props.tweet.text.length;
    const nextTweetLength = nextProps.tweet.text.length;
    let headerText;

    this.setState({
      numberOfCharactersIsIncreasing: (nextTweetLength > currentTweetLength)
    });

    if (this.state.numberOfCharactersIsIncreasing) {
      headerText = '推文的字数在增长...';
    } else {
      headerText = '正等待从 Twitter 中传入公共图片...';
    }

    this.setState({
      headerText
    });

    window.snapterest.numberOfReceivedTweets += 1;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 5. 运行组件是否更新方法');

    return (nextProps.tweet.text.length > 1);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 6. 运行组件更新前方法');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 7. 运行组件更新后方法');

    window.snapterest.numberOfDisplayedTweets += 1;
  }

  componentWillUnmount() {
    console.log('[Snapterest] StreamTweet: 8. 运行组件卸载前方法');

    delete window.snapterest;
  }

  addTweetToCollection(tweet) {
    this.props.addTweetToCollection(tweet);
  }

  render() {
    console.log('[Snapterest] StreamTweet: 运行渲染方法');

    const { tweet } = this.props;
    return (
      <section ref={(node) => { this.node = node; }}>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={tweet}
          onImageClick={this.addTweetToCollection}
        />
      </section>
    );
  }
}

StreamTweet.propTypes = {
  addTweetToCollection: PropTypes.func.isRequired,
  tweet: PropTypes.object
};

const bindStateToProps = state => state;
const bindDispatchToProps = dispatch => ({
  addTweetToCollection:
    bindActionCreators(addTweetToCollection, dispatch),
});

export default connect(bindStateToProps, bindDispatchToProps)(StreamTweet);
