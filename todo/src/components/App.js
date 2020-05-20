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
        createDate: '12.05.2020',
        dueDate: '14.05.2020',
        doneDate: '13.05.2020',
        priority: false,
      },
      {
        id: 1,
        content: 'Znaleźc pracę',
        createDate: '10.04.2020',
        dueDate: '14.06.2020',
        doneDate: false,
        priority: true,
      },
      {
        id: 2,
        content: 'Znaleźc pracę',
        createDate: '10.04.2020',
        dueDate: '14.06.2020',
        doneDate: false,
        priority: true,
      },
      {
        id: 3,
        content: 'Znaleźc pracę',
        createDate: '10.04.2020',
        dueDate: '14.06.2020',
        doneDate: false,
        priority: true,
      },
      {
        id: 4,
        content: 'Wyrzucić śmieci',
        createDate: '10.05.2020',
        dueDate: '11.05.2020',
        doneDate: '11.05.2020',
        priority: false,
      }
    ]
  }

  handleAddTask = (newTask) => {
    const tasks = [...this.state.tasks];
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
