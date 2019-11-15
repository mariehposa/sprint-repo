import React from "react";
import {JokeStyle} from './JokeStyle';

export default function JokesCard({joke}) {
  return (
      <JokeStyle>
        <p>Joke: {joke.joke}</p>
      </JokeStyle>
    );  
}