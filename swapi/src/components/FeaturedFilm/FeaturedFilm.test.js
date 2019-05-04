import React from 'react';
import FeaturedFilm from '../FeaturedFilm/FeaturedFilm';
import { shallow } from 'enzyme';
import Crawl from 'react-star-wars-crawl';
import { mockCleanFilm, mockDirtyFilm } from '../../helpers/mockData.js';


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




// describe('OpeningCrawl', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow( < OpeningCrawl / > );
//   });

//   it('should match the snapshot', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

//   it('should have initial state', () => {
//     expect(wrapper.state()).toEqual({
//       film: {},
//       loading: true,
//       error: ''
//     });
//   });

//   describe('getNumber', () => {
//     it('should convert a number to roman numeral', () => {
//       const nums = [1, 2, 3, 4, 5, 6, 7];
//       const received = nums.map(num => wrapper.instance().getRomanNumeral(num));
//       expect(received).toEqual(['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']);
//     });
//   });

//   describe('getMovie', () => {
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