import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery'
import Header from '../Header/Header'
import Loading from '../Loading/Loading'
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
      loading: false,
      errorStatus: '',
      activeComponent: ''
    }
    this.updateActiveComponent = this.updateActiveComponent.bind(this);
  }

  componentDidMount() {
    this.setState({loading: true})
    fetchFilm()
      .then(film => this.setState({ film, loading: false }))
    }
  
  getData(category) {
    const url = `https://www.swapi.co/api/${category}/`;
    return fetchData(url)
      .then(data => handleClean(data, category))
      .then(result => this.setState({ [category]: result, loading: false }))
      .catch(err => this.setState({ errorStatus: 'Error fetching data' }))
  }

  updateActiveComponent(category) {
    this.setState({ activeComponent: category, loading: true });
    this.getData(category);
  }

    
    render() {
      const { film, activeComponent, loading } = this.state;
      
    return (
      <main className='App'>
        <div className='stars'></div>
        <div className='twinkling'></div>
        <section className='container'>
        { loading === true && <Loading /> }
        {loading === false &&
          <Header />
        }
        { loading === false && activeComponent === '' &&
          <Home updateActiveComponent={ this.updateActiveComponent } film={ film } />
        }
          { activeComponent !== '' && loading === false &&
      
          <Gallery collection={this.state[activeComponent]} category={ activeComponent }/>
        }
        
        </section>
      </main>
    );
  }
}