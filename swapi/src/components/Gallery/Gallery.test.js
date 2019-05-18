import React from 'react';
import Gallery from './Gallery';
import { shallow } from 'enzyme';
import Card from '../Card/Card';
import { mockCleanPeople } from '../../helpers/mockData.js';


describe('Gallery', () => {
  let wrapper;
  let activeComponent;
  
  beforeEach(() => {
    activeComponent = 'people';

    wrapper = shallow(<Gallery collection={mockCleanPeople} category={ activeComponent }/>);
  });
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
});