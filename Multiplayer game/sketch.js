var ball;
var database;

var gameState = 0;
var playerCount;

var gameObj, formObj, playerObj;

var allPlayers;

var car1, car2, car3, car4, cars;

function setup(){
    createCanvas(displayWidth-30,displayHeight-30);

    car1 = createSprite(100,100,30,30);

    car2 = createSprite(150,100,30,30);

    car3 = createSprite(200,100,30,30);

    car4 = createSprite(250,100,30,30);

    cars = [car1,car2,car3,car4];

    database = firebase.database();

    gameObj = new Game();
    
    gameObj.getState();
    console.log(gameState);
    gameObj.start();

    
}

function draw(){
    if(playerCount === 4){
        gameObj.update(1);
    } 
    
    if(gameState === 1){
        clear();
        gameObj.play();
    }
    
}

