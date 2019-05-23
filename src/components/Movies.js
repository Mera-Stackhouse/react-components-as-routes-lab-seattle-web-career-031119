import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {

  renderMovies = () => {
    return movies.map(m => {
      return (
        <div key={m.id}>
          <p>{m.title}</p>
          <p>{m.time} mins</p>
          <ul>{m.genres.map(g => <li key={g}>{g}</li>)}</ul>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Movies Page</h1>
        {this.renderMovies()}
      </div>
    )

  }
};

export default Movies;
