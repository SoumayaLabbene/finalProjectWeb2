import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbarr";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import Login from "./components/Login";
import Register from "./components/Register";
import Carousell from "./components/Carousell";
import Footer from "./components/Footer";

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
       
          <Route exact path="/" component={Products}>
            <Carousell></Carousell>
            <br></br>
            <h1>Our Products</h1>
            <Products></Products>
            <Footer></Footer>
            </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
          
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
