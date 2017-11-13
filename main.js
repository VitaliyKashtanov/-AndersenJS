var taskCall = document.getElementById('task');
taskCall.onclick = function(){
   addTask();
}

function addTask() {
	var taskItem = document.createElement("div"),
		taskBody = document.getElementById("task-body"),
		taskItemP = document.createElement("p"),
		button = document.createElement("button");
		button.innerHTML = 'Delete';
		button.className = 'btn-del';

	var task = document.querySelector("input").value;

	if(task != "") {
		var taskText = document.createTextNode(task);
		var strikedText = false;
	} else {
		alert('Please write your task');
	}

	taskItemP.appendChild(taskText);
	taskItem.appendChild(taskItemP);
	taskItem.appendChild(button);
	taskBody.appendChild(taskItem);

	document.querySelector("input").value = "";
	// task = "";

	taskItemP.onclick = function() {
		strikeText();
	}

	function strikeText() {
		if(strikedText) { 
			taskItemP.style.textDecoration = ""; 
		} else { 
		taskItemP.style.textDecoration = "line-through"; 
		} 
		strikedText = !strikedText;
	}

	button.onclick = function() {
		removeTask();
	}
	
	function removeTask() {
		taskItem.remove();
	}
}