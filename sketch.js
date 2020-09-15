var bullet,wall,thickness,speed,weight,damage



function setup() {
  createCanvas(1600,400);

  thickness=Math.round(random(22,83))
  speed=Math.round(random(223,321))
  weight=Math.round(random(30,52))

  gunPiece1=createSprite(50,220,20,30)
  gunPiece2=createSprite(60,200,50,20)
  

  bullet=createSprite(50,200,20,5)
  wall=createSprite(1400,200,thickness,400)

  gunPiece1.shapeColor="black"
  gunPiece2.shapeColor="black"
  bullet.shapeColor="white"
  wall.shapeColor=rgb(205,205,205)

  bullet.velocityX=speed
}

function draw() {
  background(100);  
  drawSprites();
  
  fill("white")
  textSize(20)
  text("Wall Damage:"+damage,100,100)
  text("Bullet Speed:"+speed,100,130)
  if(collide(bullet,wall)){
    bullet.velocityX=0
    damage=Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness))
  
  if(damage<10){
    wall.shapeColor="green"
    text("Suriviable.",100,150)
  }
  if(damage>20){
    wall.shapeColor="red"
    text("I see dead people.",100,150)
  }
}
}
