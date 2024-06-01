import React, { useContext } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiCameraMovie } from "react-icons/bi";
import { context } from '../App';
const Navbars = () => {
  const { searchinp, setsearchinp, searchhide } = useContext(context)

  const getInput = (e) => {
    setsearchinp(e.target.value)
  }
  console.log(searchinp);

  const handleSearch = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <Navbar expand="lg" className="nav">
        <Container>
          <div className="logo-container">
            <BiCameraMovie className="logo" />
            <Navbar.Brand href="#home" className='text-light fw-bold'>MOVIE APP</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"> <Link className='link' to={"/popular"}> Popular Movies </Link></Nav.Link>
              <Nav.Link href="#link"> <Link className='link' to={"/latest"}> Latest Movies  </Link></Nav.Link>
              <Nav.Link href="#link"> <Link className='link' to={"/comedy"}> Comedy Movies  </Link></Nav.Link>
              {searchhide === true ? null : (
                <div className="search-bar">
                  <Form className="d-flex" onSubmit={handleSearch}>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="search-input"
                      aria-label="Search"
                      onChange={getInput}
                      name="title"
                    />
                  </Form>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default Navbars
