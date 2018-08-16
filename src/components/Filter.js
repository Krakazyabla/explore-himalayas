import React, { Component } from 'react'
import './../style/App.css'
import './../style/media.css'

class Filter extends Component {

  state = {
    active: 0,
    empty: true
  }

  clearState = () => {
    this.setState({
      active: 0,
      empty: true
    });
  }

  // Handler for clicking on autocomplete menu
  onClick = (mountain) => {
    this.clearState();
    this.props.chooseItem(mountain);
  }

  // Handler for key pressing when input field is in focus
  onKeyDown = (event) => {
    switch (event.keyCode) {
      // if up key is pressed
      case 38:
        this.setState(prevState => {
          const newActive = prevState.active === 0 ? this.props.locations.length - 1 : prevState.active - 1;
          return {active: newActive};
        })
        break;
      // if down key is pressed
      case 40:
        this.setState(prevState => {
          const newActive = prevState.active === this.props.locations.length - 1 ? 0 : prevState.active + 1;
          return {active: newActive};
        })
        break;
      // if Enter is pressed
      case 13:
        const mountain = this.props.locations[this.state.active].title;
        this.clearState();
        this.props.chooseItem(mountain);
        break;
      default:
      // for other keys, beginning of new input
        if (this.state.empty) {
          this.props.filterList('');
          this.setState({ empty: false });
        }
    }
  }

  render() {
    let autocomplete;
    if (this.props.locations.length > 0 && this.props.locations.length < 5 && !this.state.empty) {
      autocomplete = (
        <div className="autocomplete">
          { this.props.locations.map((location, index) => {
            return (
              <div
                className={ this.state.active === index ? "active autocomplete-item" : "autocomplete-item"}
                key={ index }
                onClick={ () => this.onClick(location.title) }>
                  <a href="" className="autocomplete-item-link">{ location.title }</a>
              </div>)
          }) }
        </div>);
    } else {
      autocomplete = null;
    }
    return (
      <div className="App-filter">
        <input
          type="text"
          role="search"
          aria-labelledby="filter"
          value={ this.state.empty ? '' : this.props.value }
          placeholder="Input mountain's name"
          onKeyDown={ (event) => this.onKeyDown(event) }
          onChange={ (event) => this.props.filterList(event.target.value) } />
        { autocomplete }
      </div>
    )
  }
}

export default Filter
