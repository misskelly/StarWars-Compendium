import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import { mockCleanPeople } from '../../helpers/mockData.js';


describe('Card', () => {
      let wrapper;
      let index;
      let category;
      let item;

  beforeEach(() => {
    index = 0;
    category = 'people';
    item = mockCleanPeople[0];
    wrapper = shallow(<Card key={`${index}_${item.name}`} item={item} category={category}/>)
  })

  it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

})