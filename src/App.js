import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./component/body/Home";
import Navbar from "./component/header/Navbar";
import Blog from "./component/body/Blog";
import Shop from "./component/body/Shop";
import Login from './component/body/Login';
import Signup from './component/body/Signup';
import Crypto from './component/body/Crypto';
import React, { useEffect, useState } from 'react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alert from './component/body/Alert';
import PrivateRoute from './component/PrivateRoute';
//import store from './store'
import { loadUser } from './Actions/auth';
import { connect } from 'react-redux'
import store from './store'
import Footer from './component/body/Footer';
import CategoryDetail from './component/body/CategoryDetail';
import OrderSummary from './component/body/OrderSummary';
import "semantic-ui-css/semantic.min.css";
import CryptoDetail from './component/body/CryptoDetail';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '50px',
  // you can also just use 'scale'
  transition: transitions.FADE
}

function App(props) {
      
      useEffect(() =>{
        //console.log(props.loadUser())
        store.dispatch(loadUser())
      }, [])
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
        <Navbar />
         <Alert />
        <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/shop">
        <Shop />
      </Route>

      <Route exact path="/shop/:id">
        <Shop />
      </Route>

      <Route exact path="/blog">
        <Blog />
      </Route>

      <Route exact path="/crypto">
        <Crypto />
      </Route>

      <Route exact path="/prod-detail/:id">
        <CategoryDetail />
      </Route>

      <Route exact path="/order-summary">
        <OrderSummary />
      </Route>

      <Route exact path="/crypto-detail">
      <CryptoDetail />
      </Route>

      

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      </Switch>
      <Footer />
        </Router>
      </AlertProvider>
    )
}

const mapStateToProps = (state) => {
  return{
      
  }
}

const mapDispatchToProps = {
  loadUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
