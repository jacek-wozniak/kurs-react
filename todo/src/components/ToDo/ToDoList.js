import React from 'react';
import ToDoTask from './ToDoTask';

const ToDoList = (props) => {
  const tasks = props.tasks.map(task => (
    <ToDoTask key={task.id} task={task}/>
  ));
  const tableHeaders = ['ID', 'Zadanie', 'Data'].map(header => (
    <th className>{header}</th>
  ))

  return (
    <section className="section">
      <h2 className="section__header">Zadania do zrobienia:</h2>
      <table className="section__table todo">
        <tr>{tableHeaders}</tr>
        {tasks}
      </table>
    </section>
  );
}

export default ToDoList;
