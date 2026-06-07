let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function renderTasks(){

    const taskList =
    document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        const li =
        document.createElement("li");

        li.innerHTML = `
            <span
            onclick="toggleTask(${index})"
            class="${task.completed ?
            'completed' : ''}">
            ${task.text}
            </span>

            <button
            class="delete-btn"
            onclick="deleteTask(${index})">
            Delete
            </button>
        `;

        taskList.appendChild(li);

    });
}

function addTask(){

    const input =
    document.getElementById("taskInput");

    const taskText =
    input.value.trim();

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    tasks.push({
        text:taskText,
        completed:false
    });

    input.value = "";

    saveTasks();
    renderTasks();
}

function toggleTask(index){

    tasks[index].completed =
    !tasks[index].completed;

    saveTasks();
    renderTasks();
}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();
    renderTasks();
}

renderTasks();
