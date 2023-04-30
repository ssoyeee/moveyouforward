const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //document.queryselector("#todo-form input")
const toDoList = document.getElementById("todo-list");
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1;
const day = today.getDate();


const TODOS_KEY = "todos"

//const toDos = [];
let toDos =[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
   
   // console.log(li.id);
   // console.log(typeof li); if you wanna know the type
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();

}
function paintToDo(newToDo){
    //console.log("i will paint", newToDo);
 
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const curdate = document.createElement("h8");
    curdate.innerText = `created on: ${year}/${month}/${day}`;
    const button = document.createElement("button");
    button.innerText = "🗑️";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(curdate);
    toDoList.appendChild(li);
}     


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value; //<- copying input value to the variable, whatever we do afterward it doesn't matter with this value.  
    //console.log(toDoInput.value);
    toDoInput.value = ""; //empty the input
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
 //   console.log(newToDo, toDoInput.value);
    //console.log(toDoInput.value);

}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos); //just a string

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //console.log(parsedToDos); // just an array
   //parsedToDos.forEach(sayHello);
   //parsedToDos.forEach((item)=>console.log("this is the turn of", item));
   toDos = parsedToDos;
   parsedToDos.forEach(paintToDo); //paintToDo({text:"a", id:1212121})

}

// [1,2,3,4].filter(hotFilter)
// hotFilter(1) = 1
// hotFilter(2) = 2
// hotFilter(3) = 3
// hotFilter(4) = 4

// function hotFilter(item){ //filter function gives you a new array
//     return item !== 3 //return true if item is not equal to 3
// }