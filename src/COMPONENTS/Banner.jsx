import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { imageUrl, popularMovies } from './Url'

const Banner = () => {
  const [popmov, setpopmov] = useState([])
  useEffect(() => {
    axios.get(popularMovies).then((res) => setpopmov(res.data.results))
  }, [])
  console.log(popmov);
  const getRandomObject = () => {
    const randomIndex = Math.floor(Math.random() * popmov.length);
    return popmov[randomIndex];
  };
  const randomObject = getRandomObject();

  return (

    <div style={{ backgroundImage: `url(${imageUrl + randomObject?.backdrop_path})`, height: "652px", backgroundSize: "100% 100%" }}>
      <div style={{ textAlign: "center", color: "white", margin: "auto", padding: "250px" }}>
        <h1>{randomObject?.title}</h1>
        <h6>{randomObject?.overview}</h6>
      </div>
    </div>

  )
}

export default Banner