import React, { useEffect, useState } from 'react'
import { comedyMovies } from './Url'
import { imageUrl } from './Url'
import axios from 'axios'
import { Card } from 'react-bootstrap'
const Comedy = () => {
  const [cmovie, setcmovie] = useState([])
  useEffect(() => {
    axios.get(comedyMovies).then((res)=> setcmovie(res.data.results))
  }, [])
  console.log(cmovie);
  return (
    <div className='row justify-content-center'>
      
        {cmovie.map((arg)=>{
          return(
          
          <Card style={{margin:"40px",height:"350px",width:"18rem",padding:"0px"}}>
           <Card.Img variant="top" src={imageUrl+arg.backdrop_path} />
           <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{arg.name}</Card.Title>
          <Card.Text style={{textAlign:"center"}}>
          {arg.popularity}
          </Card.Text>
          <Card.Text style={{textAlign:"center"}}>
          {arg.first_air_date}
          </Card.Text>
          </Card.Body>
          </Card>
          )
        })}
        
    </div>
  )
}

export default Comedy