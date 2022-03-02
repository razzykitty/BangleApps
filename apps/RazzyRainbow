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

  let Steps   = 15;

function draw() {
  
  //draws rainbow backgrounf
  let StepHeight = (ScreenHeight-25)/Steps;

  for (let i = 0; i < Steps; i++) {
      let Color = E.HSBtoRGB(i/Steps,1,1, true);
      g.setColor(Color[0]/255,Color[1]/255,Color[2]/255);
      g.fillRect(0,(i*StepHeight)+25, 175,(i+1)*(StepHeight)+25);
    }
  // work out how to display the current time
  var d = new Date();
  var da = d.toString().split(" ");
  var time = da[4].substr(0, 5);
  var date = [da[0], da[1], da[2], da[3]].join(" ");
  
  var timeCenterX = centerX;
  var timeCenterY = centerY;
  // Reset the state of the graphics library
  g.reset();
  g.setFont("Vector",timeSize);
  // draw the current time (4x size 7 segment)
  g.setFontAlign(0,0);
  g.setColor("#000000");
  g.drawString(time,timeCenterX-timeBorder,timeCenterY).drawString(time,timeCenterX+timeBorder,timeCenterY);
  g.drawString(time,timeCenterX,timeCenterY-timeBorder).drawString(time,timeCenterX,timeCenterY+timeBorder);
  g.drawString(time,timeCenterX-timeBorder,timeCenterY-timeBorder).drawString(time,timeCenterX-timeBorder,timeCenterY+timeBorder);
  g.drawString(time,timeCenterX+timeBorder,timeCenterY-timeBorder).drawString(time,timeCenterX+timeBorder,timeCenterY+timeBorder);
  g.setColor("#FFFFFF");
  g.drawString(time, timeCenterX, timeCenterY, false);
  

  
  var dateCenterY = timeCenterY + timeSize/2 + 5;
  var dateCenterX = timeCenterX;
  g.setFont("Vector",dateSize);
  // draw the current time (4x size 7 segment)
  g.setFontAlign(0,0);
  g.setColor("#000000");
  g.drawString(date,dateCenterX-dateBorder,dateCenterY).drawString(date,dateCenterX+dateBorder,dateCenterY);
  g.drawString(date,dateCenterX,dateCenterY-dateBorder).drawString(date,dateCenterX,dateCenterY+dateBorder);
  g.drawString(date,dateCenterX-dateBorder,dateCenterY-dateBorder).drawString(date,dateCenterX-dateBorder,dateCenterY+dateBorder);
  g.drawString(date,dateCenterX+dateBorder,dateCenterY-dateBorder).drawString(date,dateCenterX+dateBorder,dateCenterY+dateBorder);
  g.setColor("#FFFFFF");
  g.drawString(date, dateCenterX, dateCenterY, false);
}

  g.clear();
  draw();
  var secondInterval = setInterval(draw, 1000);

  Bangle.setUI("clock");

  Bangle.loadWidgets();
  Bangle.drawWidgets();
