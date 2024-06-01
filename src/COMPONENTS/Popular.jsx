import React, { useEffect, useState } from 'react'
import { popularMovies } from './Url'
import { imageUrl } from './Url'
import axios from 'axios'
import { Card } from 'react-bootstrap'
const Popular = () => {
  const [pmovie, setpmovie] = useState([])
  useEffect(() => {
    axios.get(popularMovies).then((res) => setpmovie(res.data.results))
  }, [])
  console.log(pmovie);
  return (
    <div className='row justify-content-center'>
      {pmovie.map((arg) => {
        return (
          <Card style={{ width: '18rem', margin: "40px", height: "300px", padding: "0px" }}>
            <Card.Img variant="top" src={imageUrl + arg.backdrop_path} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>{arg.title}</Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                {arg.popularity}
              </Card.Text>
              <Card.Text style={{ textAlign: "center" }}>
                {arg.release_date}
              </Card.Text>

            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

export default Popular