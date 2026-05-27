const addTaskBtn = document.getElementById("addTaskBtn");

const taskTitle = document.getElementById("taskTitle");

const taskTime = document.getElementById("taskTime");

const taskList = document.getElementById("taskList");

/*
  FETCH TASKS FROM DATABASE
*/

async function fetchTasks() {

  try {

    const response = await fetch("http://localhost:8000/tasks");

    const tasks = await response.json();

    /*
      Clear Existing Tasks
    */

    taskList.innerHTML = "";

    /*
      Display Tasks
    */

    tasks.forEach((task) => {

      const taskDiv = document.createElement("div");

      taskDiv.classList.add("dynamic-task");

      taskDiv.innerHTML = `
      
        <p>${task.title}</p>

        <span>${task.time}</span>

      `;

      taskList.appendChild(taskDiv);

    });

  } catch (error) {

    console.log(error);

  }

}

/*
  ADD TASK
*/

addTaskBtn.addEventListener("click", async () => {

  const title = taskTitle.value.trim();

  const time = taskTime.value;

  /*
    Validation
  */

  if (title === "" || time === "") {

    alert("Please fill all fields");

    return;

  }

  try {

    /*
      SEND TASK TO BACKEND
    */

    await fetch("http://localhost:8000/tasks", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        title,
        time
      })

    });

    /*
      RELOAD TASKS
    */

    fetchTasks();

    /*
      CLEAR INPUTS
    */

    taskTitle.value = "";

    taskTime.value = "";

  } catch (error) {

    console.log(error);

  }

});

/*
  LOAD TASKS ON PAGE LOAD
*/

fetchTasks();