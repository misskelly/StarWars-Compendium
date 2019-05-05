import React from 'react'

const personCard = ({name, homeworld, species, popOfHome}) => {
return (
  <article className='card'>
    <h3>{name}</h3>
    <ul>
      <li>species: {species}</li>
      <li>homeworld: {homeworld}</li>
      <li>population: {popOfHome}</li>
    </ul>
    <button>Favorite</button>
  </article>
)
}

export default personCard;

// Name
// Homeworld
// Species
// Population of Homeworld
// A button to“ Favorite” the person