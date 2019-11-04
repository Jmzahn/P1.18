let capture;

//button variables
let appTab;
let appTabLoc;
let weatherBtn, timeBtn, fitnessBtn, browserBtn, newsBtn, twitterBtn, mirrorLightBtn, musicBtn, settingsBtn, hideBtn;
let hidden;

//Time variables
let abstand_links = 10;
let sek, min, stunde;

// weather variables
let temperature = 0;
let weather = "";
let getData;

//App variables
let twitter, spotify, calendar;

function preload(){
  // Weather
  let url = "https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=metric&APPID=e812164ca05ed9e0344b89ebe273c141";
  getData = loadJSON(url);
  p01d = loadImage("assets/01d.png");
  p02d = loadImage("assets/02d.png");
  p03d = loadImage("assets/03d.png");
  p04d = loadImage("assets/04d.png");
  p09d = loadImage("assets/09d.png");
  p10d = loadImage("assets/10d.png");
  p11d = loadImage("assets/11d.png");
  p13d = loadImage("assets/13d.png");
  p50d = loadImage("assets/50d.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  textFont('Arial');
  capture=createCapture(VIDEO);
  capture.size(400,400);
  capture.hide();
  
  //load and hide apps
  calendar = select("#calendar")
  calendar.hide();
  spotify = select("#spotify")
  spotify.hide();
  twitter = select(".twitter-timeline")
  twitter.hide();
  
  
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

  twitterBtn = createButton("Twitter");
  twitterBtn.mousePressed(openTwitter);

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
    appTabLoc = 10;
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

function openTwitter(){
  if(twitter.elt.style.display==='none')
    twitter.show();
  else
    twitter.hide();
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
  image(capture,200,90,640,480);
  translate(width, 0);
  scale(-1, 1);
  

  appTab.position(0,90);
  
  fitnessBtn.position(appTabLoc, 100);
  browserBtn.position(appTabLoc, 120);
  newsBtn.position(appTabLoc, 140);
  socialBtn.position(appTabLoc, 160);
  mirrorLightBtn.position(appTabLoc, 180);
  musicBtn.position(appTabLoc, 200);
  settingsBtn.position(appTabLoc, 220);

  hideBtn.position(width-10,height-10);

  fill(255);  
  textAlign(LEFT); 
  textStyle(BOLD); 
  textSize(40); 
  let monat = ['none', 'Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let mName = month();
  text( monat[mName] + ' ' + day() + ', ' + year(), abstand_links,50);
  textSize(110); 
  if(second() < 10){ 
    sek = '0';
    } else {
    sek = '';
  }
  if(minute() <10) {
    min = ':0';
  } else {
    min = ':'; 
  }
  if (hour() <10) {
    stunde = '0';
  } else {
    stunde = '';
  }
    text(stunde + hour() + min + minute(), abstand_links, 150);
    textSize(60);
    text(sek + second(),300, 115)


  // Weather
    temperature = getData.main.temp;
    weather = getData.weather[0].description;
    icon = getData.weather[0].icon;
   
  // textAlign(right);
  textSize(80);
    temperature=(temperature*(9/5))+32;
    temperature=temperature.toFixed(2);
  text(temperature + "°F", width - 290, 120);
  textSize(30);
  text(weather, width - 255, 150);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
