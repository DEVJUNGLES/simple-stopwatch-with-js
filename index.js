const display = document.querySelector("#display");
const startBtn = document.querySelector("#startBtn");
const PauseBtn = document.querySelector("#PauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let timeElapsed = 0;
let currentTime = 0;
let paused = true;
let timeInterval;
let hrs = 0;
let min = 0;
let sec = 0;

//
// function to calculate/updateTime-
const updateTime = () => {
  timeElapsed = Date.now() - startTime;
  sec = Math.floor((timeElapsed / 1000) % 60);
  min = Math.floor((timeElapsed / (1000 * 60)) % 60);
  hrs = Math.floor((timeElapsed / (1000 * 60 * 60)) % 60);
  const adjust = (unit) => {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  };
  sec = adjust(sec);
  hrs = adjust(hrs);
  min = adjust(min);

  display.textContent = `${hrs} ${min} ${sec}`;
};

// the start button

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - timeElapsed;
    timeInterval = setInterval(updateTime, 1000);
  }
});

// the pause button

PauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    startTime = Date.now() - timeElapsed;
    clearInterval(timeInterval);
  }
});

// the reset button

resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(timeInterval);
  startTime = 0;
  timeElapsed = 0;
  currentTime = 0;
  hrs = 0;
  min = 0;
  sec = 0;
  display.textContent = "00:00:00";
});
