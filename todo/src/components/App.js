import React, { Component } from 'react';
import Form from './Form'
import ToDoList from './ToDo/ToDoList'
import DoneList from './Done/DoneList'
import {filterTasks} from "../functions";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        content: 'Posprzątać pokój',
        createDate: 1590012300000,
        dueDate: 1590028400000,
        doneDate: 1590023300000,
        priority: false,
      },
      {
        id: 1,
        content: 'Znaleźc pracę',
        createDate: 1590092400000,
        dueDate: 1590093400000,
        doneDate: false,
        priority: true,
      },
      {
        id: 2,
        content: 'Znaleźc pracę',
        createDate: 1590011400000,
        dueDate: 1590098600000,
        doneDate: false,
        priority: true,
      },
      {
        id: 3,
        content: 'Znaleźc pracę',
        createDate: 1590098300000,
        dueDate: 1590028400000,
        doneDate: false,
        priority: true,
      },
      {
        id: 4,
        content: 'Wyrzucić śmieci',
        createDate: 1590048400000,
        dueDate: 1590098400000,
        doneDate: 1590095400000,
        priority: false,
      }
    ]
  }

  handleAddTask = (newTask) => {
    const tasks = [...this.state.tasks],
          maxId = Math.max.apply(null, tasks.map(item => item.id));
    newTask.id = maxId + 1;
    newTask.createDate = Date.parse();
    tasks.push(newTask);
    this.setState({tasks});
  }

  handleRemoveTask = (id) => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks})
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
