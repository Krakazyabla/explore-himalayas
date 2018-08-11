import React from 'react'
import './../App.css'

const ListItem = (props) => {

  return (
    <div className="App-list-item">
      <a href="" onClick={ props.chooseItem }>{ props.name }</a>
    </div>
  )
}

export default ListItem
