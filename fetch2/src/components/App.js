import React, { Component } from 'react';
import './App.css';
import Button from './Button'
import Results from './Results'

class App extends Component {
  state = {
    users: [],
    active: false,
    isLoaded: false,
    error: null
  }

  fetchUsers = (numberOfResults = 1, callback) => {
    fetch('https://randomuser.me/api?results='+numberOfResults)
      .then(response => {
        if(response.ok) {
          return response;
        }
        throw Error('Wystąpił błąd ' +response.status)
      })
      .then(response => response.json())
      .then(data => {
        callback(data);
      })
      .catch(error => (
        this.setState({
          error: error.message
        })
      ))
  }

  handleClickRefresh = () => {
    this.setState({
      active: true,
      isLoaded: false,
      error: null
    })
    this.fetchUsers(5, data => {
      this.setState({
        users: data.results,
        isLoaded: true
      })
    });
  }

  handleClickAdd = () => {
    this.setState({
      active: true,
      error: null
    });
    this.fetchUsers(1, (data) => {
      this.setState(prevState => ({
        users: prevState.users.concat(data.results),
        isLoaded: true
      }))
    });
  }

  render() {
    const showResults = (this.state.isLoaded) ? <Results users={this.state.users}/> : <div className="loader"/>;
    return (
      <div className="App">
        <div className="button-panel">
          <Button
            click={this.handleClickRefresh}
            text="Odśwież"
          />
          <Button
            click={this.handleClickAdd}
            text="Dodaj"
          />
        </div>
        {this.state.error && <div className="error">{this.state.error}</div>}
        {this.state.active && showResults}
      </div>
    );
  }
}

export default App;
