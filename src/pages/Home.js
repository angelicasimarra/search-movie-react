import React, { Component } from "react";
import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MoviesList } from "../components/MoviesList";

export default class Home extends Component {
  state = { results: [], totalResults: 0, usedSearch: false };

  _handleResults = (results, totalResults) => {
    this.setState({ results, totalResults, usedSearch: true });
  };

  _renderResults = () => {
    return this.state.results.length === 0 ? (
      <p>No results found</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  };

  render() {
    return (
      <div>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>

        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to searh a movie</small>
        )}
      </div>
    );
  }
}
