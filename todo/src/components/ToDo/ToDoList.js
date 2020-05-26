import React, { Component } from 'react';
import ToDoTask from './ToDoTask';
import {getHeadersObject} from "../../functions";

class ToDoList extends Component {
  state = {
    headers: [
      {
        propertyName: 'id',
        showName: 'ID',
      },
      {
        propertyName: 'content',
        showName: 'Zadanie',
      },
      {
        propertyName: 'dueDate',
        showName: 'Data',
      },
      {
        propertyName: 'info',
        showName: 'Informacje',
      },
      {
        propertyName: 'actions',
        showName: 'Akcje'
      }
    ]
  }

  render() {
    const tasks = this.props.tasks.map(task => (
      <ToDoTask key={task.id} task={task} removeTask={this.props.removeTask}/>
    ));
    const tableHeaders = this.state.headers.map(header => (
      <th
        key={header.propertyName}
        className={header.propertyName || false}>{header.showName}</th>
    ))

    return (
      <section className="section todo">
        <h2 className="section__header">Zadania do zrobienia:</h2>
        <table className="table">
          <thead>
            <tr>{tableHeaders}</tr>
          </thead>
          <tbody>
            {tasks}
          </tbody>
        </table>
      </section>
    );
  }
}

export default ToDoList;
