import React, { Component } from 'react'

export default class Planets extends Component {
  constructor() {
    super()
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    const url = 'https://www.swapi.co/api/planets'
    return fetch(url)
      .then(response => response.json())
      .then(planets => console.log(planets))
  }

  render() {
    return(
      <section className='planets-container'>
      
      </section>
    )
  }
}