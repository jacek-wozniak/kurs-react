let instance = null;

export default class StorageManager {
  constructor(name) {
    if(!instance || instance.name !== name) {
      this.name = name;
      this.content = this.getData() || [];
      instance = this;
    } else return instance;
  }

  addData(task) {
    try {
      this.content.push(task);
      localStorage.setItem(this.name, JSON.stringify(this.content));
    } catch(e) {
      console.error(`Something went wrong! \nError: ${e}` )
    }
  }

  setData(tasks) {
    try {
      this.content = tasks;
      localStorage.setItem(this.name, JSON.stringify(this.content));
    } catch(e) {
      console.error(`Something went wrong! \nError: ${e}` )
    }
  }

  getData() {
    return JSON.parse(localStorage.getItem(this.name));
  }
}