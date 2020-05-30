import React, { Component } from 'react';
import ToDoTask from './ToDoTask';

const ToDoList = props => {
  const tasks = props.tasks.map(task => (
    <ToDoTask
      key={task.id}
      task={task}
      removeTask={props.removeTask}
      doTask={props.doTask}
    />
  ));
  
  return (
    <section className="section todo">
      <h2
        className="section__header"
        onClick={() => props.toggleTab('todo')}
      >
        Zadania do zrobienia:
      </h2>
      <table
        className={'table' + (!props.active ? ' hidden' : '' )}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Zadanie</th>
            <th>Zaplanowana data</th>
            <th>Informacje</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {tasks}
        </tbody>
      </table>
    </section>
  );
}

export default ToDoList;
