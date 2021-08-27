import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Components.css";
import { FaCartArrowDown } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Navbarr = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
    return (
      <>
      
       <Navbar style={{backgroundColor:'teal'}} expand="lg" sticky="top">
  <Container>
    <Navbar.Brand style={{color:'white'}}><img src="logo2.png" width='200px'></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link><Link to="/" className="linkss">Home</Link></Nav.Link>
        <Nav.Link><Link to="/Login" className="linkss">Login</Link></Nav.Link>
                <Nav.Link><Link to="/Register" className="linkss">Register</Link></Nav.Link>
                
      </Nav>
            </Navbar.Collapse>
           
          </Container>
          
          <Nav.Link><Link to="/cart" className="white linkss">{cartCount} <FaCartArrowDown /></Link> </Nav.Link>
  
         

        </Navbar>
      </>
    );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbarr);
