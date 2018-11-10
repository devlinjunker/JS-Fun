class Task {
  constructor(name){
    this.name = name;
    this.complete = false
  }

  getName(){
    return this.name;
  }

  isComplete(){
    return this.complete;
  }

  setComplete(complete){
    this.complete = complete;
  }

}

export default Task;
