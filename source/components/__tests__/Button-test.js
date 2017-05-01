/**
 * Created by F on 2017/5/1.
 */
jest.dontMock('../Button.react');

describe('Button 组件', function () {
    it('点击按钮时调用处理函数', function () {
        var React = require('react');
        var Enzyme = require('enzyme');
        var Button = require('../Button.react');
        var handleClick = jest.genMockFunction();

        var testButton = Enzyme.shallow(
            <Button handleClick={handleClick} />
        );

        testButton.find('button').simulate('click');

        expect(handleClick).toBeCalled();

        var numberOfCallsMa的IntoMockFunction = handleClick.mock.calls.length;

        expect(numberOfCallsMa的IntoMockFunction).toBe(1);
    });
});
