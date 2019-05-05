import { getSpecies, getHomeworldInfo, fetchData, getDirtyItems } from './fetchCalls'

export const cleanFilm = film => {
  const { title, opening_crawl, release_date, episode_id } = film
  const num = getNumeral(episode_id)
  const clean = { 
    title: `Episode ${num}`,
    subtitle: title,
    scroll: opening_crawl,
    year: release_date.slice(0, 4)
  }
  return clean
}

export const getNumeral = num => {
  const i = num - 1;
  const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
  return numerals[i];
}


// mapResults(data, cat) {
//   let items = (data.results.map(item => {
//     return handleClean(item, cat)
//   }))
//   return Promise.all(items);
// }
export const handleClean = (data, category) => {
  
  const clean = getDirtyItems(data, category)
    .then(result => {
      console.log('.then')
      cleanEach(result)
    })
  // .then(dirty => cleanEach(dirty, category))
  // .catch(err => console.log('shit', err))
  
  console.log(clean)
  return clean
  
}

export const cleanEach = (collection) => {
  console.log('dirty')
  const cleaned = collection.map(item => {
    // console.log(item)
    return cleanPerson(item)
            .then(person => console.log('clean person', person))
    // if (category === 'people') {
    //   return cleanPerson(item)
    // } else {
    //   return item;
    // }
  })
  
  return Promise.all(cleaned)
}

export const cleanVehicle= (ship) => {
 
  console.log('clean vehicle')
}

export const cleanPerson = (person) => {
  let breed = getSpecies(person.species)
  let cleanedPerson = getHomeworldInfo(person.homeworld)
      .then(planet => ({name: person.name, species: breed,  ...planet}))
  
  return cleanedPerson;
}




