var ball,bgImg;
var database,position;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var car1,car2;
var cars;
var car1Img,car2Img;

function preload(){
    car1Img=loadImage("runner (2).jpg")
    car2Img=loadImage("runner (3).jpg")
    bgImg=loadImage("racing.jpg")
}

function setup(){
    createCanvas(800,700);

    database=firebase.database();

    game=new Game();
    game.getState();
    game.start();

}

function draw(){
    background(bgImg);

    if(playerCount===2){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
    if(gameState===2){
        console.log("GAME ENDED")
    }

}

function showError(){
    console.log("error reading the database")
}