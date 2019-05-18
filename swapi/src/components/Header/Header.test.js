import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';



describe('Header', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
});