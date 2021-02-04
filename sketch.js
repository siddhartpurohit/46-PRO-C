const Engine = Matter.Engine;
const World  = Matter.World
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var sprites,boy;
var health =[];
var boyImg_walking
var boyI;
var bag;
var background1Img
var background1
var healhtImg;
var dangerImg;
var bear;
var bearSprite;
var bag =[];
var tree;
var treeImg;
var tree21;
var tree22;
var tree23;
var tree24;
var engine,world;
var tree25;
var tree1,tree17,tree18,tree19,tree20;
var boySprite;
var fire1;
var fire2;
var fire3;
var fire4;
var fireImg;
var health1;
var milk1;
var key;
var door1;
var door2;
var door3;
var banana;
var honey;
var swimmingClear;
var basket;
var basket2;
var basket3;
var trap1;
var trap2;
var trap3;
var trap4;
var trapImg;
var basketImg;
var doorImg;
var milkImg;
var honeyImg;
var healhtImg;
var keyImg;
var bananaImg;
var swimmingClearImg;
var banana2;
var banana3;
var boyImg2;
var fire;
var danger = [];
var tools =[];

function preload(){
    boyImg_walking = loadAnimation("man4.png","man5.png","man6.png","man7.png","man8.png");
     boyImg2 = loadAnimation("man3.png");
    background1Img = loadImage("grass.jpeg");
    healhtImg = loadImage("HealthKit.jpg");
  
    treeImg = loadImage("tree1.png")
    fireImg = loadImage("fireImg.png");
     basketImg = loadImage("basket2.png");
     doorImg = loadImage("doorImg.png");
     milkImg = loadImage("Milk.png");
     honeyImg = loadImage("f.png");
     bananaImg = loadImage("orange2.png");
     swimmingClearImg = loadImage("swiminng.png");
     keyImg = loadImage("goldenKey.png");

}
function setup() {

    createCanvas(5000,5000);

    engine = Engine.create();
    world = engine.world;

    bear = new Bear(400,500);
    boy = new Boy (2500,2500);
   
    boySprite = createSprite(500,500,5000,5000);
     boySprite.addAnimation("standing",boyImg2);
    boySprite.addAnimation("walking",boyImg_walking)
  
    boySprite.x = boy.x;
    boySprite.y = boy.y;
   
for(var i = 0;i<8;i++){
    fire = createSprite(random(0,5000),random(0,5000),50,50);
    fire.addImage(fireImg);
    fire.scale = 0.4;
    danger.push(fire);
}
 
     bag = createSprite(boySprite.x+500,boySprite.y-200,300,300);
     bag.shapeColor = "black";

     
    health1 = createSprite(random(0,5000),random(0,5000),50,50);
    health1.addImage(healhtImg);
    health1.scale = 0.3;
    health.push(health1);
    milk1 = createSprite(random(0,5000),random(0,5000),50,50);
    milk1.addImage(milkImg);
    milk1.scale = 0.08;
    health.push(milk1);

    key = createSprite(random(0,5000),random(0,5000),50,50);
    key.addImage(keyImg);
    key.scale = 0.06;
    tools.push(key);
    door1 = createSprite(random(0,5000),random(0,5000),50,50);
    door1.addImage(doorImg);
    door1.scale = 0.6;
    
    door2 = createSprite(random(0,5000),random(0,5000),50,50);
    door2.addImage(doorImg);
    door2.scale = 0.6;

    door3 = createSprite(random(0,5000),random(0,5000),50,50);
    door3.addImage(doorImg);
    door3.scale = 0.6;

    banana = createSprite(random(0,5000),random(0,5000),50,50);
    banana.addImage(bananaImg);
    banana.scale = 0.8;

    banana2 = createSprite(random(0,5000),random(0,5000),50,50);
    banana2.addImage(bananaImg);
    banana2.scale = 0.8;

    banana3 = createSprite(random(0,5000),random(0,5000),50,50);
    banana3.addImage(bananaImg);
    banana3.scale = 0.8;


    honey = createSprite(random(0,5000),random(0,5000),50,50);
    honey.addImage(honeyImg);
    honey.scale = 0.1;

    swimmingClear = createSprite(random(0,5000),random(0,5000),50,50);
    swimmingClear.addImage(swimmingClearImg);
    swimmingClear.scale = 0.02;

    basket = createSprite(random(0,5000),random(0,5000),50,50);
    basket.addImage(basketImg);
    basket.scale = 1.0;

    basket2 = createSprite(random(0,5000),random(0,5000),50,50);
    basket2.addImage(basketImg);
    basket2.scale = 1.0;

    basket3 = createSprite(random(0,5000),random(0,5000),50,50);
    basket3.addImage(basketImg);
    basket3.scale = 1.0;

    trap1 = createSprite(random(0,5000),random(0,5000),200,200);
    trap1.visible = false
    trap2 = createSprite(random(0,5000),random(0,5000),200,200);
    trap2.visible = false
    trap3 = createSprite(random(0,5000),random(0,5000),200,200);
    trap3.visible = false
    trap4 = createSprite(random(0,5000),random(0,5000),200,200);
    trap4.visible = false

    


 
    bearSprite = createSprite(800,800,50,50);
    bearSprite.visible = true

  for(var z = 1650;z<1950;z = z+250){
      tree19 = createSprite(4850,z,100,100);
      tree19.addImage(treeImg);
      tree19.scale = 0.05;
  }
    
  for(var c = 150;c<4900;c = c+350){
      tree1 = createSprite(c,1400,50,50);
      tree1.addImage(treeImg);
      tree1.scale = 0.05;
  }

  for(var i =500;i<5000;i = i+350){
      tree18 = createSprite(i,2090,450,50);
      tree18.addImage(treeImg)
      tree18.scale = 0.05;
  }

  for(var p=200;p<4900;p = p+350){
      tree21 = createSprite(p,200,50,50);
      tree21.addImage(treeImg);
      tree21.scale = 0.05
  }

  for(var r = 400;r<1200;r =r+350){
      tree22 = createSprite(2500,r,50,50);
      tree22.addImage(treeImg);
      tree22.scale = 0.05
   }

  for(var t = 400;t<1200;t = t+350){
      tree23 = createSprite(700,t,50,50);
      tree23.addImage(treeImg);
      tree23.scale = 0.05
  }

  for(var a = 200;a<4900;a = a+350){
      tree24 = createSprite(a,3050,50,50);
      tree24.addImage(treeImg);
      tree24.scale = 0.05
   }
   
   for(var b = 200;b<4900;b = b+350){
    tree25 = createSprite(b,4000,50,50);
    tree25.addImage(treeImg);
    tree25.scale = 0.05
   }
    
}

