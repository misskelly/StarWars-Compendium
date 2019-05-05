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
FeaturedFilm.defaultProps = {
  scroll: "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
    title: 'Episode I',
    subtitle: "The Phantom Menace",
    year: "1999"
}
export default FeaturedFilm