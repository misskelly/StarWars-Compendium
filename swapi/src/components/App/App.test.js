import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme'
import { fetchFilm as mockFetchFilm } from '../../helpers/fetchCalls.js'
import { mockCleanFilm, mockDirtyFilm } from '../../helpers/mockData.js'



describe('App', () => {
 
// const mockActiveComponent = 'planets'
// const mockEvent = jest.fn()
// const mockFetchFilm = jest.fn()
// const mockFetchPlanets = jest.fn()
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  window.fetch = jest.fn()
    .mockImplementation(
      () => Promise.resolve(
        { json: () => Promise.resolve(mockDirtyFilm) }
        )
    )
  })

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
// on planets button click, we call fetch planets
// state updates with active component: planets


