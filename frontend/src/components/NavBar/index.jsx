import React from 'react';
import './index.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
  const location = useLocation();
  return (
    <Navbar expand="lg" className='navbar-container'>
      <Navbar.Brand href="/" className='brand-name'><h1>Melify</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" activeKey={location.pathname}>
        <Nav.Link as={Link} to='/' eventKey="/">Home</Nav.Link>
        <Nav.Link as={Link} to='/about' eventKey="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/services" eventKey="/services">Services</Nav.Link>
        <Nav.Link as={Link} to="/contact" eventKey="/contact">Contact</Nav.Link>
        </Nav>
        <div className="search-container">
          <Form className='d-flex'>
            <FormControl
              type="text"
              placeholder="Search"
              className="search-input"
              aria-label="Search"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
          </Form>
        </div>
        <div className="user-image-container">
          <FontAwesomeIcon
            icon={faUser}
            className='user-image'
            onClick={() => console.log('user profile')}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
