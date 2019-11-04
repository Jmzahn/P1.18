
let abstand_links = 10;
let sek, min, stunde;
let capture
// weather variables
let temperature = 0;
let weather = "";
let getData;

function preload() {

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
    
}

function draw() {
    image(capture,200,90,640,480);
     translate(width,0); // move to far corner
  scale(-1.0,1.0);    // flip x-axis backwards
 
  translate(width,0); // move to far corner
  scale(-1.0,1.0);    // flip back to normal
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
   // image(capture,0,0,width,height);
}



