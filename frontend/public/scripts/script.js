function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();
    var startTime = document.getElementById('start-input').value;
    var endTime = document.getElementById('end-input').value;

    if (taskText === '' || startTime == '' || endTime == '') {
        alert("Input cannot be empty!");
        return;
    }

    var taskList = document.getElementById('task-list');
    var task = document.createElement('li');
    task.classList.add('task-container')

    var descriptionSpan = document.createElement('span');
    descriptionSpan.id = 'descriptionSpan';
    descriptionSpan.textContent = taskText;
    task.appendChild(descriptionSpan);

    var startTimeSpan = document.createElement('span');
    startTimeSpan.id = 'startTimeSpan'
    startTimeSpan.textContent = 'Start :' + startTime;
    task.appendChild(startTimeSpan);

    var endTimeSpan = document.createElement('span');
    endTimeSpan.id = 'endTimeSpan'
    endTimeSpan.textContent = 'End :' + endTime;
    task.appendChild(endTimeSpan);

    // Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<button class="delete">Delete</button>'
    deleteButton.onclick = function () {
        taskList.removeChild(task);
    };

    task.appendChild(deleteButton);
    taskList.appendChild(task);

    // Clear the input
    taskInput.value = '';
    document.getElementById('start').value = '';
    document.getElementById('end').value = '';
}
