// function greet(){
//     alert("Good evening Asewe Creatives")
// }

let inputValue = document.querySelector(".search-box")
let button = document.querySelector(".search-button")
let city = document.querySelector(".location .city")
let date = document.querySelector(".location .date")
let temp = document.querySelector(".current .temp")
let description = document.querySelector(".current .weather")

button.addEventListener("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=7c8f62dbda24cac602674435cacf4e41`)
        .then((response) => response.json())
        .then(displayData)
        .catch((err) => alert("Please Enter a Correct City Name"))
})

const displayData = (weather) => {
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date()
    date.innerText = dateBuilder(now);
    temp.innerHTML = `${Math.round(weather.main.temp)}℃`;
    description.innerText = `${weather.weather[0].description}`;
}


function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day}, ${date} ${month} ${year}`;
  }
  
// CODE FOR THE SITE BACKGROUND

function setBackgroundGradient() {
  // Setting background gradients according to the time of the day

  if (temp < 10) {
      // early morning gradient
      document.querySelector('.app').style.background="linear-gradient(-45deg, #767d92, #2f4562, #152642, #081b33)";
  } else if (temp < 15) {
      // morning gradient
      document.querySelector('.app').style.background="linear-gradient(-45deg, #fa4e5e, #f9ab9e, #99b9d0, #00b2d2)";
  } else if (temp < 20) {
      // afternoon gradient
      document.querySelector('.app').style.background="linear-gradient(-45deg, #96adcf, #4570b5, #234181, #1b2966)";
  } else if (temp < 25) {
      // evening gradient
      document.querySelector('.app').style.background="linear-gradient(-45deg, #fdec6e, #e0943d, #bc361a, #391106)";
  } else if (temp < 30) {
      // night gradient
      document.querySelector('.app').style.background="linear-gradient(-45deg, #767d92, #2f4562, #152642, #081b33)";
  }

  // animating gradients

  document.querySelector('.app').style.backgroundSize="400% 400%";
  document.querySelector('.app').style.animation="gradient 8s ease infinite";
}