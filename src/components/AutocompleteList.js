import React from 'react'
import './../style/App.css'
import './../style/media.css'

const AutocompleteList = (props) => {
  if (props.locations.length > 0 && props.locations.length < 5 && props.existInput) {
    return (
      <div className="autocomplete">
        { props.locations.map((location, index) => {
          return (<div
              className={ props.active === index ? "active autocomplete-item" : "autocomplete-item"}
              key={ index }
              onClick={ () => props.onClick(location.title) }>
                <a href="" className="autocomplete-item-link">{ location.title }</a>
            </div>)
        }) }
      </div>)
    } else {
      return null;
    }
}

export default AutocompleteList
