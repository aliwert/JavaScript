//Elementleri seçmek
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");
let todos=[];
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    secondCardBody.addEventListener("click",removeTodoFromUI);
    clearButton.addEventListener("click",check);
    filterInput.addEventListener("keyup",filteredTodoList);
}

function filteredTodoList(e){
    const filterValue = e.target.value.toLowerCase();
    const todos = document.querySelectorAll(".list-group-item");
    todos.forEach(function(todo){
        if(todo.textContent.toLowerCase().includes(filterValue)){
            todo.setAttribute("style","display : block");
        }else{
            todo.setAttribute("style","display : none !important");
        }
    });
}


function check(e){
    if(confirm("silmek istediğinize emin misiniz")){
        todoList.innerHTML="";
        todos=[];
        localStorage.setItem("todos",JSON.stringify(todos));
        showAlert("success","Todo listesi silindi");
    }
}
function pageLoaded(e){
    getTodosFromStorage();
}

function getTodosFromStorage(){
    checkTodoListFromStorage();
    if(todos.length>0){
        todos.forEach(function(todo){
            addTodoToUI(todo);
        });
    }
   
}

function removeTodoFromUI(e){
    const removeTodo = e.target.parentElement.parentElement;
  if(e.target.className=="fa fa-remove"){
    removeTodoFromStorage(removeTodo.textContent);
    removeTodo.remove();
  }
}

function removeTodoFromStorage(removeTodo){
    checkTodoListFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo.trim()==todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}


function addTodo(e) {
    const newTodo = addInput.value;
    console.log(newTodo);
    if (newTodo === null || newTodo=="") {
        showAlert("danger","Lütfen boş bırakmayınız");
    } else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
    }
    e.preventDefault();
}



function addTodoToUI(newTodo) {
    /*
    <li class="list-group-item d-flex justify-content-between">Todo 1
         <a href="#" class="delete-item">
             <i class="fa fa-remove"></i>
         </a>
     </li>
   */
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;


    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";


    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

function addTodoToStorage(newTodo){
    checkTodoListFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodoListFromStorage(){
    todos = localStorage.getItem("todos");
    if(todos===null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {
    // <div class="alert alert-danger" role="alert">
    //     This is a danger alert—check it out!
    // </div>

    const div = document.createElement("div");
    div.className=`alert alert-${type} mt-4`;
    div.textContent = message;
    firstCardBody.appendChild(div);

    setTimeout(() => {
        firstCardBody.removeChild(firstCardBody.lastElementChild);
    }, 2000);
}



try {
    
} catch (error) {
    
}

do {
    
} while (condition);