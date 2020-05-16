import React, { Component } from 'react';
import Form from './Form'
import ToDoList from './ToDo/ToDoList'
import DoneList from './Done/DoneList'

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
        id: 1,
        content: 'Znaleźc pracę',
        createDate: '10.04.2020',
        dueDate: '14.06.2020',
        doneDate: false,
        priority: true,
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
        content: 'Wyrzucić śmieci',
        createDate: '10.05.2020',
        dueDate: '11.05.2020',
        doneDate: '11.05.2020',
        priority: false,
      }
    ]
  }



  render() {
    const [tasksDone, tasksToDo] = this.filterTasks();

    return (
      <div className="app">
        <h1 className="app__header">Todoapp</h1>
        <Form />
        <ToDoList tasks={tasksToDo}/>
        <DoneList tasks={tasksDone}/>
      </div>
    );
  }
}

export default App;
