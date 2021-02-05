var ball;
var database;
var position;
var from,game,player;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
}

function draw(){
    background("white");
 
    drawSprites();
}

