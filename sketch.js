var path,img1,player,img2,lg,rg
function preload(){
  //pre-load images
img1=loadImage("path.png")
img2=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200)
path.addImage(img1)
path.velocityY=4
path.scale=1.2

player=createSprite(200,360)
player.addAnimation("seab",img2)
player.scale=0.1
lg=createSprite(50,200,20,400)
rg=createSprite(350,200,20,400)
lg.visible=false
rg.visible=false
}

function draw() {
  background(0);
player.x=mouseX
if(path.y>400){path.y=height/2

}
player.collide(lg)
player.collide(rg)
drawSprites()
}
