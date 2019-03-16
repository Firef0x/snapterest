/**
 * Created by F on 2017/4/29.
 */
import getListOfTweetIds from '../TweetUtils';

describe('Tweet 工具模块', () => {
  it('返回一个推特 ID 的数组', () => {
    const tweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {},
      tweet4: {}
    };
    const expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3', 'tweet4'];
    const actualListOfTweetIds = getListOfTweetIds(tweetsMock);
    expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
  });
});
