var database;
var dog,happyDog,database,foodS,foodStock,happyDogImgg,dogImgg


function preload()
{
  
happyDogImgg=loadImage('images/dogImg1.png')
dogImgg=loadImage('images/dogImg.png')

}

function setup() {
 
	createCanvas(500, 500);
  
  
  
dog = createSprite(200,200,20,20)
dog.addImage(dogImgg)
dog.scale=0.1



}

foodStock=database.ref('Food');
foodStock.on("value",readStock);

function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){

writeStock(foodS)
dog.addImage(happyDogImgg)


}


  drawSprites();
  //add styles here

}

function readStock(data){

foodS=data.val();

}

function writeStock(x){
if(x<=0){

x=0


}else{

x=x-1

}
database.ref('/').update({

Food : x

})



}
