import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onload = () => {
      if(xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        this.setState({users})
      }
    }
    xhr.send()
  }

  render() {
    const users = this.state.users.map(user => (
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.address.city}</p>
      </div>
    ))
    return (
      <div className="list">
        {users}
      </div>
    );
  }
}

export default App;
