const time = document.querySelector('.time');
time.textContent = "Text";
const date = new Date();

function showTime(date) {
   date = new Date();
   const currentTime = date.toLocaleTimeString();
   time.textContent = currentTime;
   setTimeout(showTime, showDate, showGreeting, 1000);
}

showTime();

//--------------------------------------------------//

const dateText = document.querySelector('.date');
dateText.textContent = "Text";
const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
const currentDate = date.toLocaleDateString('en-Us', options);

function showDate() {
   dateText.textContent = currentDate;
}

showDate();

//-----------------------2---------------------------//

const greeting = document.querySelector('.greeting');
greeting.textContent = "Text";
const hours = date.getHours();



function getTimeOfDay() {
   if (hours >= 5 && hours < 12) {
      return greeting.textContent = "morning";
   } else if (hours >= 12 && hours < 17) {
      return greeting.textContent = "afternoon";
   } else if (hours >= 17 && hours < 21) {
      return greeting.textContent = "evening";
   } else {
      return greeting.textContent = "night";
   }
};


const timeOfDay = getTimeOfDay();

function showGreeting() {

   greeting.textContent = `Good ${timeOfDay},`;

};
showGreeting();

//--------------------------------------------------//


const my_name = document.querySelector('.my_name');
my_name.value = "Enter name"

function setLocalStorage() {
   localStorage.setItem('my_name', my_name.value);
}
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
   if (localStorage.getItem('my_name')) {
      my_name.value = localStorage.getItem('my_name');
   }
}
window.addEventListener('load', getLocalStorage)



//-------------------------3-------------------------//



function getRandomNum() {
   return Math.floor(Math.random() * (20 - 1) + 1);
}
getRandomNum();


let bgNum = getRandomNum().toString().padStart(2, "0");


let randomNum = getRandomNum();
const body = document.querySelector('body');


const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');


body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`;

function setBg() {
   let bgNum = String(randomNum).padStart(2, "0");
   body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`;
};
setBg();



function getSlideNext() {

   if (randomNum === 20) {
      randomNum = 1
   } else {
      randomNum = randomNum + 1;
   };

   setBg()
};

function getSlidePrev() {
   if (randomNum === 1) {
      randomNum = 20
   } else {
      randomNum = randomNum - 1;
   }
   setBg()
};


slideNext.addEventListener('click', getSlideNext)

slidePrev.addEventListener('click', getSlidePrev)




//------------------------4-------------------------//



const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const city = document.querySelector('.city');
city.value = "Astana";

async function getWeather() {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=2051cb81bde7a8763309b769a547f6a5&units=metric`;
   const res = await fetch(url);
   const data = await res.json();

   weatherIcon.className = 'weather-icon owf';
   weatherIcon.classList.add(`owf-${data.weather[0].id}`);
   temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
   weatherDescription.textContent = data.weather[0].description;
   wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m\\s`;
   humidity.textContent = `Humidity: ${data.main.humidity}%`;

};


function setCity(event) {
   if (event.code === 'Enter') {
      getWeather();
      city.blur();
   }
};

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);





function setLocalStorageTwo() {
   localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorageTwo)


function getLocalStorageTwo() {
   if (localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
   }
   getWeather();
}
window.addEventListener('load', getLocalStorageTwo)



//------------------------5-------------------------//


function getRandomNumTwo() {
   return Math.floor(Math.random() * (3 - 0) + 0);
};

let i = getRandomNumTwo();

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

async function getQuotes() {
   const quotes = '../data.json';
   const res = await fetch(quotes);
   const data = await res.json();
   quote.textContent = data[i].text;
   author.textContent = data[i].author;
}
getQuotes();

function getChangeQuote() {
   if (i === 2) {
      i = 0
   } else {
      i = i + 1;
   }
   getQuotes();
};


changeQuote.addEventListener('click', getChangeQuote)


//------------------------6-------------------------//



let isPlay = false;
let playNum = 0;
import playList from './playList.js';

const play = document.querySelector('.play');
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');
const audio = new Audio();


function playAudio() {
   if (!isPlay) {
      audio.src = playList[playNum].src;
      isPlay = true;
      audio.currentTime = 0;
      audio.play();
      play.classList.add('pause');
   } else {
      isPlay = false;
      audio.pause();
      play.classList.remove('pause')
   };
};

play.addEventListener('click', playAudio);
playNext.addEventListener('click', getPlayNext);
playPrev.addEventListener('click', getPlayPrev);
audio.addEventListener('ended', getPlayNext);

function getPlayNext() {
   isPlay = false;
   if (playNum === 3) {
      playNum = 0
   } else {
      playNum = playNum + 1;
   };
   playAudio();
};

function getPlayPrev() {
   isPlay = false;
   if (playNum === 0) {
      playNum = 3
   } else {
      playNum = playNum - 1;
   };
   playAudio();
};




const playListContainer = document.querySelector('.play-list');

playList.forEach(item => {
   const li = document.createElement('li');
   li.classList.add('play-item');
   li.textContent = item.title;
   playListContainer.append(li);
});

//------------------------7-------------------------//

