import React, { Component } from 'react'
import './style/App.css'
import './style/media.css'
import Map from './components/Map.js'
import Filter from './components/Filter.js'
import List from './components/List.js'
import Info from './components/Info.js'
import * as defaultLocations from './data/mountains.json'

class App extends Component {

  state = {
    inputString: '',
    locations: defaultLocations,
    active: ''
  }

  gm_authFailure() {
    window.alert("Google Maps error: authentification failed!");
  }

  // Function to filter markers and list items when user inputs some value
  // in input field
  filterList = (value) => {
    const str = value.trim().toLowerCase();
    let newLocations;
    if (str === '') {
      newLocations = defaultLocations;
    } else {
      newLocations = defaultLocations.filter(location => {
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

  componentWillMount(){
    window.gm_authFailure = this.gm_authFailure;
  }

  render() {
    // display google map or error message depends on script loading
    let mapArea;
    if (window.google) {
      mapArea = (<Map
          onMarkerClick={this.setActive}
          active={this.state.active}
          locations={this.state.locations}
          onInfoClose={() => this.setState({infoWindowShown: 'none'})}
          containerElement={
            <div className="map-container"
            style={{ height: `300px` }}
            role="application"
            aria-label="Map with markers for Himalayan mountains" />}
          mapElement={<div style={{ height: `100%` }} />}
        />);
      } else {
        mapArea = (<h1>{ "Map isn't loaded" }</h1>);
      }

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
          { mapArea }
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
