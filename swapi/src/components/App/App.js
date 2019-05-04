import React, { Component } from 'react';
import Planets from '../../Planets/Planets'
import { fetchFilm } from '../../helpers/fetchCalls.js'
import FeaturedFilm from '../FeaturedFilm/FeaturedFilm'

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
    { /* Header */}
        <section className='home'>
          <h1>StarWars</h1>
          <button className='planets-btn' onClick={() => {
            this.setState({activeComponent: 'planets'})
          }}>Planets</button>
        <FeaturedFilm film={ film }/>

        {activeComponent === 'planets' && 
        <Planets />
        }

        </section>
      </main>
    );
  }
}