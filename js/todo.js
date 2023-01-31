const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInputText = toDoForm.querySelector(".todo-form input");
let arrToDo = [];
const TO_DO_LIST_KEY = "to-do-list";

function saveTodo() {
  //JSON.stringify 는
  //어떠한 object나 array등을 string으로 만들어줌
  //문자열로 저장된 것을 JSON.stringify를 이용하면 배열로 저장할 수 있음
  localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(arrToDo));
}

function deleteTodo(event) {
  //해당 TodoList 삭제하기
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
  const deleteTarget = JSON.parse(localStorage.getItem(TO_DO_LIST_KEY));

  //해당 타겟 삭제
  let arrToDo = deleteTarget.filter((todo) => String(todo.id) !== deleteLi.id);

  localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(arrToDo));
  //버튼만 사라지는 것을 볼 수 있다. li 전체를 삭제하려면!? 위의 코드와 같이
  // const deleteLi = event.target;
}

function paintTodo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.todo;
  const button = document.createElement("button");
  button.innerText = "X";
  //삭제 이벤트
  button.addEventListener("click", deleteTodo);

  //
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = {
    id: Date.now(),
    todo: toDoInputText.value,
  };
  //input 창 값 초기화
  toDoInputText.value = "";
  arrToDo.push(newToDo);
  paintTodo(newToDo);
  saveTodo();
  //localStorage는 배열도, String으로 저장해서 여러개 값을 저장할 수 없음 -> 또한 덮어쓰기 형식임
  // localStorage.setItem(TO_DO_LIST_KEY,arrToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TO_DO_LIST_KEY);

//저장된 todolist가 있으면 출력
//forEach의 처음 사용
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  arrToDo = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
