import React, { Component } from 'react';
import Form from './Form'
import ToDoList from './ToDo/ToDoList'
import DoneList from './Done/DoneList'
import {filterTasks} from "../functions";
import StorageManager from "../class/StorageManager";

class App extends Component {
  state = {
    tasks: []
  }
  storage = new StorageManager('tasks');

  componentDidMount() {

    this.setState({
      tasks: this.storage.content
    })
  }

  handleAddTask = (newTask) => {
    const tasks = [...this.state.tasks],
          maxId = (tasks.length ? Math.max.apply(null, tasks.map(item => item.id)) : 0);
    newTask.id = maxId + 1;
    newTask.createDate = Date.now();
    tasks.push(newTask);
    this.storage.setData(newTask);
    this.setState({tasks});
  }

  handleRemoveTask = (id) => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.storage.removeData(id);
    this.setState({tasks});
  }

  render() {
    const [tasksDone, tasksToDo] = filterTasks(this.state.tasks, task => task.doneDate);

    return (
      <div className="app">
        <h1 className="app__header">Todoapp</h1>
        <Form addTask={this.handleAddTask}/>
        <ToDoList tasks={tasksToDo} removeTask={this.handleRemoveTask}/>
        <DoneList tasks={tasksDone} removeTask={this.handleRemoveTask}/>
      </div>
    );
  }
}

export default App;
