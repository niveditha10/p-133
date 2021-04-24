status="";
objects=[];
function preload(){
    img_living=loadImage("living_room.jpg");
    img_dining=loadImage("dining_room.jpg");
    img_kitchen=loadImage("kitchen.jpg");
    img_bedroom=loadImage("bedroom.jfif");
    img_bottle=loadImage("bottle.jpg");
    img_stationary=loadImage("stationary.jpg");
}

function setup(){
    canvas=createCanvas(500,450);
    canvas.position(390,140);

    detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:indentifying objects";

}

function modelLoaded(){
    console.log("cocossd is loaded");
    status=true;
   
    
}

function draw(){
selection=document.getElementById("my_select").value;
if(selection=="bedroom"){
    image(img_bedroom,0,0,500,450);
    detector.detect(img_bedroom,gotResults);
   rooms();
}
if(selection=="living room"){
    image(img_living,0,0,500,450);
    detector.detect(img_living,gotResults);
    rooms();  
}
if(selection=="dining room"){
    image(img_dining,0,0,500,450);
    detector.detect(img_dining,gotResults);
        rooms();

}

if(selection=="kitchen"){
    image(img_kitchen,0,0,500,450);
    detector.detect(img_kitchen,gotResults);
    rooms();
}

if(selection=="bottle"){
    image(img_bottle,0,0,500,450);
    detector.detect(img_bottle,gotResults);
    rooms();
}
if(selection=="stationary"){
    image(img_stationary,0,0,500,450);
    detector.detect(img_stationary,gotResults);
    rooms();
}

}

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    objects=results;
}
}

function rooms(){
    if(status!=""){
   
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status:objects detected";
            percentage=floor(objects[i].confidence*100);
            fill(255,0,0);
            text(objects[i].label+" "+percentage+"%",objects[i].x,objects[i].y);
         noFill();
         stroke(255,0,0);
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    
    }
}



