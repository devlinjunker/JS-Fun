import Task from "./task.js"
import readline from "readline";

function displayTasks(tasks){
  var i = 1;
  var str = ""
  for(var idx in tasks){
    str+=(tasks[idx].isComplete() ? "[x]" : "[ ] ")+(i++)+") ";
    str+=tasks[idx].getName()+"\n";
  }
  return str;
}

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

var loop = function(tasks) {
  rl.question("What would you like to do?\n"+
    " q = Exit\n n = New Task\n"+
    " v = show Tasks\n t = toggle task\n"+
    "> ", (line) => {

    var input = line.trim();
    switch(input){
    case "q":
      rl.close();
      break;
    case "n":
      rl.clea
      rl.question("[Enter Task Name]\n", (ans) =>{
        tasks.push(new Task(ans));
        loop(tasks);
      });
      break;
    case "t":
      rl.question("Which task?\n"+displayTasks(tasks)+"\n", (ans) => {
          var idx = parseInt(ans.trim())-1;
          if(tasks[idx] != undefined){
              var task = tasks[idx];
              task.setComplete(!task.isComplete())
          }
          loop(tasks);
      });
      break;
    case "v":
      rl.write(displayTasks(tasks)+"\n");
      loop(tasks);
      break;
    default:
      loop(tasks);
    }
  });
}

var run = function(tasks){
  rl.write("Welcome to the Task Manager: \n");
  loop(tasks);

}

export default { loop, run };
