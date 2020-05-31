import * as React from 'react';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import '../styles/Header.css';
import {Route, Switch} from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <Switch>
        <Route path="/" exact render={() => (
          <img src={img1} alt="city"/>
        )}></Route>

        <Route path="/products" render={() => (
          <img src={img2} alt="city"/>
        )}></Route>

        <Route path="/contact" render={() => (
          <img src={img3} alt="city"/>
        )}></Route>

        <Route path="/admin" render={() => (
          <img src={img1} alt="city"/>
        )}></Route>

        <Route render={() => (
          <img src={img2} alt="city"/>
        )}></Route>
      </Switch>
    </header>
  );
};

export default Header;