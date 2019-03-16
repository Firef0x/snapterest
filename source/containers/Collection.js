/**
 * Created by F on 2017/4/20.
 */
import React, { PureComponent } from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './CollectionControls';
import TweetList from '../components/TweetList';
import Header from '../components/Header';
import * as CollectionUtils from '../utils/CollectionUtils';
import stores from '../stores/index';

export default class Collection extends PureComponent {
  constructor() {
    super();
    this.state = {
      collectionTweets: stores.getState().get('collectionTweets').toObject()
    };
  }

  componentDidMount() {
    stores.subscribe(this.onCollectionChange);
  }

  componentWillUnmount() {
    stores.unsubscribe(this.onCollectionChange);
  }

  onCollectionChange() {
    this.setState({
      collectionTweets: stores.getState().get('coolectionTweets').toObject()
    });
  }

  createHtmlMarkupStringOfTweetList() {
    const { collectionTweets } = this.state;
    const html = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={collectionTweets} />
    );

    return JSON.stringify({
      html
    });
  }

  render() {
    const { collectionTweets } = this.state;
    const numberOfTweetsInCollection = CollectionUtils
      .getNumberOfTweetsInCollection(collectionTweets);

    if (numberOfTweetsInCollection > 0) {
      const htmlMarkup = this.createHtmlMarkupStringOfTweetList();

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
          />
          <TweetList tweets={collectionTweets} />
        </div>
      );
    }

    return (
      <Header text="当前集合为空..." />
    );
  }
}
