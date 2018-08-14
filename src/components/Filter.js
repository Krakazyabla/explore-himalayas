import React from 'react'
import './../style/App.css'
import './../style/media.css'

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
