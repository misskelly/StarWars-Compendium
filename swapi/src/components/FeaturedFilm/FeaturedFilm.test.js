import React from 'react';
import FeaturedFilm from '../FeaturedFilm/FeaturedFilm';
import { shallow } from 'enzyme';
import Crawl from 'react-star-wars-crawl';
import { mockCleanFilm } from '../../helpers/mockData.js';


describe('FeaturedFilm', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<FeaturedFilm film={mockCleanFilm} />);
  });
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  

  it('renders a Crawl component with the correct props', () => {
    expect(wrapper.find(Crawl).prop('title')).toEqual(mockCleanFilm.title)

    expect(wrapper.find(Crawl).prop('subTitle')).toEqual(mockCleanFilm.subtitle)

    expect(wrapper.find(Crawl).prop('text')).toEqual(mockCleanFilm.scroll);
 
  });
});


  // // on component did mount we call fetch film
  // it('should call fetchFilm on mount', () => {
  //   // mount component
  //   jest.mock('../../helpers/fetchcalls.js')
  //    expect(mockFetchFilm).toHaveBeenCalled();
  //     // mock out if fetch is called, what to return
      
  //     // assert that state was set with film
  //     // state updates with new film after cdm
  // })






//   describe('getFilm', () => {
//     it('should update movie state on success', async () => {
//       await wrapper.instance().getMovie();
//       expect(wrapper.state('film')).toHaveProperty(...Object.keys(mockFilm));
//     });

//     it('should update error state on fail', async () => {
//       window.fetch = jest.fn().mockImplementation(() =>
//         Promise.resolve({
//           ok: false
//         })
//       );
//       await wrapper.instance().getMovie();
//       expect(wrapper.state('error')).toEqual('Unable to fetch film');
//     });
//   });
// });