import React from 'react'
import './../style/App.css'
import './../style/media.css'
import ListItem from './ListItem.js'

const List = (props) => {

  return (
    <div className="App-list">
      { props.locations.map(location =>
        <ListItem
          key={ location.title }
          name={ location.title }
          chooseItem={(e) => {
            e.preventDefault();
            props.chooseItem(location.title);
          }}/>
      )}
    </div>
  )
}

export default List
