import React, { Component } from 'react';
import { fetchFilm } from './helpers/fetchCalls.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      film: {}
    }
  }

  fetchFilm = () => {
    const randomNum = Math.floor(Math.random() * (7 - 1) + 1);
    const url = `https://www.swapi.co/api/films/${randomNum}`
    return fetch(url)
      .then(response => response.json())
      .then(film => this.cleanFilm(film))
      .catch(error => console.log(error))
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

    return (
      <div className="App">
      <h1>StarWars</h1>
    </div>
  );
}

}

