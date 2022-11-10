const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const form = document.querySelector(".form");
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");
const startBtn = document.querySelector(".btn-start");
const updateBtn = document.querySelector(".btn-update");
const closeBtn = document.querySelector(".btn-close");

const setLaunchInfo = () => {
  const date = "2022-11-15";
  const time = "10:00:00";
  const launchInfo = moment(`${date} ${time}}`);
  return launchInfo;
};

const formatInfo = (info) => {
  let formattedInfo = "0";
  if (info < 10) {
    formattedInfo += info;
    return formattedInfo;
  } else {
    return info;
  }
};

const updateCountdown = (d, h, m, s) => {
  days.innerText = formatInfo(d);
  hours.innerText = formatInfo(h);
  minutes.innerText = formatInfo(m);
  seconds.innerText = formatInfo(s);
};

const displayCountdown = (display) => {
  const main = document.querySelector(".main");
  main.style.display = display;
  const header = document.querySelector(".header-text");
  if (display === "none") {
    header.innerText = "Ci siamo!";
  } else {
    header.innerText = "Stiamo arrivando";
  }
};

const calculate = (launch) => {
  const currentDateTime = moment();
  duration = moment.duration(launch.diff(currentDateTime));
  if (duration < 0) {
    displayCountdown("none");
  }
  const daysRemaining = launch.diff(currentDateTime, "days");
  const hoursRemaining = duration.hours();
  const minutesRemaining = duration.minutes();
  const secondsRemaining = duration.seconds();
  updateCountdown(daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining);
};

const findRemainingTime = () => {
  const localStorageLaunch = localStorage.getItem("launchDate");
  const launch = setLaunchInfo();
  if (localStorageLaunch) {
    calculate(moment(localStorageLaunch));
  } else {
    calculate(launch);
  }
};

const saveLaunch = (launch) => {
  localStorage.setItem("launchDate", launch);
};

const countdownInfo = () => {
  findRemainingTime();
  const info = setInterval(() => {
    if (duration <= 0) {
      clearInterval(info);
    } else {
      findRemainingTime();
    }
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  saveLaunch(setLaunchInfo());
  countdownInfo();
  displayCountdown("flex");
});
