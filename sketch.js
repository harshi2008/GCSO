var car, car2, car3
var wall
var speed, weight 
var line, line2, line3, line4

function setup() {
  createCanvas(1600,600);
  //createSprite(400, 200, 50, 50);

  speed= random(55, 90);
  weight= random(400, 1500);

  car = createSprite(50, 168, 50, 50);
  car2 = createSprite(50, 283, 50, 50);
  car3 = createSprite(50, 376, 50, 50);
  wall = createSprite(1500, 250, 60, height/2);
  line = createSprite(1500, 195, 3000, 8);
  line2 = createSprite(1500, 305, 3000, 8);
  line3 = createSprite(1500, 398, 3000, 8);
  line4 = createSprite(1500, 100, 3000, 8);
}

function draw() {
  background("purple");  
  wall.shapeColor= rgb(0, 70, 70);

  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;

  line.shapeColor = "blue";
  line2.shapeColor = "blue";
  line3.shapeColor = "blue";
  line4.shapeColor = "blue";

  if(wall.x-car.x< (car.width+wall.width)/2){
   car.velocityX = 0;
   var deformation = 0.5*weight*speed*speed/25509;
   if(deformation>100){
     car.shapeColor = color(0, 255, 0);
     
     if(deformation>100 && deformation<180){
       car.shapeColor = color(255, 0, 0);
       
       if((deformation>180)){
         car.shapeColor = color(230, 230, 0);
       }
     }
   }
  }

   if(wall.x-car2.x< (car2.width+wall.width)/2){
    car2.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/25509;
    if(deformation>100){
      car2.shapeColor = color(0, 255, 0);
      
      if(deformation>100 && deformation<180){
        car2.shapeColor = color(255, 0, 0);
        
        if((deformation>180)){
          car2.shapeColor = color(230, 230, 0);
        }
      }
    }
  }

    if(wall.x-car3.x< (car3.width+wall.width)/2){
      car3.velocityX = 0;
      var deformation = 0.5*weight*speed*speed/25509;
      if(deformation>100){
        car3.shapeColor = color(0, 255, 0);
        
        if(deformation>100 && deformation<180){
          car3.shapeColor = color(255, 0, 0);
          
          if((deformation>180)){
            car3.shapeColor = color(230, 230, 0);
          }
        }
      }


  }
  drawSprites();
}