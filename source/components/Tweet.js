/**
 * Created by F on 2017/4/23.
 */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const tweetStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '300px',
  height: '400px',
  margin: '10px'
};

const imageStyle = {
  maxHeight: '400px',
  boxShadow: '0px 1px 1px 0px #aaa',
  border: '1px solid #fff'
};

export default class Tweet extends Component {
  constructor() {
    super();
    this.handleImageClick.bind(this);
  }

  handleImageClick(e) {
    e.preventDefault();
    const { onImageClick, tweet } = this.props;
    if (onImageClick && tweet) {
      onImageClick(tweet);
    }
  }

  render() {
    const { tweet } = this.props;
    const tweetMediaUrl = tweet.media[0].url;
    return (
      <div style={tweetStyle}>
        <img
          alt={tweet.id}
          style={imageStyle}
          src={tweetMediaUrl}
          onClick={this.handleImageClick}
          onKeyDown={this.handleImageClick}
        />
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: (properties, propertyName, componentName) => {
    const tweet = properties[propertyName];

    if (!tweet) {
      return new Error('必须要设置推特...');
    }

    if (!tweet.media) {
      return new Error('推特必须要有图片...');
    }
  },
  onImageClick: PropTypes.func
};
