import React, { Component } from 'react';
// import { fetchFilm } from './helpers/fetchCalls.js'
import FeaturedFilm from './components/FeaturedFilm/FeaturedFilm'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      film: {},
      errorStatus: ''
    }
  }

  fetchFilm = () => {
    const randomNum = Math.floor(Math.random() * (7 - 1) + 1);
    const url = `https://www.swapi.co/api/films/${randomNum}`
    return fetch(url)
      .then(response => {
        if (response.status >= 400) {
          this.setState({errorStatus: 'Error fetching film info'});
        } else {
          response.json()
        .then(film => this.cleanFilm(film))
        .catch(error => console.log(error))
      }
    });
  }

  cleanFilm = film => {
    const { title, opening_crawl, release_date } = film
    const clean = { 
      title: title,
      scroll: opening_crawl,
      year: release_date.slice(0, 4)
    }
    this.setState({film: clean})
  }

  componentDidMount() {
    this.fetchFilm()
  }
  
  render() {
    const { film } = this.state;
    return (
      <div className="App">
    { /* Header */}
        <main>
          <h1>StarWars</h1>
        <FeaturedFilm film={ film }/>

        </main>
      </div>
  );
}

}

