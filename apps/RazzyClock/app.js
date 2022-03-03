// Load fonts
// position on screen  

  let ScreenWidth  = g.getWidth(); //width of screen
  let ScreenHeight = g.getHeight(); //height of screen
  let centerX = ScreenHeight/2; //center X of screen
  let centerY = ScreenWidth/2; //center Y of screen
  let timeBorder = 3; //size of border for time
  let dateBorder = 2; //size of border for date
  let timeSize = 50; //Size of font for time
  let dateSize = 15; //Size of font for date

  var steps; //Used for rainbow

  let colorBG = g.theme.bg; //Gets BG color
  let colorFG = g.theme.fg; //Gets FG color

  var is12Hour = (require("Storage").readJSON("setting.json", 1) || {})["12hour"]; //What's the clock set to?

function draw() {
  
  var d = new Date(); //What's the date?
  var hours = d.getHours(); // what hour is it?
  

  //draws rainbow background
  
  steps = hours; //Dynamically sets rainbow steps to time
  if(steps<7) steps = 7; // If there are less than 7 steps, force 7
  
  let StepHeight = (ScreenHeight-25)/steps;

  for (let i = 0; i < steps; i++) {
      let Color = E.HSBtoRGB(i/steps,1,1, true);
      g.setColor(Color[0]/255,Color[1]/255,Color[2]/255);
      g.fillRect(0,(i*StepHeight)+25, 175,(i+1)*(StepHeight)+25);
    }
  
  // work out how to display the current time
  var da = d.toString().split(" ");

  if (is12Hour) hours = ((hours + 11) % 12) + 1;

  var time = hours + ":" + ("0" + d.getMinutes()).substr(-2);
  //var time = da[4].substr(0, 5);
  

  //var time = da[4].substr(0, 5);
  var date = [da[0], da[1], da[2], da[3]].join(" ");
  
  var timeCenterX = centerX;
  var timeCenterY = centerY;
  // Reset the state of the graphics library
  g.reset();
  g.setFont("Vector",timeSize);
  // draw the current time with a border
  g.setFontAlign(0,0);
  g.setColor(colorBG);
  g.drawString(time,timeCenterX-timeBorder,timeCenterY).drawString(time,timeCenterX+timeBorder,timeCenterY);
  g.drawString(time,timeCenterX,timeCenterY-timeBorder).drawString(time,timeCenterX,timeCenterY+timeBorder);
  g.drawString(time,timeCenterX-timeBorder,timeCenterY-timeBorder).drawString(time,timeCenterX-timeBorder,timeCenterY+timeBorder);
  g.drawString(time,timeCenterX+timeBorder,timeCenterY-timeBorder).drawString(time,timeCenterX+timeBorder,timeCenterY+timeBorder);
  g.setColor(colorFG);
  g.drawString(time, timeCenterX, timeCenterY, false);
  

  
  var dateCenterY = timeCenterY + timeSize/2 + 5;
  var dateCenterX = timeCenterX;
  g.setFont("Vector",dateSize);
  // draw the current time (4x size 7 segment)
  g.setFontAlign(0,0);
  g.setColor(colorBG);
  g.drawString(date,dateCenterX-dateBorder,dateCenterY).drawString(date,dateCenterX+dateBorder,dateCenterY);
  g.drawString(date,dateCenterX,dateCenterY-dateBorder).drawString(date,dateCenterX,dateCenterY+dateBorder);
  g.drawString(date,dateCenterX-dateBorder,dateCenterY-dateBorder).drawString(date,dateCenterX-dateBorder,dateCenterY+dateBorder);
  g.drawString(date,dateCenterX+dateBorder,dateCenterY-dateBorder).drawString(date,dateCenterX+dateBorder,dateCenterY+dateBorder);
  g.setColor(colorFG);
  g.drawString(date, dateCenterX, dateCenterY, false);
}

  g.clear();
  draw();
  var secondInterval = setInterval(draw, 60000);

  Bangle.setUI("clock");

  Bangle.loadWidgets();
  Bangle.drawWidgets();
