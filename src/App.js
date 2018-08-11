import React, { Component } from 'react'
import './App.css'
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
    infoWindowShown: 'none',
    locations: this.defaultLocations
  }

  onMarkerClick = (title) => {
    this.setState({infoWindowShown: title});
  }

  filterList = (e) => {
    const str = e.target.value.trim().toLowerCase();
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


  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Explore Himalayas</h1>
          <Filter
            filterList={ this.filterList }
            value={ this.state.inputString } />
        </header>
        <main className="App-main">
          <Map
            onMarkerClick={this.onMarkerClick}
            isInfoShown={this.state.infoWindowShown}
            locations={this.state.locations}
            onInfoClose={() => this.setState({infoWindowShown: 'none'})}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQlk_GImQ5uy8SzK0ku3IoPGZpSlFXTK4&v=3"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className="map-container" style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <div className="App-results">
            <List />
            <Info />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
