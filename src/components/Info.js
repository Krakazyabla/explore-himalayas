import React, { Component } from 'react'
import InfoArticle from './InfoArticle'
import './../style/App.css'
import './../style/media.css'

class Info extends Component {

  state = {
    article: null,
    imgURL: '',
    apiError: false,
    apiErrorType: ''
  }

  // fetch initial article
  componentDidMount() {
    this.fetchData('himalayas');
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.query !== this.props.query) {
      this.setState({
        apiError: false,
        apiErrorType: ''
      });
      this.fetchData(nextProps.query);
      return false;
    }
    return true;
  }

  // Function for fetching article with wikipedia API
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
        this.setState({ article: newArticle });
        this.fetchImage(newArticle);
      }).catch(error => this.handleError(error, 'data'))
  }

  // Function for fetching image with wikipedia API
  fetchImage = (article) => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&gsrsearch=${ article.title }&pithumbsize=600&formatversion=2&generator=search&gsrlimit=1`)
      .then(result => {
        return result.json();
      }).then(data => {
        const src = data.query.pages[0].thumbnail.source;
        if (article.description === '') {
          article.description = data.query.pages[0].terms.description[0];
          this.setState({ article: article });
        }
        this.setState({
          imgURL: src
        });
      }).catch(error => this.handleError(error, 'img'))
  }

  handleError = (error, type) => {
    console.log(error);
    this.setState({
      apiError: true,
      apiErrorType: type
    });
  }

  render() {
    let output;
    if (this.state.apiError && this.state.apiErrorType === 'data') {
      output = (<h1>{ "Cannot load API's data" }</h1>);
    } else if (this.state.article){
      output =
        <InfoArticle
          article={ this.state.article }
          url={ !(this.state.apiErrorType === 'img') && this.state.imgURL } />
    } else {
      output = (<h1>{ "Loading in progress" }</h1>);
    }
    return (
        <div className="App-info">
          { output }
        </div>
    )
  }
}

export default Info
