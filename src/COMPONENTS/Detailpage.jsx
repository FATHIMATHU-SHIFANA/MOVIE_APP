import React, { useContext, useEffect } from 'react'
import { context } from '../App'
import { imageUrl } from './Url';
const Detailpage = () => {
  const {sample,test,sethide,setshow} = useContext(context);
  console.log(sample);
  console.log(test);
  const fil=test.filter((item)=> (item.id===sample))
  console.log(fil);
  const filtermovie=fil[0]
  useEffect(() => {
    sethide(false);
    setshow(false);
  }, [sethide,setshow])
  
  
  return (
    <div className='main' style={{display:"flex", backgroundColor:"black", height:"708px"}}>
      <img style={{width:"30%" , height:"500px", margin:"30px"}} 
      // src={imageUrl+sample.backdrop_path || imageUrl+sample.poster_path }  
      src={imageUrl+filtermovie.backdrop_path}
      alt="" />

         <div style={{ margin:"20px", width:"700px", marginLeft :"100px", marginRight:"100px", color:"white", textAlign:"center",marginTop:"180px"}}>
         <h1 style={{textAlign:'center', fontFamily:"fantasy"}}>{sample.title || sample.name} {filtermovie.title || filtermovie.name}</h1>
         <h5 style={{fontFamily:"cursive", textAlign:"justify"}}>{sample.overview} {filtermovie.overview}</h5>

         <div style={{display:"flex", fontSize:"17px", fontFamily:"cursive", margin:"40px",marginLeft:"150px"}}>
         <ul style={{listStyleType:"none"}}>
          <li>Id </li>
          <li>Popularity</li>
          <li>Release Date</li>
         </ul>
         <ul style={{listStyleType:"none"}}>
          <li>:</li>
          <li>:</li>
          <li>:</li>
         </ul>
          <ul style={{listStyleType:"none"}}>
          <li>{sample.id} {filtermovie.id}</li>
          <li>{sample.popularity} {filtermovie.popularity}</li>
          <li>{sample.release_date || sample.first_air_date} {filtermovie.release_date || filtermovie.first_air_date}</li>
         </ul>
         </div>
         
         </div>
    </div>
  )
}

export default Detailpage
