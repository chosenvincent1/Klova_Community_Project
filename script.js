document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});
// Function for counting animation
function countAnimation(target, start, end, duration, suffix = "") {
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const increment = end > start ? 1 : -1;

    const timer = setInterval(() => {
        current += increment;
        target.textContent = current + suffix;
        if (current === end) clearInterval(timer);
    }, stepTime);
}

// Wait until the DOM content loads
document.addEventListener("DOMContentLoaded", () => {
    const subscribers = document.getElementById("subscribers");
    const active = document.getElementById("active");
    const service = document.getElementById("service");

    // Call the counting function
    countAnimation(subscribers, 0, 250, 2000, "k+"); // Count to 250k+
    countAnimation(active, 0, 32, 2000, "k+");       // Count to 32k+
    countAnimation(service, 0, 98, 2000, "%");       // Count to 98%
});
