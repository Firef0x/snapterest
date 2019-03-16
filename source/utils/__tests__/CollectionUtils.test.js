/**
 * Created by F on 2017/5/1.
 */
import { getNumberOfTweetsInCollection, isEmptyCollection } from '../CollectionUtils';

describe('Collection 工具模块', () => {
  const collectionTweetsMock = {
    collectionTweet4: {},
    collectionTweet5: {},
    collectionTweet6: {},
    collectionTweet7: {}
  };

  it('返回专辑中推特的数量', () => {
    const actual = getNumberOfTweetsInCollection(collectionTweetsMock);
    const expected = 4;

    expect(actual)
      .toBe(expected);
  });

  it('返回专辑是否为空', () => {
    const actualIsEmptyCollectionValue = isEmptyCollection(collectionTweetsMock);

    expect(actualIsEmptyCollectionValue).toBeDefined();
    expect(actualIsEmptyCollectionValue).toBe(false);
    expect(actualIsEmptyCollectionValue).not.toBe(true);
  });
});
