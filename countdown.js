const startBtn = document.getElementById("startBtn");
const dispCount = document.getElementById("dispCount");

startBtn.onclick = function() {
    let seconds = Number(document.getElementById("seconds").value);
    let message = String(document.getElementById("message").value);
    let counter = seconds;

    while(counter >= 0) {
        let current = counter;
        setTimeout(() => {
            if(current > 0) {
                dispCount.textContent = current;
            }
            else {
                dispCount.textContent = message;
            }
        }, (seconds - current) * 1000);
        counter--;
    }
};