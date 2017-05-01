/**
 * Created by F on 2017/5/1.
 */
jest.dontMock('../Header.react');

describe('Header 组件', function () {
    it('渲染给出的标题文本', function () {
        var React = require('react');
        var ReactDOM = require('react-dom');
        var Enzyme = require('enzyme');
        var Header = require('../Header.react');

        var testHeader = Enzyme.shallow(
            <Header text="测试" />
        );

        var actualHeaderText = testHeader.text();

        expect(actualHeaderText).toBe("测试");

        var defaultHeader = Enzyme.shallow(
            <Header />
        );

        var actualDefaultHeaderText = defaultHeader.text();

        expect(actualDefaultHeaderText).toBe("默认标题");
    });
});