import React from 'react'
import Card from '../Card/Card'

const Gallery = ({collection, category}) => {
  
  const getCards = (collectionData) => {
    collectionData.map((item, index) => {
      // return <Card key={`${index}_${item.name}`} item={item} category={category}/>
    })
  }
  const cards = getCards(collection);

    return(
      <section className='Gallery'>
        {cards}
      </section>
    )
  }

  export default Gallery;