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

export const getDirtyItems = (data, category) => {
  // debugger
  let all = Array(data.count + 2).fill('')
  all = Object.getOwnPropertyNames(all).slice(1, (all.length - 1))
  let promises = all.map(item => {
    const url = `https://www.swapi.co/api/${category}/${item}`
    return fetchData(url)
  })
  // console.log(promises)
  return Promise.all(promises);
}

export const getHomeworldInfo = (url) => {
  return fetchData(url)
    .then(planet => {
      return {
        homeworld: planet.name,
        population: planet.population
      }
    })
}

export const getSpecies = (url) => {
  return fetchData(url)
    .then(species => ({species: species.name}))
}