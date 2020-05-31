import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header/>
          <main>
            <aside>
              <Navigation/>
            </aside>
            <section className="page">
              <Page/>
            </section>
          </main>
          <footer>
            <Footer/>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
