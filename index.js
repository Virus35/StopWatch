let hours1 = document.querySelector(".hours-1");
let hours2 = document.querySelector(".hours-2");
let minutes1 = document.querySelector(".minutes-1");
let minutes2 = document.querySelector(".minutes-2");
let seconds1 = document.querySelector(".seconds-1");
let seconds2 = document.querySelector(".seconds-2");

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;

const sixNine = (count1, count2, minutes1, minutes2, hours2) => {
  count1 = 0;
  count2 = 0;
  minutes1.innerHTML = count1;
  minutes2.innerHTML = count2;
  hours2.innerHTML = Number(hours2.innerHTML);
  hours2.innerHTML = ++count6;
};

const clear = () => {
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  count6 = 0;
  seconds1.innerHTML = count2;
  seconds2.innerHTML = count1;
  minutes1.innerHTML = count3;
  minutes2.innerHTML = count4;
  hours1.innerHTML = count6;
  hours2.innerHTML = count5;
};

start.addEventListener("click", (e) => {
  let myInterval;

  myInterval = setInterval(() => {
    seconds2.innerHTML = Number(seconds2.innerHTML);
    seconds2.innerHTML = ++count1;
    console.log(seconds2.innerHTML);
    if (count1 > 9) {
      count1 = 0;
      seconds2.innerHTML = count1;
      seconds1.innerHTML = Number(seconds1.innerHTML);
      seconds1.innerHTML = ++count2;
      console.log(count1, count2, seconds1.innerHTML);
      // updateNine(count1,seconds2,seconds1,count2);
    }
    if (count2 == 6 && count1 == 0) {
      sixNine(count1, count2, seconds2, seconds1, minutes2);
    }
    if (count4 > 9) {
      count4 = 0;
      minutes2.innerHTML = count4;
      minutes1.innerHTML = Number(minutes2.innerHTML);
      minutes1.innerHTML = ++count3;
      // updateNine(count4,minutes2,minutes1,count3);
    }
    if (count3 == 6 && count4 == 0) {
      sixNine(count3, count4, minutes1, minutes2, hours2);
    }
    if (count6 > 9) {
      count6 = 0;
      hours2.innerHTML = count6;
      hours1.innerHTML = Number(hours2.innerHTML);
      hours1.innerHTML = ++count5;
      // updateNine(count6,hours2,hours1,count5);
    }
    if (
      count5 == 6 &&
      count6 == 0 &&
      count3 == 6 &&
      count4 == 0 &&
      count2 == 6 &&
      count1 == 0
    ) {
      clear();
    }
    stop.addEventListener("click", (e) => {
      clearInterval(myInterval);
    });
    reset.addEventListener("click", (e) => {
      clear();
    });
  }, 1000);
});
