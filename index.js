
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete? " " : " not "}been completed`);
    },
    set markComplete(val) {
      this.complete = val;
    }
  };
  return task;
};


const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "Make whiny face");                               // task 1
const tasks = [task1, task2];

task1.logState();
task1.markComplete = true;
task1.logState();