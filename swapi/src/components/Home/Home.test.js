import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';
import FeaturedFilm from '../FeaturedFilm/FeaturedFilm'

// import { fetchFilm } from '../../helpers/fetchCalls.js'
import { mockCleanFilm, mockDirtyFilm } from '../../helpers/mockData.js';

describe('Home', () => {
      let wrapper;
      let mockUpdateActiveComponent;

  beforeEach(() => {
  
    mockUpdateActiveComponent = jest.fn();
  
    wrapper = shallow(<Home updateActiveComponent={ mockUpdateActiveComponent } film={ mockCleanFilm }/>)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  it('renders a FeaturedFilm component with the correct props', () => {

    expect(wrapper.find(FeaturedFilm).prop('film')).toEqual((mockCleanFilm));

});

})