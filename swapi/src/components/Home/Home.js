  import React from 'react'
  import Ship from '../Ship/Ship'
  import FeaturedFilm from '../FeaturedFilm/FeaturedFilm'
  
  const Home = ({film, updateActiveComponent}) => {
    
    const handleClick = (e) => {
      const category = e.target.id;
      updateActiveComponent(category)
    }
    return (
      <section className='home'>
        <section className='left-btns'>
          <div className='moon'></div>
            <button 
              className='planets-btn planet-btn'
              id='planets' 
              onClick={handleClick}>
              Planets
              </button>
              <button 
                className='people-btn planet-btn'
                id='people' 
                onClick={handleClick}>
              People
              </button>
            </section>

            <FeaturedFilm film={ film }/>
            
            <section className='right-btns'>
              <button 
                className='favs-btn planet-btn'
                id='favs' 
                onClick={handleClick}>
              Favorites
              </button>
              <button 
                className='vehicles-btn planet-btn'
                id='vehicles'
                onClick={handleClick}>
              Vehicles
              </button>
            </section>
            <Ship />
          </section>
        )
      }
      export default Home;