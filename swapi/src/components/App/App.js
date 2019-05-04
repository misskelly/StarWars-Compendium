import React, { Component } from 'react';
import Planets from '../Planets/Planets'
import Header from '../Header/Header'
import Ship from '../Ship/Ship'
import FeaturedFilm from '../FeaturedFilm/FeaturedFilm'
import { fetchFilm } from '../../helpers/fetchCalls.js'



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
  }

  componentDidMount() {
    fetchFilm()
      .then(film => this.setState({ film }))
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
              onClick={() => {this.setState({activeComponent: 'people'})
              }}>
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

        {activeComponent === 'planets' && 
        <Planets />
        }

        </section>
      </main>
    );
  }
}