document.getElementById("submitButton").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const newTask = document.createElement('li');
    const deleteButton = document.createElement("button");
    const taskList = document.getElementById('taskList');

    newTask.innerText = taskInput;
    deleteButton.className="button";
    deleteButton.innerText="x";

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    deleteButton.addEventListener("click", () => taskList.removeChild(newTask));
    document.getElementById('taskInput').value='';
}

