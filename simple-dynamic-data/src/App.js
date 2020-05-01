import React, { Component } from 'react';
import './App.css';

const data = [
  {id:1, title: 'Wiadomość numer 1', body: 'Zawartość wiadomości numer 1 ...'},
  {id:2, title: 'Wiadomość numer 2', body: 'Zawartość wiadomości numer 2 ...'},
]
setInterval(() => {
  const index = data.length+1;
  data.push({id:index, title: 'Wiadomość numer '+index, body: 'Zawartość wiadomości numer '+index+' ...'});
}, 4000)

class App extends Component {
  state = {
    comments: [...data]
  }

  getData = () => {
    if(data.length !== this.state.comments.length) {
      this.setState({
        comments: [...data]
      });
    }
  }

  componentDidMount() {
    if(!this.interval) {
      this.interval = setInterval(this.getData, 2000);
    }
  }

  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <p key={comment.id}>
        <strong>{comment.title}</strong> <br/>
        <span>{comment.body}</span>
      </p>
    ))
    return (
      <div>
        {comments.reverse()}
      </div>
    );
  }
}

export default App;
