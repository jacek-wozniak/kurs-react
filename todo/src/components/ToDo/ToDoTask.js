import React from 'react';
import {parseDate, isExpired, classNames} from "../../functions";

const ToDoTask = (props) => {
  const {id, content, priority, dueDate} = props.task;

  let trClassNames = {
    'tr--priority': priority,
    'tr--expired': isExpired(dueDate)
  }
  trClassNames = classNames(trClassNames);

  return (
    <tr className={trClassNames}>
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
