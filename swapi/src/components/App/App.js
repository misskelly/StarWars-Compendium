import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery'
import Header from '../Header/Header'
import Home from '../Home/Home'
import { handleClean } from '../../helpers/cleaners'
import { fetchFilm, fetchData } from '../../helpers/fetchCalls.js'



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
    this.updateActiveComponent = this.updateActiveComponent.bind(this);
  }

  componentDidMount() {
    fetchFilm()
      .then(film => this.setState({ film }))
    }
  mapResults(data, cat) {
    console.log('map', data, cat)
    let items = (data.results.map(item => {
      console.log('map-item', item)
      return handleClean(item, cat)
    }))
    return items;
  }

  getData(category) {
    console.log('getData')
    const url = `https://www.swapi.co/api/${category}/`;
    return fetchData(url)
      .then(data => this.mapResults(data, category))
      .then(result => this.setState({ [category]: result }))
      .catch(err => this.setState({ errorStatus: 'Error fetching data' }))
  }

  updateActiveComponent(category) {
    this.setState({ activeComponent: category });
    this.getData(category);
  }

    
    render() {
      const { film, activeComponent } = this.state;
      
    return (
      <main className='App'>
        <div className='stars'></div>
        <div className='twinkling'></div>
        <section className='container'>
          <Header />
          { activeComponent === '' &&
          <Home updateActiveComponent={ this.updateActiveComponent } film={ film } />
          }
          { activeComponent !== '' && 
            <Gallery collection={this.state[activeComponent]} category={ activeComponent }/>
          }

        </section>
      </main>
    );
  }
}