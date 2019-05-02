import React from 'react';

const FeaturedFilm = ({film}) => {
  return (
    <section className='film-container'>
      <article className='scroll-container'>
      {film.scroll}
      </article>
      <article className='film-info'>
        <h3 className='film-title'>{film.title}</h3>
        <h4 className='release-year'>{film.year}</h4>
      </article>
    </section>
  )
}

export default FeaturedFilm