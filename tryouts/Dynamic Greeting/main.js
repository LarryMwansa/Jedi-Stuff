document.addEventListener("DOMContentLoaded", () => {
    // Redirect to login page if no user is found
    const storedName = localStorage.getItem("userName");
    if (!storedName) {
        window.location.href = "login.html";
        return; // Stop execution
    }

    // Update greeting based on time
    const timeOfDayElement = document.querySelector(".TimeOfDay");
    const currentHour = new Date().getHours();
    let greeting = "Good Morning";

    if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good Afternoon";
    } else if (currentHour >= 18) {
        greeting = "Good Evening";
    }

    timeOfDayElement.textContent = greeting;

    // Display stored user name
    const userNameElement = document.querySelector(".UserName");
    userNameElement.textContent = storedName;

    // Logout functionality
    document.getElementById("logoutButton").addEventListener("click", () => {
        localStorage.removeItem("userName"); // Remove name from localStorage
        window.location.href = "login.html"; // Redirect to login page
    });
});
