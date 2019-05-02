import React from 'react';

const FeaturedFilm = ({film}) => {
  return (
    <section className='film-container'>
      <article className='scroll-container'>{film.scroll}</article>
    </section>
  )
}

export default FeaturedFilm