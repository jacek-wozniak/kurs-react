let instance = null;

export default class CookieManagerClass {
  constructor(name) {
    if(!instance || instance.name !== name) {
      this.name = name;
      this.content = this.getCookie(name);
      instance = this;
    } else return instance;
  }

  setCookie(task) {
    try {
      if(!task) throw new Error('no niestety');
      this.content.push(task);
      const value = JSON.stringify(this.content);
      document.cookie = `${this.name} = ${value}; path=/`;
    } catch(e) {
      console.error(`Something went wrong! \nError: ${e}` )
    }
  }

  getCookie(name) {
    const nameEQ = name + "=",
          ca = document.cookie.split(';');
    for(const item of ca){
      let c = item;
      while (c.charAt(0)===' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return JSON.parse(c.substring(nameEQ.length,c.length));
    }
    return null;
  }
}