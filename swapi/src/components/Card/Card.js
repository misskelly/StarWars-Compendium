import React from 'react'

const Card = ({category, item}) => {
  const { name, species, homeworld, population } = item;
return (
  <article className='card'>
    <h3>{name}</h3>
    <ul>
      <li>species: {species}</li>
      <li>homeworld: {homeworld}</li>
      <li>population: {population}</li>
    </ul>
    <button>Favorite</button>
  </article>
)
}

export default Card;

// Name
// Homeworld
// Species
// Population of Homeworld
// A button to“ Favorite” the person