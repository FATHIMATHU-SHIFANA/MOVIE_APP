import React, { useContext, useState} from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import { BiCameraMovie } from "react-icons/bi";
import { context } from '../App';
const Navbars = () => {
const {searchinp, setsearchinp,searchhide, setsearchhide} = useContext(context)

  const getInput=(e)=>{
   setsearchinp(e.target.value)
  }
  console.log(searchinp);

  const handleSearch=(e)=>{
    e.preventDefault();
  }

  // setsearchhide(false);

  
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary bg-dark ">
      <Container>
        <div style={{display:"flex"}}>
        <BiCameraMovie style={{color:"white",width:"25px", height:"25px", marginTop:"6px", marginRight:"5px"}} />
          <Navbar.Brand href="#home" className='text-light fw-bold'>MOVIE APP</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"> <Link className='movie' to={"/popular"}> Popular Movies </Link></Nav.Link>
            <Nav.Link href="#link"> <Link className='movie' to={"/latest"}> Latest Movies  </Link></Nav.Link>
            <Nav.Link href="#link"> <Link className='movie' to={"/comedy"}> Comedy Movies  </Link></Nav.Link>
            {searchhide===true? null:(
            <div style={{marginLeft:"40px"}}>
            <Form className="d-flex w-100 ms-auto" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={getInput}
              name="title"
            />
            <Button variant="outline-light" type="submit">Search</Button>
          </Form>
            </div>
           )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <div>
     <img style={{width:"100%",height:"652px"}} src="https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg" alt="" />
    </div> */}
    </div>
  )
}
export default Navbars
