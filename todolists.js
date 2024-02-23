const todolist = {
  categories:[],
  tasks:[]
}
//adding different categories
addingCategory = (categoryName) =>{
    let category ={
        name:categoryName,
        task:[]
    }
    todolist.categories.push(category);
}
//adding categories by calling addcategory
addingCategory('dayworking work');
addingCategory('weekend work');

//adding different tasks
const addingTasks = (categoryName,taskName) =>{
    let category = todolist.categories.find(category => category.name === categoryName);
    if(category){
        let newTask={
            name :taskName,
            completiness :false
        }
        todolist.tasks.push(newTask);
        category.task.push(newTask);
    }
    else{
        console.log('invalid category!')
    }
};
// adding tasks to their corresponding tasks
addingTasks('dayworking work','studying');
addingTasks('weekend work','sleeping');
addingTasks('dayworking work','practicing');
addingTasks('weekend work','cleaning');
addingTasks('dayworking work','jogging');
addingTasks('weekend work','shopping');

//displaying task with corresponding categories
const arrangeTaskByCategory = () =>{
    todolist.categories.forEach(category => {
        console.log(`${category.name}:`);
        category.task.forEach(task =>{
            console.log(`${task.name}`);
        });
        
    });
};
// mark completed or not
const completed = (taskName) =>{
    const task = todolist.tasks.find(task => task.name === taskName);
}
arrangeTaskByCategory();

// displaying completed or not completed
const markAsCompleted = (taskName,completiness) =>{
    task.completed = !task.completed;
    addingTasks();
  }
  markAsCompleted();
