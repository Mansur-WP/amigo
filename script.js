// 1. Dynamic Greeting
function updateGreeting() {
    // Get the element where we want to display the greeting
    const greetingElement = document.getElementById('greeting-text');
    
    // Check if the element exists on this page
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greeting;

        if (currentHour < 12) {
            greeting = "Good morning, I'm Mansur 👋";
        } else if (currentHour < 18) {
            greeting = "Good afternoon, I'm Mansur 👋";
        } else {
            greeting = "Good evening, I'm Mansur 👋";
        }

        // Update the text content of the HTML element
        greetingElement.textContent = greeting;
    }
}

// 2. Dark/Light Mode Toggle
function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (toggleButton) {
        // Check if the user previously saved a theme preference in their browser
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            toggleButton.textContent = '☀️'; // Change icon to sun
        }

        // Add a 'click' event listener to the button
        toggleButton.addEventListener('click', function() {
            // Toggle the 'dark-mode' class on the body element
            body.classList.toggle('dark-mode');
            
            // Update the icon and save preference
            if (body.classList.contains('dark-mode')) {
                toggleButton.textContent = '☀️';
                localStorage.setItem('theme', 'dark'); // Save preference
            } else {
                toggleButton.textContent = '🌙';
                localStorage.setItem('theme', 'light'); // Save preference
            }
        });
    }
}

// Run the functions when the script loads
updateGreeting();
setupThemeToggle();
