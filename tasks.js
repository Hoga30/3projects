// create an array named task 
let tasks=[]
//  functions to add tasks with due dates to the schedule
const addtasks=(title,description,duedate)=>
{
    //object of task
    const  task={
title:title,
description:description,
duedate:duedate
    }
    // task will be added to tasks array
    tasks.push(task)
}
// calling addtasks function with their arguments
addtasks('practice', 'we need quick learners', '2024-01-15')
addtasks('selection', 'you have to meet the requirement', '2024-04-05')
console.log(... tasks)
//function to display tasks sorted by their due dates.
const tasksortedbyduedate=()=>{
tasks.sort((x,y) =>{ return x.duedate-y.duedate;});
// display tasks sorted by their due date
tasks.forEach(task => {
    console.log(`Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}`);
});
}
//calling tasksorteduedate function
console.log(tasksortedbyduedate())
//
// Function to update task details or mark tasks as completed
function updateTask(taskTitle, updatedTitle, updatedDescription, updatedDueDate, completed) {
    // Find the task with the given title
    const taskIndex = tasks.findIndex(task => task.title === taskTitle);

    if (taskIndex !== -1) {
        // Update task details if provided
        if (updatedTitle) tasks[taskIndex].title = updatedTitle;
        if (updatedDescription) tasks[taskIndex].description = updatedDescription;
        if (updatedDueDate) tasks[taskIndex].dueDate = updatedDueDate;

        // Mark task as completed if requested
        if (completed !== undefined) tasks[taskIndex].completed = completed;

        console.log('Task updated:', tasks[taskIndex]);
    } else {
        console.log('Task not found.');
    }
}

// Example usage
addtasks('practice', 'we need quick learners', '2024-01-15');
addtasks('selection', 'you have to meet the requirement', '2024-04-05');

// Update task details
updateTask('Complete project', 'Complete project by tomorrow', null, '2024-03-01', false);

// Mark task as completed
updateTask('selection', null, null, null, true);
// Function to remove a task from the scheduler
function removeTask(taskTitle) {
    // Find the index of the task with the given title
    const taskIndex = tasks.findIndex(task => task.title === taskTitle);

    if (taskIndex !== -1) {
        // Remove the task from the tasks array
        tasks.splice(taskIndex, 1);
        console.log('Task removed:', taskTitle);
    } else {
        console.log('Task not found.');
    }
}

// Example usage
addtasks(' practice', 'we need quick learners', '2024-01-15');
addtasks('Performing', 'audience must enjoy', '2024-06-09');

// Remove a task
removeTask('practice');
