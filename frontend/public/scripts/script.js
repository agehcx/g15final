function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();
    var startTime = document.getElementById('start').value;
    var endTime = document.getElementById('end').value;

    if (taskText === '' || startTime == '' || endTime == '') {
        alert("Input cannot be empty!"); 
        return;
    }

    var taskList = document.getElementById('task-list');
    var li = document.createElement('li');

    var descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = taskText;
    li.appendChild(descriptionSpan);

    var startTimeSpan = document.createElement('span');
    startTimeSpan.textContent = 'Start :' +startTime;
    li.appendChild(startTimeSpan);

    var endTimeSpan = document.createElement('span');
    endTimeSpan.textContent = 'End :' + endTime;
    li.appendChild(endTimeSpan);

    // Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<button class="delete">Delete</button>'
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = '';
    document.getElementById('start').value = '';
    document.getElementById('end').value = '';
}
