let capture;
let canvas;
let weatherBtn;
let timeBtn;
let appTab;
let fitnessBtn;
let browserBtn;
let newsBtn;
let socialBtn;
let mirrorLightBtn;
let musicBtn;
let settingsBtn;
let hideBtn;
let appTabLoc;
let hidden;
let temperature = 0;
let weather = "";
let json;

function preload(){
  let url = "https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
  json = loadJSON(url);
}

function setup() {
  canvas = createCanvas(600, 800);
  capture = createCapture(VIDEO);
  capture.hide();
  
  // Get the temperature
  temperature = json.main.temp;

  weather = json.weather[0].description;
  
  weatherBtn = createButton("");
  weatherBtn.mousePressed(openWeather);

  timeBtn = createButton("");
  timeBtn.mousePressed(openCalendar)

  appTab = createButton("");
  appTabLoc = -100;
  appTab.mousePressed(openAppTab);

  fitnessBtn = createButton("Fitness");
  fitnessBtn.mousePressed(openFitness);

  browserBtn = createButton("Browser");
  browserBtn.mousePressed(openBrowser);

  newsBtn = createButton("News");
  newsBtn.mousePressed(openNews);

  socialBtn = createButton("Social");
  socialBtn.mousePressed(openSocial);

  mirrorLightBtn = createButton("Light");
  mirrorLightBtn.mousePressed(openLight);

  musicBtn = createButton("Music");
  musicBtn.mousePressed(openMusic);

  settingsBtn = createButton("Settings");
  settingsBtn.mousePressed(openSettings);

  hideBtn = createButton("Hide");
  hideBtn.mousePressed(hide);
  hidden = 0;
}

function openAppTab(){
  if(appTabLoc == -100){
    appTabLoc = 2;
  }
  else{
    appTabLoc = -100;
  }
}

function openFitness(){

}

function openBrowser(){

}

function openNews(){

}

function openSocial(){

}

function openLight(){

}

function openMusic(){
  if(spotify.elt.style.display==='none')
    spotify.show();
  else
    spotify.hide();
}

function openSettings(){

}

function openWeather(){

}

function openCalendar(){
  if(calendar.elt.style.display==='none')
    calendar.show();
  else
    calendar.hide();
}

function hide(){
  if(hidden)
    hidden = 0;
  else
    spotify.hide();
    calendar.hide();
    hidden = 1;
    appTabLoc = -100
}

function draw() {
  background(255);
  translate(capture.width, 0);
  scale(-1, 1);
  image(capture, 0, 0, 600, 800);

  appTab.position(0,90);
  
  fitnessBtn.position(appTabLoc, 100);
  browserBtn.position(appTabLoc, 120);
  newsBtn.position(appTabLoc, 140);
  socialBtn.position(appTabLoc, 160);
  mirrorLightBtn.position(appTabLoc, 180);
  musicBtn.position(appTabLoc, 200);
  settingsBtn.position(appTabLoc, 220);

  weatherBtn.position(0,780);
  weatherBtn.html(temperature+" F")
  
  timeBtn.position(65,780);
  timeBtn.html(hour()+":"+minute());

  hideBtn.position(550,780);
}
