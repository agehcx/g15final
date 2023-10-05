// calen.js

document.addEventListener("DOMContentLoaded", function () {
    const monthButtons = document.querySelectorAll("#month-list button");
    const calendarDays = document.querySelectorAll(".day");
    const selectedDateElement = document.getElementById("selected-date");
    const activityInput = document.getElementById("activity");
    const timeInput = document.getElementById("time");
    const activitiesList = document.getElementById("activities");

    let selectedMonth = "";

    monthButtons.forEach((button) => {
        button.addEventListener("click", function () {
            selectedMonth = this.textContent;
            showCalendar(selectedMonth);
        });
    });

    function showCalendar(month) {
        // Logic to display calendar for the selected month goes here
        // For demonstration, let's assume a function `getDaysInMonth(month)` returns the days in the given month

        // Clear previous calendar days
        calendarDays.forEach((day) => {
            day.textContent = "";
            day.removeEventListener("click", showActivityForm);
        });

        // Get days in the selected month (replace this with your own logic)
        const daysInMonth = getDaysInMonth(month);

        // Update calendar with the days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            calendarDays[i - 1].textContent = i;
            calendarDays[i - 1].addEventListener("click", function () {
                showActivityForm(i, selectedMonth);
            });
        }
    }

    function showActivityForm(day, month) {
        // Logic to show activity form for the selected date goes here
        // For demonstration, update selected date and reset form inputs
        selectedDateElement.textContent = `${month} ${day}`;
        activityInput.value = "";
        timeInput.value = "";
    }

    function addActivity() {
        // Logic to add activity goes here
        const date = selectedDateElement.textContent;
        const activity = activityInput.value;
        const time = timeInput.value;

        // Validate if both activity and time are provided
        if (activity && time) {
            const listItem = document.createElement("li");
            listItem.textContent = `${time}: ${activity}`;
            activitiesList.appendChild(listItem);

            // Clear inputs
            activityInput.value = "";
            timeInput.value = "";
        } else {
            alert("Please provide both activity and time.");
        }
    }

    // Add click event listener to the "Add" button
    const addButton = document.querySelector("#activity-form button");
    addButton.addEventListener("click", addActivity);
});
