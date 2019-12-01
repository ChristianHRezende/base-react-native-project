import React from 'react';
import { shallow } from 'enzyme';
import MyButton from '../MyButton';
it('should match with snapshot', () => {
    const wrapper = shallow(<MyButton />)
    expect(wrapper).toMatchSnapshot();
})