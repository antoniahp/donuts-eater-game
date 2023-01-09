class Player {
  
  constructor(posX, posY, radius, color){
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.red= red;
    this.green= green;
    this.blue= blue;
    
    this.moveSpeed = 10;
    
  }
  
  draw(){
    noStroke();
    fill(this.red, this.green, this.blue);
    circle(this.posX, this.posY, this.radius * 2);
  }
    checkEaten(player){
      const distanceWithPlayer = dist(this.posX, this.posY, player.posX, player.posY);
      if(distanceWithPlayer <= this.radius + player.radius){
        this.posX = random(width); this.posY = random(height);
      }
  }

  moveUp(){
    if(this.posY - this.radius > 0 ){
     this.posY = this.posY - this.moveSpeed; 
    }
    
  }
  
  moveDown(){
    if(this.posY + this.radius < height){
    this.posY = this.posY + this.moveSpeed;}
  }
  
  moveRight(){
    if(this.posX + this.radius < width){
    this.posX = this.posX + this.moveSpeed;}
  }
  
  moveLeft(){
    if(this.posX - this.radius > 0){
      this.posX = this.posX - this.moveSpeed;
    }
  }
}

class Food {
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.radius = 25
    
    
  }
  draw(){
    if(!this.eaten){
      strokeWeight(20);
      stroke(243,156,18);
      fill(52,73,94);
      circle(this.posX,this.posY, this.radius * 2);
    }
  }
  
  checkEaten(player){
      const distanceWithPlayer = dist(this.posX, this.posY, player.posX, player.posY);
      if(distanceWithPlayer <= this.radius + player.radius){
        this.posX = random(width); this.posY = random(height);
        player.radius = player.radius+2;
      }
  }
}



function checkPressedKeys(){
  
  if (keyIsDown(LEFT_ARROW)) {
    firstPlayer.moveLeft();

  }
  
  if (keyIsDown(RIGHT_ARROW)){
    firstPlayer.moveRight();

  }
  
  if (keyIsDown(UP_ARROW)){
    firstPlayer.moveUp();
  
  } 

  if (keyIsDown(DOWN_ARROW)){
    firstPlayer.moveDown();

  }
  
  
  if (keyIsDown(65)) {
    secondPlayer.moveLeft();

  } 
  if (keyIsDown(68)){
    secondPlayer.moveRight();

  } 
  if (keyIsDown(87)){
    secondPlayer.moveUp();
  
  }
  if (keyIsDown(83)){
    secondPlayer.moveDown();

  }
  
}


let firstPlayer;
let secondPlayer;

let food1;
let food2;
let food3;
let food4;
let food5;

function setup() {
  firstPlayer = new Player(posX=100, posY=100, radius=50, red=155, green=89, blue=182);
  secondPlayer = new Player(posX=300, posY=300, radius=50,red=52, green=152, blue=219);

  food1 = new Food(posX=random(windowWidth), posY=random(windowHeight));
  food2 = new Food(posX=random(windowWidth), posY=random(windowHeight));
  food3 = new Food(posX=random(windowWidth), posY=random(windowHeight));
  food4 = new Food(posX=random(windowWidth), posY=random(windowHeight));
  food5 = new Food(posX=random(windowWidth), posY=random(windowHeight));
  
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(52,73,94);

  checkPressedKeys();
  
  food1.checkEaten(firstPlayer);
  food1.checkEaten(secondPlayer);
  food2.checkEaten(firstPlayer);
  food2.checkEaten(secondPlayer);
  food3.checkEaten(firstPlayer);
  food3.checkEaten(secondPlayer);
  food4.checkEaten(firstPlayer);
  food4.checkEaten(secondPlayer);
  food5.checkEaten(firstPlayer);
  food5.checkEaten(secondPlayer);

  //firstPlayer.checkEaten(secondPlayer);
  //secondPlayer.checkEaten(firstPlayer);
  
  
  
  
  firstPlayer.draw();
  secondPlayer.draw(); 
  food1.draw();
  food2.draw();
  food3.draw();
  food4.draw();
  food5.draw();
  
  strokeWeight(2);
  stroke(1);
  fill(155,89,182);
  textSize(30);
  text("Payer 1: " + firstPlayer.radius,10,30);
  fill(52,152,219);
  text("Player 2: " +  secondPlayer.radius, width - 200,30);
  
  if( firstPlayer.radius >= 100){
    background(155,89,182); 
    fill(255,255,255);
    textSize(30);
    text("First player won!",width/2-125,height/2);
    
  }else if(secondPlayer.radius >= 100 ){
    background(52,152,219);
    fill(255,255,255);
    textSize(30);
    text("Second won!",width/2-125,height/2);
  }
}