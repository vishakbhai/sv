// script.js
document.getElementById('cta-button').addEventListener('click', function() {
    // Smoothly scrolls to the section with the ID 'story'
    document.getElementById('story').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// You can also add dynamic text based on the time of day!
const header = document.querySelector('.hero h1');
const hour = new Date().getHours();

if (hour < 12) {
    header.textContent = "Good Morning! The Saga of Sthviryadav & Vishakh";
} else if (hour < 18) {
    header.textContent = "Welcome! The Saga of Sthviryadav & Vishakh";
} else {
    header.textContent = "Evening Adventures! The Saga of Sthviryadav & Vishakh";
}