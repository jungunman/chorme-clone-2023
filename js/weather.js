const API_KEY = "fbe8e8c502f1a03752d5096da4e45d4f";
/**위치를 찾았을 때 */
function onGeoOk(position) {
  const city = document.querySelector(".weather span:first-child");
  const weather = document.querySelector(".weather span:last-child");
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const LANG = "kr";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=${LANG}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}ºC`;
    });
}

/**위치를 찾지 못하였을 때 */
function onGeoError() {
  alert("위치를 찾지 못하였습니다.");
}

//user의 현재 위치
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
