/** @format */
$(document).ready(function () {
  if (localStorage.getItem("tasks")) {
    JSON.parse(localStorage.getItem("tasks")).forEach((task) => {
      addItem(task);
    });
  }
  function addItem() {
    $("#toDoList").append(
      $("<li>").text($("#addTask").val()).append($("<button>").text("x"))
    );
  }
  function updateLocalStorage() {
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        Array.from($("#toDoList li")).map((item) => $(item).text().trim())
      )
    );
  }
  $(document).on("click", "#toDoList li", function () {
    $(this).toggleClass("completed");
    updateLocalStorage();
  });
  $(document).on("click", "#toDoList button", function () {
    $(this).parent().remove();
    updateLocalStorage();
  });
  $(document).on("submit", "#toDoForm", function (evt) {
    evt.preventDefault();
    addItem();
    updateLocalStorage();
    this.reset();
  });
});
