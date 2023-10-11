function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();
    var startTime = document.getElementById('start-input').value;
    var endTime = document.getElementById('end-input').value;

    if (taskText === '' || startTime == '' || endTime == '') {
        alert("Input cannot be empty!");
        return;
    } else if(startTime > endTime) {
        alert("Start time must be less or equal than end time. !");
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
        if(startButton.value == 1 ) {
            alert('You already started the timer. You cannot initate it again.');
            return
        }
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
        if (startTime == endTime) {
            progress = 1
            progressBarChild.style.width = '100%';
        }
        var timer = setInterval(function () {
            progress += interval / (duration * 1000);
            progressBarChild.style.width = `${progress * 100}%`;
            
            if (progress >= 1) {
                clearInterval(timer);
                progressBarChild.innerHTML = "Task Complete!";
            } else {
                progressBarChild.innerHTML = `${Math.round(progress * 100)}%`;
            }
            progressBarChild.style.color = 'black'; // more readable
        }, interval);
        startButton.value = '1'
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

    // Sort tasks by Start time
    var tasksArray = Array.from(taskList.children);
    tasksArray.sort(function (a, b) {
        var startTimeA = a.querySelector('#startTimeSpan').textContent.split(' ')[2];
        var startTimeB = b.querySelector('#startTimeSpan').textContent.split(' ')[2];
        return startTimeA.localeCompare(startTimeB);
    });

    // Clear task-list and re append tasks
    taskList.innerHTML = '';
    tasksArray.forEach(function (taskElement) {
        taskList.appendChild(taskElement);
    });

    // Clear the input
    taskInput.value = '';
    document.getElementById('start-input').value = '';
    document.getElementById('end-input').value = '';
}
