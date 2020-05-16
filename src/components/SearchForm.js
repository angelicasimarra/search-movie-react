import React, { Component } from "react";

const API_KEY = '74685376';

export class SearchForm extends Component {
  state = { 
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { inputMovie } = this.state
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
    .then(resp => resp.json())
    .then(results => {
      let search = []
      let totalResults = 0

      if(results.Response && results.Response === "True"){
        search = results.Search
        totalResults = results.totalResults
      
        this.props.onResults(search, totalResults)
      }
    })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              placeholder="Movie to search..."
              type="text"
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    )
  }
}
