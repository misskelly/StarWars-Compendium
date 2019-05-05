import React from 'react';
import App from './App';
import FeaturedFilm from '../FeaturedFilm/FeaturedFilm';
import { shallow } from 'enzyme';
// import { fetchFilm as mockFetchFilm } from '../../helpers/fetchCalls.js'
import { mockCleanFilm, mockDirtyFilm } from '../../helpers/mockData.js';


describe('App', () => {
  let wrapper;
  let initialState;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
    initialState = {
      people: [],
      planets: [],
      vehicles: [],
      film: {},
      errorStatus: '',
      activeComponent: ''
    }
  });
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  
 // const mockActiveComponent = 'planets'
 // const mockEvent = jest.fn()
 // const mockFetchFilm = jest.fn()
 // const mockFetchPlanets = jest.fn()
  // window.fetch = jest.fn()
  //   .mockImplementation(
  //     () => Promise.resolve(
  //       { json: () => Promise.resolve(mockDirtyFilm) }
  //       )
  //   )
  // })

  it('has the correct default state', () => {
    expect(wrapper.state()).toEqual(initialState);
  });

  it('renders a FeaturedFilm component with the correct props', () => {

    wrapper.setState({ film: mockCleanFilm});
    expect(wrapper.find(FeaturedFilm).prop('film')).toEqual(wrapper.state('film'));

  });

  // it('should set the film state on mount', () => {
  //   window.fetch = jest.fn().mockImplementation(() => {
  //     return Promise.resolve({
  //       ok: true,
  //       json: () => Promise.resolve(mockCleanFilm)
  //     });
  //   });
    
  //   expect(wrapper.state('film')).toEqual(mockCleanFilm)
  // })

  
  // // on component did mount we call fetch film
  // it('should call fetchFilm on mount', () => {
  //   // mount component
  //   jest.mock('../../helpers/fetchcalls.js')
  //    expect(mockFetchFilm).toHaveBeenCalled();
  //     // mock out if fetch is called, what to return
      
  //     // assert that state was set with film
  //     // state updates with new film after cdm
  // })



  it('should call fetchPlanets on button click', () => {

  })

});
// on planets button click, we call fetch planets
// state updates with active component: planets