const nameValue = "Wintana Girma";
const jobValue = "Frontend Developer";

function type(id, text, delay) {
    const el = document.getElementById(id);
    let i = 0;
    setTimeout(() => {
        const interval = setInterval(() => {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }, delay);
}
window.onload = () => {
    type('typewriter-name', nameValue, 500);
    type('typewriter-job', jobValue, 2000);
};