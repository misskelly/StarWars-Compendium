import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';

const FeaturedFilm = ({film}) => {
  return (
    <section className='film-container'>
      <article className='scroll-container'>
      <Crawl
        title={film.title}
        subTitle={film.subtitle}
        text={film.scroll}
      />
      </article>
      <article className='film-info'>
        <h3 className='film-title'>{film.title}</h3>
        <h4 className='subtitler'>{film.subtitle}</h4>
        <h5 className='release-year'>{film.year}</h5>
      </article>
      
    </section>
  )
}

export default FeaturedFilm