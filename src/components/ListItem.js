import React from 'react'
import './../style/App.css'
import './../style/media.css'

const ListItem = (props) => {

  return (
    <div className="App-list-item"  onClick={ props.chooseItem }>
      <a href="">{ props.name }</a>
    </div>
  )
}

export default ListItem
