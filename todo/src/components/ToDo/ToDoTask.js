import React from 'react';

const ToDoTask = (props) => {
  const {id, content, dueDate} = props.task;

  return (
    <tr>
      <td>{id}</td>
      <td>{content}</td>
      <td>{dueDate}</td>
      <td>
        <button onClick={props.removeTask.bind(this, id)}>Usuń</button>
      </td>
    </tr>
  );
}

export default ToDoTask;
