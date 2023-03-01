const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

//dark mode 
const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;

darkModeBtn.addEventListener("click", function() {
	body.classList.toggle("dark-mode");
});


// Create a new task item and add it to the list
function createTask() {
	const newTask = document.createElement("li");
	newTask.className = "task";
	newTask.innerHTML = newTaskInput.value;
	
	const deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	deleteButton.className = "delete-button";
	deleteButton.addEventListener("click", deleteTask);
	newTask.appendChild(deleteButton);

	const completeButton = document.createElement("button");
	completeButton.innerHTML = "Done";
	completeButton.className = "complete-button";
	completeButton.addEventListener("click", completeTask);
	newTask.appendChild(completeButton);
	
	taskList.appendChild(newTask);
	newTaskInput.value = "";
}

// Delete a task item from the list
function deleteTask(event) {
	const task = event.target.parentNode;
	taskList.removeChild(task);
}

// Mark a task as completed
function completeTask(event) {
	const task = event.target.parentNode;
	task.classList.add("completed");
}

// Add a new task when the "Add" button is clicked
addTaskButton.addEventListener("click", createTask);

// Add a new task when the "Enter" key is pressed in the input field
newTaskInput.addEventListener("keypress", function(event) {
	if (event.keyCode === 13) {
		createTask();
	}
});
