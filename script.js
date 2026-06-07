let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

document
.getElementById("taskInput")
.addEventListener("keypress",
function(event){

    if(event.key === "Enter"){
        addTask();
    }

});

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

function addTask(){

    const input =
    document.getElementById(
    "taskInput"
    );

    const text =
    input.value.trim();

    if(text === ""){

        alert(
        "Please enter a task"
        );

        return;
    }

    tasks.push({

        text:text,

        completed:false,

        date:new Date()
        .toLocaleString()

    });

    input.value = "";

    saveTasks();

    renderTasks();

}

function renderTasks(){

    const taskList =
    document.getElementById(
    "taskList"
    );

    taskList.innerHTML = "";

    tasks.forEach(
    (task,index)=>{

        const li =
        document.createElement(
        "li"
        );

        li.innerHTML = `

        <div class="task-info">

            <div
            class="task-text
            ${task.completed ?
            "completed" : ""}"

            onclick=
            "toggleTask(${index})">

            ${task.text}

            </div>

            <div class="date">

            ${task.date}

            </div>

        </div>

        <button
        class="delete-btn"

        onclick=
        "deleteTask(${index})">

        Delete

        </button>

        `;

        taskList.appendChild(li);

    });

    document
    .getElementById(
    "taskCount"
    )
    .innerText =
    `Total Tasks: ${tasks.length}`;

}

function toggleTask(index){

    tasks[index]
    .completed =
    !tasks[index]
    .completed;

    saveTasks();

    renderTasks();

}

function deleteTask(index){

    tasks.splice(
    index,
    1
    );

    saveTasks();

    renderTasks();

}

function clearTasks(){

    if(
    confirm(
    "Delete all tasks?"
    )
    ){

        tasks = [];

        saveTasks();

        renderTasks();

    }

}

renderTasks();
