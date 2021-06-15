import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount = () => {
    getUrls()
      .then(data => {
        this.setState({ urls: data.urls })
      })
      .catch(() => this.setState({ error: 'Something went wrong'}))
  }

  addURL = (newURL) => {
    this.setState({urls: [...this.state.urls, newURL]})
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addURL={this.addURL}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
