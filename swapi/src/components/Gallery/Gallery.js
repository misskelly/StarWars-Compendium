import React from 'react'
import Card from '../Card/Card'

const Gallery = ({collection, category}) => {
  console.log('gallery people', collection)
  const getCards = (collectionData) => {
    return collectionData.map((item, index) => {
        return <Card key={`${index}_${item.name}`} item={item} category={category}/>
    })
  }
  const cards = getCards(collection);

    return(
      <section className='gallery'>
        <h2 className='gallery-heading'>{category}</h2>
        <div className='card-container'>
          {collection.length > 0 && cards}
        </div>
        
      </section>
    )
  }

  export default Gallery;