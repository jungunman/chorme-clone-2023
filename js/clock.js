const clock = document.querySelector(".clock");

function getClock() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const secondes = String(time.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${secondes}`;
}

getClock();
setInterval(getClock, 1 * 1000);
