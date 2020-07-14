const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

//해야할 일이 생성되면 toDos에 추가된다.

function filterFn(toDo) {
  return toDo.id === 1; //true인 아이템으로 새 리스트를 만듬.
}
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id); //숫자로 바꾼다
  });
  toDos = cleanToDos;
  saveToDos();
}
function saveToDos() {
  //toDos를 가져와서 로컬에 저장
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "🗑";
  delBtn.classList.add("delete__btn");
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  li.id = newId;
  li.classList.add("li--center");

  console.log(text);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj); //toDos array안에 element 추가
  //push 후에 호출
  saveToDos();
  //local strorage는 string만 저장할수있음 javascirpt data를 저장할수없음
}

function something(toDo) {
  console.log(toDo.text);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); //string을 object로
    parsedToDos.forEach(function (toDo) {
      //array에 있는거 각각 함수적용
      paintToDo(toDo.text); //화면에 표시하기
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
