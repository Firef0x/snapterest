/**
 * Created by F on 2017/5/1.
 */
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

jest.dontMock('../Button');

describe('Button 组件', () => {
  it('点击按钮时调用处理函数', () => {
    const handleClick = jest.fn();
    const testButton = shallow(
      <Button label="Label" handleClick={handleClick} />
    );

    testButton.find('button').simulate('click');
    expect(handleClick).toBeCalled();
    expect(handleClick).toBeCalledTimes(1);
  });
});
