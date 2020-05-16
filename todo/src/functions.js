export function filterTasks(){
  const arr = [...this.state.tasks]
  return arr.reduce(([done, todo], currentValue) => {
    if(currentValue.doneDate) {
      return [[...done, currentValue], todo];
    } else {
      return [done, [...todo, currentValue]];
    }
  }, [[], []])
}