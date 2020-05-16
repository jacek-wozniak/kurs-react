import React from 'react';

const DoneTask = (props) => {
  const {content} = props.task;

  return (
    <li>{content}</li>
  );
}

export default DoneTask;
