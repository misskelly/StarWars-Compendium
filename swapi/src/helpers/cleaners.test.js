import { mockCleanFilm, mockDirtyFilm} from './mockData.js';
import { cleanFilm, getNumeral } from './cleaners.js'

describe('cleanFilm', () => {
  
  it('should remove unwanted keys from a raw film object', () => {
    let film = mockDirtyFilm
    expect(cleanFilm(film)).toEqual(mockCleanFilm);
  })
})

describe('getNumeral', () => {
  let number = 3;
  it('should convert a number to a roman numeral string', ()=> {
    expect(getNumeral(number)).toEqual('III');
  })

})

