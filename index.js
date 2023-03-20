// const  audio = document.querySelector(".audio");
function play() {
  let audio = new Audio("./audio/hithead.wav");
  audio.play();
}
function plays() {
  let audios = new Audio("./audio/start.mp3");
  audios.play();
}
let keyLeft = 0;

function add() {
  keyLeft += 1;
  localStorage.setItem("gam", keyLeft);
  play();
}
function inc() {
  keyLeft -= 1;
  localStorage.setItem("gam", keyLeft);
  localStorage.getItem("gam");
}
let keyRight = 0;

function addR() {
  keyRight += 1;
  play();
  localStorage.setItem("gamr", keyRight);
}
function incR() {
  keyRight -= 1;
  localStorage.setItem("gamr", keyRight);
}
document.addEventListener("keydown", (event) => {
  if (keyLeft < 0) {
    keyLeft = 0 + 1 ;
  } else if (keyLeft === 12) {
    alert("Winner Red Team");
    keyLeft = -1;
  }
  if (keyRight <= 0) {
    keyRight = 0;
  }
  if (event.code == "KeyZ") {
    add();
    let scoreleft = (document.querySelector(".table-left").innerHTML =
      localStorage.gam);
    console.log(scoreleft);
  } else if (event.code == "KeyX") {
    inc();
    let scoreleft = (document.querySelector(".table-left").innerHTML =
      localStorage.gam);
    console.log(scoreleft);
  } else if (event.code == "KeyM") {
    addR();
    let scoreRight = (document.querySelector(".table-right").innerHTML =
      keyRight);
    console.log(scoreRight);
  } else if (event.code == "KeyC") {
    addR();
    let scoreRight = (document.querySelector(".table-right").innerHTML =
      keyRight);
    console.log(scoreRight);
  } else if (event.code == "KeyD") {
    incR();
    let scoreRight = (document.querySelector(".table-right").innerHTML =
      keyRight);
    console.log(scoreRight);
  } else if (event.code == "KeyB") {
    add();
    let scoreleft = (document.querySelector(".table-left").innerHTML =
      localStorage.getItem("gam"));
    console.log(scoreleft);
  } else if (event.code == "KeyH") {
    inc();
    let scoreRight = (document.querySelector(".table-left").innerHTML =
      keyRight);
    console.log(scoreRight);
  } else if (event.code == "KeyN") {
    incR();
    let scoreRight = (document.querySelector(".table-right").innerHTML =
      keyRight);
    console.log(scoreRight);
  }
});

let workTime = 1;
let breakTime = 5;
let breakCount = 1;
let seconds = 30;

// display
window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;
};

// start timer
function start() {
  // change button
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";

  // change the time
  seconds = 30;

  let workMinutes = workTime;
  let breakMinutes = 0;

  // let breakCount = 1;

  // countdown
const myInterval = setInterval(timerFunction, 1000); 
  function timerFunction() {
    //change the display
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.querySelector(".round-match").innerHTML = "Round " + breakCount;
    // start
    seconds = seconds - 1;

    if (seconds === 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          // start break
          workMinutes = breakMinutes;
          breakCount++;
          // seconds = 0
        } else {
          // continue work
          workMinutes = workTime;
          breakCount++;
          // seconds = 0
        }
      }
      seconds = 59;
    }
  }
  // start countdown

  const stops =document.querySelector("#reset")
  stops.addEventListener("click", ()=>{
   stop()
   play()
  })

  function stop() {
    clearInterval(myInterval);
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code == "KeyS") {
    start();
    plays()
  }
});
