import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'
import { Button, Card } from 'react-bootstrap'
import { imageUrl } from './Url'
import { Link } from 'react-router-dom'
import { context } from '../App'


const Movies = ({pop}) => {
  const {setsample,settest,sethide,searchinp,setshow,searchhide, setsearchhide} = useContext(context)
  const [movie, setmovie] = useState([])
 useEffect(() => {
  axios.get(pop).then((res)=> setmovie(res.data.results))
  sethide(true);
  setshow(false);
  setsearchhide(false);
 }, [pop,sethide,setshow])
//  const click =(arg) =>{
//   // console.log(arg);
//   setsample(arg);
//  }  
const click =(arg) =>{
  // console.log(arg);
  setsample(arg);
  settest(movie);
 }  

const filteredMovie = movie.filter((item) => (item.title || item.name).toLowerCase().includes(searchinp));
console.log(filteredMovie); 
  return (
    <div className='row justify-content-center class'>
          {(searchinp.length > 0 ? filteredMovie : movie).map((arg)=>{
            return(
           <Card style={{ width: '18rem', margin:"40px", height:"400px", padding:"0px",background:"transparent" ,border:"none"}}>
           <Card.Img variant="top" src={imageUrl+arg.backdrop_path || imageUrl+arg.poster_path} />
           <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{arg.title  || arg.name}</Card.Title>
          <Card.Text style={{textAlign:"center"}}>
          {arg.popularity}
          </Card.Text>
          <Card.Text style={{textAlign:"center"}}>
          {arg.release_date} {arg.first_air_date}
          </Card.Text>
          <Link to={"/detailpage"}>
            <div style={{textAlign:"center"}}>
          {/* <Button onClick={()=>click(arg)}>Click Here</Button> */}
          <Button onClick={()=>click(arg.id)}>Click Here</Button>
          </div>
          </Link>
          </Card.Body>
          </Card>
        )
          })}
           
          
    </div>
  )
}

export default Movies

