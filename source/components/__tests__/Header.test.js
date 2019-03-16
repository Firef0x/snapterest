/**
 * Created by F on 2017/5/1.
 */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

jest.dontMock('../Header');

describe('Header 组件', () => {
  it('渲染给出的标题文本', () => {
    const testText = '测试';
    const testHeader = shallow(
      <Header text={testText} />
    );

    const actualHeaderText = testHeader.text();

    expect(actualHeaderText).toEqual(testText);

    const defaultHeader = shallow(
      <Header />
    );

    const actualDefaultHeaderText = defaultHeader.text();

    expect(actualDefaultHeaderText).toEqual('默认标题');
  });
});
