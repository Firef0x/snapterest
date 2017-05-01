/**
 * Created by F on 2017/4/29.
 */
jest.dontMock("../TweetUtils");

describe('Tweet 工具模块', function () {
    it('返回一个推特 ID 的数组', function () {

        var TweetUtils = require('../TweetUtils');
        var tweetsMock = {
            tweet1: {},
            tweet2: {},
            tweet3: {},
            tweet4: {}
        };
        var expectedListOfTweetIds = [ 'tweet1', 'tweet2', 'tweet3', 'tweet4'];
        var actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);
        expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
    });
});