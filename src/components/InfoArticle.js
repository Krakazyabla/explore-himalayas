import React from 'react'
import './../style/App.css'
import './../style/media.css'
import * as unknownImg from './../img/unknown.jpg'

const InfoArticle = (props) => {
  const {title, description, link} = props.article;
  return (
    <div className="App-info-wrapper">
      <h3 className="App-info-title" tabIndex={0}>{ title }
        <a className="wiki-link" href={ link } target="_blank">(see details on Wikipedia)</a>
      </h3>
      <img className="App-info-image" src={ props.url || unknownImg } alt={ 'Mountain ' + title } />
      <p className="App-info-description"> { description } </p>
    </div>
  )
}

export default InfoArticle
