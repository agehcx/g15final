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
    startTimeSpan.textContent = 'Start : ' + startTime;
    task.appendChild(startTimeSpan);

    var endTimeSpan = document.createElement('span');
    endTimeSpan.id = 'endTimeSpan'
    endTimeSpan.textContent = 'End : ' + endTime;
    task.appendChild(endTimeSpan);

    // Create start task button
    var startButton = document.createElement('button');
    startButton.className = 'start';
    startButton.textContent = 'Start';
    startButton.onclick = function () {
        var progressBar = document.createElement('div');
        progressBar.className = 'progress-container';

        var progressBarChild = document.createElement('div');
        progressBarChild.id = 'progress-bar';
        progressBar.appendChild(progressBarChild);

        task.appendChild(progressBar);

        // Start countdown
        var duration = (new Date(`2000-01-01 ${endTime}`) - new Date(`2000-01-01 ${startTime}`)) / 1000;
        var progress = 0;
        var interval = 1000; // 1 second interval

        var timer = setInterval(function () {
            progress += interval / (duration * 1000);
            progressBarChild.style.width = `${progress * 100}%`;

            if (progress >= 1) {
                clearInterval(timer);
                progressBarChild.innerHTML = "Task Complete!";
            } else {
                progressBarChild.innerHTML = `${Math.round(progress * 100)}%`;
            }
        }, interval);
    };

    // Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskList.removeChild(task);
    };

    task.appendChild(startButton);
    task.appendChild(deleteButton);
    taskList.appendChild(task);

    // Clear the input
    taskInput.value = '';
    document.getElementById('start').value = '';
    document.getElementById('end').value = '';

}
