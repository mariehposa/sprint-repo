import React, { useState, useEffect } from "react";
import AxiosAuth from '../axios/AxiosAuth';
import JokesCard from './jokesCard'

export default function Jokes () {
    const [data, setData] = useState([])

    useEffect(() => {
        AxiosAuth().get('http://localhost:3300/api/jokes')
          .then(res => {
            setData(res.data);
            console.log(res.data)
          })
          .catch(err => {
            // console.log(err)
          })
      }, [])
    
    return (
        <div>
            {
                data.map(joke => <JokesCard key={joke.id} joke={joke}/>)
            }
        </div>
    );
}