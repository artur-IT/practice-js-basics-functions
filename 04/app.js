const counter = 5;
let i = 0;

runTimer = () => {
  const time = new Date().toLocaleTimeString();
  console.log(time, " ", i + 1);
};

const interval_ID = setInterval(() => {
  runTimer();
  i++;
  if (i == counter) {
    clearInterval(interval_ID);
    console.log("Czas minął!");
  }
}, 5000);
