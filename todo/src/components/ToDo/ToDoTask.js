import React from 'react';

const ToDoTask = (props) => {
  const {id, content, dueDate} = props.task;

  return (
    <tr>
      <td>{id}</td>
      <td>{content}</td>
      <td>{dueDate}</td>
    </tr>
  );
}

export default ToDoTask;
