import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { ButtonBackToHome } from "../components/ButtonBackToHome";

const API_KEY = "74685376";

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };

  state = { movie: {} };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((resp) => resp.json())
      .then((movie) => {
        this.setState({ movie });
      });
  }

  componentDidMount() {
    console.log(this.props.match);
    
    const { movieId } = this.props.match.params;
    this._fetchMovie({ id: movieId });
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

    return (
      <div>
        <ButtonBackToHome />
        <br /><br />
        <h1>{Title}</h1>
        <img src={Poster} alt="Poster Movie" />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    )
  }
}
