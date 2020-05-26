import React from 'react';
import {parseDate, isExpired, classNames} from "../../functions";
import {ReactComponent as Exclamation} from "../../img/exclamation.svg";
import {ReactComponent as Time} from "../../img/time.svg";

const ToDoTask = (props) => {
  const {id, content, priority, dueDate} = props.task;

  return (
    <tr>
      <td>{id}</td>
      <td>{content}</td>
      <td>{parseDate(dueDate)}</td>
      <td>
        {priority && <Exclamation/>}
        {isExpired(dueDate) && <Time/>}
      </td>
      <td>
        <button onClick={props.removeTask.bind(this, id)}>Usuń</button>
      </td>
    </tr>
  );
}

export default ToDoTask;
