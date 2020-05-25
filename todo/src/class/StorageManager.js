let instance = null;

export default class StorageManager {
  constructor(name) {
    if(!instance || instance.name !== name) {
      this.name = name;
      this.content = this.getData(name) || [];
      instance = this;
    } else return instance;
  }

  setData(task) {
    try {
      this.content.push(task);
      localStorage.setItem(this.name, JSON.stringify(this.content));
    } catch(e) {
      console.error(`Something went wrong! \nError: ${e}` )
    }
  }

  removeData(id) {
    try {
      this.content = this.content.filter(item => item.id !== id);
      localStorage.setItem(this.name, JSON.stringify(this.content));
    } catch(e) {
      console.error(`Something went wrong! \nError: ${e}` )
    }
  }

  getData(name) {
    return JSON.parse(localStorage.getItem(this.name));
  }
}