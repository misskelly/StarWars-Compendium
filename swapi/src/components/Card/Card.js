import React from 'react'

const Card = ({category, item}) => {
  const { name, species, homeworld, population } = item;
return (
  <article className='card'>
    <h3 className='card-heading'>{name}</h3>
    <ul>
      <li className='card-detail'>species: {species}</li>
      <li className='card-detail'>homeworld: {homeworld}</li>
      <li className='card-detail'>population: {population}</li>
    </ul>
    <button className='fav-btn'>Favorite</button>
  </article>
)
}

export default Card;

// Name
// Homeworld
// Species
// Population of Homeworld
// A button to“ Favorite” the person