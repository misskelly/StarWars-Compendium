import React from 'react';
import Ship from './Ship';
import { shallow } from 'enzyme';



describe('Ship', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( < Ship / > );
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});