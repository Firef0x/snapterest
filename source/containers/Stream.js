/**
 * Created by F on 2017/4/20.
 */
import React, { PureComponent } from 'react';
import StreamTweet from './StreamTweet';
import Header from '../components/Header';
import stores from '../stores/index';

export default class Stream extends PureComponent {
  constructor() {
    super();
    this.onTweetChange = this.onTweetChange.bind(this);

    this.state = {
      tweet: stores.getState().get('tweet')
    };
  }

  componentDidMount() {
    stores.subscribe(this.onTweetChange);
  }

  componentWillUnmount() {
    stores.unsubscribe(this.onTweetChange);
  }

  onTweetChange() {
    this.setState({
      tweet: stores.getState().get('tweet')
    });
  }

  render() {
    const { tweet } = this.state;

    if (tweet) {
      return (
        <StreamTweet tweet={tweet} />
      );
    }
    return (
      <Header text="正等待从 Twitter 中传入公共图片..." />
    );
  }
}
