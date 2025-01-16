let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px"
function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "800px"
        
    }else{
        menuList.style.maxHeight = "0px"
    }
    
}



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


document.addEventListener("DOMContentLoaded", () => {
    const subscribers = document.getElementById("subscribers");
    const active = document.getElementById("active");
    const service = document.getElementById("service");

    countAnimation(subscribers, 0, 250, 2000, "k+"); 
    countAnimation(active, 0, 32, 2000, "k+");
    countAnimation(service, 0, 98, 2000, "%");   
});
