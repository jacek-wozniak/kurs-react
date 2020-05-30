import React from 'react';
import DoneTask from './DoneTask';
import ToDoTask from "../ToDo/ToDoTask";

const DoneList = (props) => {
  const tasks = props.tasks.map(task => (
    <DoneTask
      key={task.id}
      task={task}
      removeTask={props.removeTask}
    />
  ))
  return (
    <section className="section todo">
      <h2
        className="section__header"
        onClick={() => props.toggleTab('done')}
      >
        Ostatnio zrobione zadania:
      </h2>
      <table
        className={'table' + (!props.active ? ' hidden' : '' )}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Zadanie</th>
            <th>Data wykonania</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {tasks}
        </tbody>
      </table>
    </section>
  );
}

export default DoneList;
