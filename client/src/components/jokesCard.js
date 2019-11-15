import React from "react";
import {JokeStyle} from './jokeStyle';

export default function JokesCard({joke}) {
  return (
      <JokeStyle>
        <p>Joke: {joke.joke}</p>
      </JokeStyle>
    );  
}