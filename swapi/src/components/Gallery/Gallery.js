import React, { Component } from 'react'

const Gallery = ({collection}) => {
  const cards = this.getCards(collection);

  getCards(collection) {
    collection.map((item, index) => {
      return <Card key={`${index}_${item.name}`} item={item} />
    })
  }

    return(
      <section className='Gallery'>
        {cards}
      </section>
    )
  }
}