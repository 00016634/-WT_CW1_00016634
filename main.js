// Handling click on the "EXPLORE NOW" button
const exploreBtn = document.querySelector('.hero-btn');
const notificationContainer = document.querySelector('.notification-container');

exploreBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action (e.g., link redirection)

    // Create a notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = 'Thank you for exploring!';

    // Append the notification to the container
    notificationContainer.appendChild(notification);

    // Center the notification
    centerNotification(notification);

    // Remove the notification after a delay (e.g., 3 seconds)
    setTimeout(function() {
        notification.remove();
    }, 3000);
});

// Function to center the notification
function centerNotification(notification) {
    const windowHeight = window.innerHeight;
    const notificationHeight = notification.offsetHeight;

    const topPosition = (windowHeight - notificationHeight) / 2;
    notification.style.top = topPosition + 'px';
}

