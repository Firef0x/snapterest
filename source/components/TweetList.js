/**
 * Created by F on 2017/4/27.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tweet from './Tweet';
import { removeTweetFromCollection } from '../actions/CollectionActionCreators';

const listStyle = {
  padding: '0'
};

const listItemStyle = {
  display: 'inline-block',
  listStyle: 'none'
};

class TweetList extends PureComponent {
  getListOfTweetIds() {
    const { tweets } = this.props;
    return Object.keys(tweets);
  }

  getTweetElement(tweetId) {
    const tweet = this.props.tweets[tweetId];
    const handleRemoveTweetFromCollection = this.removeTweetFromCollection;
    let tweetElement;

    if (handleRemoveTweetFromCollection) {
      tweetElement = (
        <Tweet
          tweet={tweet}
          onImageClick={handleRemoveTweetFromCollection}
        />
      );
    } else {
      tweetElement = (
        <Tweet tweet={tweet} />
      );
    }

    return (
      <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>
    );
  }

  removeTweetFromCollection(tweet) {
    this.props.removeTweetFromCollection(tweet.id);
  }

  render() {
    const tweetElements = this.getListOfTweetIds()
      .map(this.getTweetElement);

    return (
      <ul style={listStyle}>
        {tweetElements}
      </ul>
    );
  }
}

TweetList.propTypes = {
  removeTweetFromCollection: PropTypes.func.isRequired,
  tweets: PropTypes.array.isRequired
};

const bindStateToProps = state => state;
const bindDispatchToProps = dispatch => ({
  removeTweetFromCollection:
    bindActionCreators(removeTweetFromCollection, dispatch)
});

export default connect(bindStateToProps, bindDispatchToProps)(TweetList);
