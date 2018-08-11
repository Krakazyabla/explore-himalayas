import React from 'react'
import './../App.css'

const Filter = (props) => {

  return (
    <div className="App-filter">
      <input
        type="text"
        value={ props.value }
        placeholder="Input mountain's name"
        onChange={ props.filterList } />
    </div>
  )
}

export default Filter
