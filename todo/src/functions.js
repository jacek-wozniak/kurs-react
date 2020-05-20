export function filterTasks(arr, isValid){
  return arr.reduce(([done, todo], currentValue) => {
    return isValid(currentValue) ? [[...done, currentValue], todo] : [done, [...todo, currentValue]];
  }, [[], []])
}

export function getHeadersObject(desiredHeaders) {

}