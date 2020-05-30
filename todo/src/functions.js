import React from 'react';

export function filterTasks(arr, isValid){
  return arr.reduce(([done, todo], currentValue) => {
    return isValid(currentValue) ? [[...done, currentValue], todo] : [done, [...todo, currentValue]];
  }, [[], []])
}

export function parseDate(time) {
  if(!time) return null;
  const date = new Date(time);
  let day = date.getDate(),
      month = date.getMonth()+1,
      year = date.getFullYear();
  if(day<10) day = `0${day}`;
  if(month<10) month = `0${month}`
  return `${day}.${month}.${year}`;
}

export function isExpired(dueDate) {
  return !!dueDate && dueDate < Date.now();
}

export function classNames(arr) {
  const classes = Object.entries(arr)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(' ');
  return classes || null;
}

export function showPriorityIcon() {
  return <span className='icon icon--priority' title="Zadanie priorytetowe"/>;
}

export function showExpiredIcon() {
  return <span className='icon icon--expired' title="Minęła zaplanowana data wykonania"/>;
}

export function showDoneIcon(clickAction = null) {
  return <span className='icon icon--done' title="Wykonaj" onClick={clickAction}/>;
}

export function showRemoveIcon(clickAction = null) {
  return <span className='icon icon--remove' title="Usuń" onClick={clickAction}/>;
}