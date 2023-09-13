const todo = document.getElementById("todo");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (todo.value === "") {
    alert("ECRIT");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todo.value;
    listContainer.appendChild(li);
  }
  todo.value = "";
}
