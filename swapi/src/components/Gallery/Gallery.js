import React from 'react'
import Card from '../Card/Card'

const Gallery = ({collection, category}) => {
  
  const getCards = (collectionData) => {
    if (collectionData !== undefined){
      collectionData.map((item, index) => {
        return <Card key={`${index}_${item.name}`} item={item} category={category}/>
      })
    }
  }
  const cards = getCards(collection);

    return(
      <section className='Gallery'>
        <h2 className='gallery-heading'>{category}</h2>
        {cards}
      </section>
    )
  }

  export default Gallery;