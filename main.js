const watch = document.getElementById('timer');
let startTime = 0;
let timer;

function start() {
    startTime = Date.now();
    timer = setInterval(updateTime, 50);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    watch.textContent = '00:00:00:00';
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const hr = Math.floor(elapsedTime / 3600);
    const min = Math.floor((elapsedTime % 3600) / 60);
    const sec = elapsedTime % 60;
    const ms = Math.floor((currentTime%1000)/10);
    watch.textContent = `${pad(hr,'0')}:${pad(min,'0')}:${pad(sec,'0')}:${pad(ms,'0')}`;
}

function pad(value,zeros) {
    return value.toString().padStart(2, zeros);
}
