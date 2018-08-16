import React, { Component } from 'react'
import './style/App.css'
import './style/media.css'
import Map from './components/Map.js'
import Filter from './components/Filter.js'
import List from './components/List.js'
import Info from './components/Info.js'

class App extends Component {

  defaultLocations = [
    {title: 'Everest', coords: { lat: 27.988056, lng: 86.925278 }},
    {title: 'Kanchenjunga', coords: { lat: 27.703333, lng: 88.1475 }},
    {title: 'Lhotse', coords: { lat: 27.961667, lng: 86.933056 }},
    {title: 'Makalu', coords: { lat: 27.889722, lng: 87.088889 }},
    {title: 'Cho Oyu', coords: { lat: 28.094167, lng: 86.660833 }},
    {title: 'Dhaulagiri I', coords: { lat: 28.696667, lng: 83.493056 }},
    {title: 'Manaslu', coords: { lat: 28.55, lng: 84.559722 }},
    {title: 'Annapurna I', coords: { lat: 28.595556, lng: 83.820278 }},
    {title: 'Shishapangma', coords: { lat: 28.353333, lng: 85.778611 }},
    {title: 'Ama Dablam', coords: { lat: 27.861111, lng: 86.861111 }},
    {title: 'Machapuchare', coords: { lat: 28.495, lng: 83.949167 }},
    {title: 'Langtang Lirung', coords: { lat: 28.256111, lng: 85.516944 }}
  ]

  state = {
    inputString: '',
    locations: this.defaultLocations,
    active: ''
  }

  // Function to filter markers and list items when user inputs some value
  // in input field
  filterList = (value) => {
    const str = value.trim().toLowerCase();
    let newLocations;
    if (str === '') {
      newLocations = this.defaultLocations;
    } else {
      newLocations = this.defaultLocations.filter(location => {
        const mountain = location.title.toLowerCase();
        return mountain.indexOf(str) !== -1;
      });
    }
    this.setState({inputString: str, locations: newLocations});
  }

  // Function to make location active after it was choosen
  setActive = (mountain) => {
    this.setState({active: mountain});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" tabIndex={0}>Explore Himalayas</h1>
          <Filter
            filterList={ this.filterList }
            chooseItem={ this.setActive }
            locations={ this.state.locations }
            value={ this.state.inputString } />
          {/*Skip focusing on map marks*/}
          <a href="#filter" className="skip-link">Skip map elements and go to the main content</a>
        </header>
        <main className="App-main">
          <Map
            onMarkerClick={this.setActive}
            active={this.state.active}
            locations={this.state.locations}
            onInfoClose={() => this.setState({infoWindowShown: 'none'})}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQlk_GImQ5uy8SzK0ku3IoPGZpSlFXTK4&v=3"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div className="map-container"
              style={{ height: `300px` }}
              role="application"
              aria-label="Map with markers for Himalayan mountains" />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <div className="App-results">
            <List
              locations={ this.state.locations }
              chooseItem={ this.setActive }/>
            <Info query={ this.state.active }/>
          </div>
        </main>
        <footer>
          <p className="App-credits">
            Powered with
            <a className="App-credits-link" href="https://www.mediawiki.org/wiki/API:Main_page" target="_blank">
              MediaWiki API
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
