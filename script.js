//  There is   parts  for JS codes:
// 1-- todo input text and add it to list
// 2-- for filtering todos
// 3--for complete and deleting todos  
// 4--for html content while reloading
// 5--for Local-Storage



// 1-- todo input text and add it to list
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
todoButton.addEventListener("click",addTodo);
function addTodo(event){
    event.preventDefault();
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    
    saveLocalTodo(todoInput.value);

    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value="";

    const completedButton = document.createElement("button");
    completedButton.innerHTML="<i class='fas fa-check'></i>"
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement("button");
    trashButton.innerHTML="<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");;
    todoDiv.appendChild(trashButton);
    
    
    todoLi.appendChild(todoDiv);
    

}


// 2-- for filtering todos
const filterOption=document.querySelector(".filter-todo");
filterOption.addEventListener("click",filterTodo);
function filterTodo(event){









    const todos=todoLi.childNodes;
    todos.forEach( (todo) => {
        if (event.target.value === "all"){
            todo.style.display= "flex"
            }
        if(event.target.value === "completed"){
            if (todo.classList.contains("completed")){
                todo.style.display= "flex"
                }else{
                    todo.style.display="none"
                }
        }
        if (event.target.value === "uncompleted")
            if (todo.classList.contains("completed")){
                todo.style.display= "none"
                }else{
                    todo.style.display="flex"
                }
    })

}


// 3--for complete and deleting todos  
const todoLi=document.querySelector(".todo-list")
todoLi.addEventListener("click",deleteCompelete);
function deleteCompelete (event){
    const item=event.target
    
    if(item.classList[0] === "trash-btn"){
        const todo=item.parentElement;
        todo.remove();
        removeLocalTodo(todo);
    }
    if(item.classList[0] === "complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed")
    }
}


//4--for html content while reloading
document.addEventListener("DOMContentLoaded",getTodos);
function getTodos(){
    let todos;
    if (localStorage.getItem("todos") === null){
    todos=[]
    } else {
    todos =JSON.parse(localStorage.getItem("todos"));
    };


todos.forEach( (todo)=> {

        const todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");
        

    
        const newTodo=document.createElement("li");
        newTodo.innerText=todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
    
        const completedButton = document.createElement("button");
        completedButton.innerHTML="<i class='fas fa-check'></i>"
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
    
        const trashButton=document.createElement("button");
        trashButton.innerHTML="<i class='fas fa-trash'></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        
        
        todoLi.appendChild(todoDiv);
        
        


    }

    )   
}


//5--for Local-Storage

function saveLocalTodo (todo){
    let todos;
    if( localStorage.getItem("todos") === null){
        todos=[];
    }
        else{
            todos=JSON.parse(localStorage.getItem("todos"))
        }
        todos.push(todo);
        localStorage.setItem("todos",JSON.stringify(todos))
}

function removeLocalTodo(todo){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos=[]
    } else {
        todos =JSON.parse(localStorage.getItem("todos"));
    };
    const todoIndex=todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos))
}

