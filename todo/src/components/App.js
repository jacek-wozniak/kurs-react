import React, { Component } from 'react';
import Form from './Form'
import ToDoList from './ToDo/ToDoList'
import DoneList from './Done/DoneList'
import {filterTasks} from "../functions";
import StorageManager from "../class/StorageManager";

class App extends Component {
  state = {
    tasks: [],
    activeTabs: {
      form: false,
      todo: true,
      done: true
    }
  }
  storage = new StorageManager('tasks');

  componentDidMount() {
    this.setState({
      tasks: this.storage.content
    })
  }

  handleAddTask = newTask => {
    const tasks = [...this.state.tasks],
          maxId = (tasks.length ? Math.max.apply(null, tasks.map(item => item.id)) : 0);
    newTask.id = maxId + 1;
    newTask.createDate = Date.now();
    tasks.push(newTask);
    this.storage.addData(newTask);
    this.setState({tasks});
  }

  handleRemoveTask = id => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.storage.setData(tasks);
    this.setState({tasks});
  }

  handleDoTask = id => {
    const tasks = this.state.tasks.map(task => {
      if(task.id !== id) return task;
      else {
        task.doneDate = Date.now();
        return task;
      }
    });
    this.storage.setData(tasks);
    this.setState({tasks});
  }

  handleToggleTabActive = tab => {
    const newActiveTabs = {...this.state.activeTabs};
    newActiveTabs[tab] = !newActiveTabs[tab];
    this.setState({
      activeTabs: newActiveTabs
    })
  }

  render() {
    const [tasksDone, tasksToDo] = filterTasks(this.state.tasks, task => task.doneDate);

    return (
      <div className="app">
        <h1 className="app__header">Todoapp</h1>
        <Form
          addTask={this.handleAddTask}
          toggleTab={this.handleToggleTabActive}
          active={this.state.activeTabs.form}
        />
        <ToDoList
          tasks={tasksToDo}
          removeTask={this.handleRemoveTask}
          doTask={this.handleDoTask}
          toggleTab={this.handleToggleTabActive}
          active={this.state.activeTabs.todo}
        />
        <DoneList
          tasks={tasksDone}
          removeTask={this.handleRemoveTask}
          doTask={this.handleDoTask}
          toggleTab={this.handleToggleTabActive}
          active={this.state.activeTabs.done}
        />
      </div>
    );
  }
}

export default App;
