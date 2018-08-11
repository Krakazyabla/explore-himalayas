import React, { Component } from 'react'
import './../App.css'

class Info extends Component {

  state = {
    article: null,
    imgURL: ''
  }

  componentDidMount() {
    this.fetchData('himalayas');
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.query !== this.props.query) {
      this.fetchData(nextProps.query);
      return false;
    }
    return true;
  }

  fetchData = (query) => {
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${ query }&limit=1&namespace=0&origin=*`)
      .then(result => {
        return result.json();
      }).then(data => {
          const newArticle = {
            title: data[1][0],
            description: data[2][0],
            link: data[3][0]
          }
          this.fetchImage(newArticle);
      })
  }

  fetchImage = (article) => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&gsrsearch=${ article.title }&pithumbsize=600&formatversion=2&generator=search&gsrlimit=1`)
      .then(result => {
        return result.json();
      }).then(data => {
        const src = data.query.pages[0].thumbnail.source;
        if (article.description === '') {
          article.description = data.query.pages[0].terms.description[0];
        }
        this.setState({
          article: article,
          imgURL: src
        });
      })
  }

  render() {
    let output;
    if (!this.state.article) {
      output = (<p>Loading in progress...</p>);
    } else {
      const {title, description, link} = this.state.article;
      output = (<div>
        <h3>
          <a className="wiki-link" href={ link }>{ title }</a>
        </h3>
        <img src={ this.state.imgURL } alt={ 'Mountain ' + title } />
        <p> { description } </p>
        </div>)
    }
    return (
        <div className="App-info">
          { output }
        </div>
    )
  }
}

export default Info
