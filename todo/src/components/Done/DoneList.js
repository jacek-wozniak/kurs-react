import React from 'react';
import DoneTask from './DoneTask';

const DoneList = (props) => {
  const tasks = props.tasks.map(task => (
    <DoneTask key={task.id} task={task}/>
  ))
  return (

    <section className="section done">
      <h2 className="section__header">Ostatnio zrobione zadania:</h2>
      <ul className="table">
        {tasks}
      </ul>
    </section>
  );
}

export default DoneList;
