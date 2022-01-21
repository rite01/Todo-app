// Selector

// create events -----

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

// Event Listner '' 

// over first Event Listner 
todoButton.addEventListener("click", addTodo);

// event create for remove list
todoList.addEventListener("click", deleteCheck);


// Functions

function addTodo(event){
    // Prevent form from submitting
    event.preventDefault();
  
    let nanval = todoInput.value; // user input list 'task'
    
    if (!nanval){
        alert("plese write");
        return;
    }



    // Todo div // create div 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create LI 'list'
   
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; // user input list 'task'

    newTodo.classList.add('todo-item');
    console.log(newTodo)

    // inherit list into div "perent 'div' and child 'list' "
    todoDiv.appendChild(newTodo);


    // button "complete, remove, edit"
   
   
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");

    todoDiv.appendChild(completedButton);


    // //check Edit 'Edit' button
    // const editButton = document.createElement('button');
    // editButton.innerHTML = '<i class="far fa-edit"></i>';
    // editButton.classList.add('edit-btn');

    // todoDiv.appendChild(editButton);


    //check trash 'delete' button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("delete-btn");

    todoDiv.appendChild(trashButton);

    // Append to List 
    todoList.appendChild(todoDiv);

    // clear input value 
    todoInput.value = "";
 
};

// fuction for 2nd event ----

function deleteCheck(e){
    // console.log(e.target);
    const item = e.target;

    if (item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall")
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
        // alert('delete task')-----------
    }

    // for complete
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        // alert('complete task')-----------
        // console.log(todo)
    }

    // for edit btn
    
    /*

    write your logic for edit button--------------------

    */

}





// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo) {
//       switch (e.target.value) {
//         case "all":
//             alert("hello")
//             todo.style.display = "flex";
//             break;
//         case "completed":

//             if (todo.classList.contains("completed")) {
//                 todo.style.display = "flex";
//             } else {
//                 todo.style.display = "none";
//             }
//           break;
//         case "uncompleted":
//             if (!todo.classList.contains("completed")) {
//                 todo.style.display = "flex";
//             } else {
//                 todo.style.display = "none";
//             }
//       }
//     });
//   }
  
