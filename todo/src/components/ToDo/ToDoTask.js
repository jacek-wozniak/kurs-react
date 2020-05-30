import React from 'react';
import {parseDate, isExpired, showPriorityIcon, showExpiredIcon, showDoneIcon, showRemoveIcon} from "../../functions";

const ToDoTask = (props) => {
  const {id, content, priority, dueDate} = props.task;

  return (
    <tr>
      <td>{id}</td>
      <td>{content}</td>
      <td>{parseDate(dueDate)}</td>
      <td>
        {priority && showPriorityIcon()}
        {isExpired(dueDate) && showExpiredIcon()}
      </td>
      <td>
        {showDoneIcon(() => props.doTask(id))}
        {showRemoveIcon(() => props.removeTask(id))}
      </td>
    </tr>
  );
}

export default ToDoTask;
