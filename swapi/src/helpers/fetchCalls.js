import { cleanFilm } from './cleaners.js'
import { mockCleanFilm } from './mockData.js';


export const fetchFilm = () => {
  const randomNum = Math.floor(Math.random() * (7 - 1) + 1);
  const url = `https://www.swapi.co/api/films/${randomNum}`
  return fetchData(url)
    .then(film => cleanFilm(film))
    .catch(mock => cleanFilm(mockCleanFilm))
  }



export const fetchData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch(err => new Error('There was a problem retrieving the data'))
}