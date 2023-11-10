// JS Start

document.querySelector("#Add").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Write Your Tasks.");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button class="trash">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll(".trash");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};

// JS End - ASH: AlirezaSharifi
