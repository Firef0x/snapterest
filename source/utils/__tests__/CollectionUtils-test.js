/**
 * Created by F on 2017/5/1.
 */
jest.autoMockOff();

describe('Collection 工具模块', function () {
    var CollectionUtils = require('../CollectionUtils');

    var collectionTweetsMock = {
        collectionTweet4: {},
        collectionTweet5: {},
        collectionTweet6: {},
        collectionTweet7: {}
    };

    it('返回专辑中推特的数量', function getNumberOfTweetsInCollection () {
        var actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
        var expectedNumberOfTweetsInCollection = 4;

        expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);
    });

    it('返回专辑是否为空', function isNotEmptyCollection () {
        var actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock);

        expect(actualIsEmptyCollectionValue).toBeDefined();
        expect(actualIsEmptyCollectionValue).toBe(false);
        expect(actualIsEmptyCollectionValue).not.toBe(true);
    });
});
