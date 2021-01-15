
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete? " " : " not "}been completed`);
    },
    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
};


const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "Make whiny face");                               // task 1
const tasks = [task1, task2];

task1.logState();
task1.markComplete();
task1.logState();