function draw() {
    Engine.update(engine);
   
    background(background1Img)
    boy.checkHealthStatus();
    if(keyDown(UP_ARROW)){
        boy.y = boy.y-50
    } 

    if(keyDown(DOWN_ARROW)){
        boy.y = boy.y+50;
    }

    if(keyDown(RIGHT_ARROW)){
        boy.x = boy.x+50;
        boySprite.changeAnimation("walking",boyImg_walking);
    }

    if(keyDown(LEFT_ARROW)){
        boy.x = boy.x-50;
    }
    boySprite.x = boy.x;
    boySprite.y = boy.y;
    camera.position.x = boy.x;
    camera.position.y = boy.y;
   boySprite.collide(tree1);
  boySprite.collide(tree25);
  boySprite.collide(tree24);
  boySprite.collide(tree23);
  boySprite.collide(tree22);
  boySprite.collide(tree21);

  boySprite.collide(tree18);
  boySprite.collide(tree19);
  
  boySprite.collide(health1);
  boySprite.collide(milk1);
  
  boySprite.collide(door1);
  boySprite.collide(door2);
  boySprite.collide(door3);

  boySprite.collide(banana);
  boySprite.collide(banana2);
  boySprite.collide(banana3);
  boySprite.collide(honey);
  boySprite.collide(swimmingClear);
  
  boySprite.collide(basket);
  boySprite.collide(basket2);
  boySprite.collide(basket3);
  boySprite.collide(trap1);
  boySprite.collide(trap2);
  boySprite.collide(trap3);
  boySprite.collide(trap4);
  
  
  
  
  
  
    //pacifying the bear;
    if(boySprite.isTouching(bearSprite)){

         for(var item in bag){

             if (bag[item] ==="honey"){
                 bear.mood = "calm"
             }
             
         }
             if(bear.mood==="attack"){
              boy.updateHealth(-5);
             }
     }

    //increasing healht on touching healht;
    if(boy.healht<100){
          for(var i=0;i<=6;i++){
              if(boySprite.isTouching(healht[i])){
                    healht[i].destroy();
                    boy.updateHealth(+5);
              } 
          }
    
    }
       console.log(danger)
       for(var i in danger){

  
    if(boySprite.isTouching(danger[i])){

         boy.updateHealth(-5);
    
    }
}
     bear.display();
  drawSprites();
}