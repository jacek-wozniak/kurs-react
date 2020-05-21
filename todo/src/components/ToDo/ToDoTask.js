import React from 'react';
import {parseDate} from "../../functions";

const ToDoTask = (props) => {
  const {id, content, dueDate} = props.task;

  return (
    <tr>
      <td>{id}</td>
      <td>{content}</td>
      <td>{parseDate(dueDate)}</td>
      <td>
        <button onClick={props.removeTask.bind(this, id)}>Usuń</button>
      </td>
    </tr>
  );
}

export default ToDoTask;
