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