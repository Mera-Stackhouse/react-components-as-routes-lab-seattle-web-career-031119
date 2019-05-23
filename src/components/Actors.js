import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => <div key={a.name}><p>{a.name}</p><ul>{a.movies.map(m => <li key={m}>{m}</li>)}</ul></div>)}
    </div>
  );
};

export default Actors;
