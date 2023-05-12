/** @format */

document.addEventListener("DOMContentLoaded", function () {
  let toDoList = document.getElementById("toDoList");
  let toDoForm = document.getElementById("toDoForm");

  let tasks = localStorage.getItem("tasks");
  if (tasks) {
    toDoList.innerHTML = tasks;
  }

  toDoForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let newToDo = document.createElement("li");
    newToDo.innerText = document.getElementById("addTask").value;

    let rmvBtn = document.createElement("button");
    rmvBtn.innerText = "x";

    toDoList.appendChild(newToDo);
    newToDo.appendChild(rmvBtn);

    localStorage.setItem("tasks", toDoList.innerHTML);

    toDoForm.reset();
  });

  toDoList.addEventListener("click", function (evt) {
    let targetTag = evt.target.tagName.toLowerCase();
    if (targetTag === "li") {
      if (evt.target.style.textDecoration === "line-through") {
        evt.target.style.textDecoration = "none";
      } else {
        evt.target.style.textDecoration = "line-through";
      }
      localStorage.setItem("tasks", toDoList.innerHTML);
    } else if (targetTag === "button") {
      evt.target.parentNode.remove();
      localStorage.setItem("tasks", toDoList.innerHTML);
    }
  });
});
