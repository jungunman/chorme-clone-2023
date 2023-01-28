const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInputText = toDoForm.querySelector(".todo-form input");
let arrToDo = [];
const TO_DO_LIST_KEY = "to-do-list"; 


function paintTodo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInputText.value;
    //input 창 값 초기화
    toDoInputText.value=""
    paintTodo(newToDo);


    //localStorage는 배열도, String으로 저장해서 여러개 값을 저장할 수 없음 -> 또한 덮어쓰기 형식임
    // localStorage.setItem(TO_DO_LIST_KEY,arrToDo);

}


toDoForm.addEventListener("submit",handleToDoSubmit);