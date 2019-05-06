import React from 'react';
import Loading from './Loading';
import { shallow } from 'enzyme';



describe('Loading', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Loading />);
  });
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
});