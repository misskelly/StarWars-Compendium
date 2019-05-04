import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import PropTypes from 'prop-types'

const FeaturedFilm = ({film}) => {

  return (
    <section className='film-container'>
      <Crawl
        title={film.title}
        subTitle={film.subtitle}
        text={film.scroll}
      />
      <article className='film-info'>
        <h3 className='film-title'>{film.title}</h3>
        <h4 className='subtitle'>{film.subtitle}</h4>
        <h5 className='release-year'>{film.year}</h5>
      </article>
      
    </section>
  )
}

FeaturedFilm.propTypes = {
  film: PropTypes.object.isRequired,
}

export default FeaturedFilm