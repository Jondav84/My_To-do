/** @format */
$(document).ready(function () {
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

    $("#toDoList").append(
      $("<li>")
        .text($("#addTask").val())
        .append(
          $("<button>")
            .text("x")
            .on("click", function () {
              $(this).parent().remove();
              updateLocalStorage();
            })
        )
    );

    updateLocalStorage();
    this.reset();
  });

  function updateLocalStorage() {
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        Array.from($("#toDoList li")).map((item) => $(item).text().trim())
      )
    );
  }

  if (localStorage.getItem("tasks")) {
    JSON.parse(localStorage.getItem("tasks")).forEach((task) => {
      $("#toDoList").append(
        $("<li>")
          .text(task)
          .append(
            $("<button>")
              .text("x")
              .on("click", function () {
                $(this).parent().remove();
                updateLocalStorage();
              })
          )
      );
    });
  }
});
