import React from 'react';
import {parseDate, showRemoveIcon} from "../../functions";

const DoneTask = (props) => {
  const {id, content, doneDate} = props.task;

  return (
    <tr>
      <td>{id}</td>
      <td>{content}</td>
      <td>{parseDate(doneDate)}</td>
      <td>
        {showRemoveIcon(() => props.removeTask(id))}
      </td>
    </tr>
  );
}

export default DoneTask;
