import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery'
import Header from '../Header/Header'
import Ship from '../Ship/Ship'
import FeaturedFilm from '../FeaturedFilm/FeaturedFilm'
import { handleClean } from '../../helpers/cleaners'
import { fetchFilm, getCollection, fetchData } from '../../helpers/fetchCalls.js'



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      film: {},
      errorStatus: '',
      activeComponent: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetchFilm()
      .then(film => this.setState({ film }))
    }
  mapResults(results, cat) {
    console.log('map')
    const promises = results.map(item => handleClean(item, cat));
    console.log(Promise.all(promises));
    return Promise.all(promises);
  }

  getData(category) {
    console.log('getData')
    const url = `https://www.swapi.co/api/${category}/`;
    return fetchData(url)
      .then(data => this.mapResults(data, category))
      .then(result => this.setState({[category]: result}))
      .catch(err => this.setState({errorStatus: 'Error fetching data'}))
  }

  handleClick(e) {
    const category = e.target.id;
    this.setState({activeComponent: category});
    this.getData(category)
  }

    
    render() {
      const { film, activeComponent } = this.state;
      
    return (
      <main className='App'>
        <div className='stars'></div>
        <div className='twinkling'></div>
        <section className='home'>
          <Header />
          <section className='left-btns'>
            <div className='moon'></div>
            <button 
              className='planets-btn planet-btn'
              id='planets' 
              onClick={() => {this.setState({activeComponent: 'planets'})
              }}>
            Planets
            </button>
            <button 
              className='people-btn planet-btn'
              id='people' 
              onClick={this.handleClick}>
            People
            </button>
          </section>

          <FeaturedFilm film={ film }/>
          
          <section className='right-btns'>
            <button 
              className='favs-btn planet-btn'
              id='favs' 
              onClick={() => {this.setState({activeComponent: 'favs'})
              }}>
            Favorites
            </button>
            <button 
              className='vehicles-btn planet-btn'
              id='vehicles'
              onClick={() => {this.setState({activeComponent: 'vehicles'})
              }}>
            Vehicles
            </button>
          </section>
          <Ship />
        {activeComponent !== '' && 
        <Gallery collection={this.state[activeComponent]} category={activeComponent}/>
      }

        </section>
      </main>
    );
  }
}