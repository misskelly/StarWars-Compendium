import React from 'react';
import { shallow } from 'enzyme';
import { mockCleanFilm, mockDirtyFilm } from './mockData';
import { fetchFilm } from './fetchCalls'

describe('fetchFilm', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
       ok: true,
       json: () => Promise.resolve(mockCleanFilm)
     })
    );
  })
  
  // it('calls fetch with the correct data', () => {
  //    const expected = [
  //      `https://www.swapi.co/api/films/${(expect.any(Number))}`,
  //      {
  //        method: 'GET',
  //        body: JSON.stringify({
  //          film: mockDirtyFilm
  //        }),
  //        headers: {
  //          'Content-Type': 'application/json'
  //        }
  //      }
  //    ]

  //    fetchFilm();

  //     expect(window.fetch).toHaveBeenCalledWith(...expected);
  // })

  // it('should return a parsed response if status is ok', async () => {
  //   const result = await fetchFilm();
    
  // });
  
  
  it('should return a clean film object', () => {
    expect(fetchFilm()).resolves.toBe(expect.objectContaining({
       scroll: "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
         title: "Episode I",
         subtitle: "The Phantom Menace",
         year: "1999"
  
    }), )

  })
});