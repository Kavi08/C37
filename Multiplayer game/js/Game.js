class Game{
    constructor(){

    }

    //Method to read gameState value from DB
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){ 
            gameState = data.val();
        });     
        console.log("in get State.."+ gameState)   
    }

    update(State){
        var updateRef = database.ref('/');
        updateRef.update({gameState: State});

        //database.ref('/').update({gameState: State});
    }

    start(){
        if(gameState === 0){
            playerObj = new Player();
            playerObj.getCount();

            formObj = new Form();
            formObj.display();
        }
    }

    play(){
       // formObj.hide();
        textSize(30);
        //text("Game Has Started", 100, 50);
        //Access the static function using the name of the class
        Player.getPlayerInfo();
        //allPlayers 
        var yPos = 0;
        //console.log(allPlayers);
        //console.log(playerCount);
        if(allPlayers !== undefined){
            //yPos += 50;
            var x = 0
            var y = 0
            var arrayIndex = 0
            for(var plr in allPlayers){
               // yPos += 50;
                x += 50;
                y = 500-allPlayers[plr].distance;
                cars[arrayIndex].x = x
                cars[arrayIndex].y = y
                if(playerObj.index === arrayIndex+1){
                    cars[arrayIndex].shapeColour = "blue"
                    camera.position.x = displayWidth/2;
                    camera.position.y = displayHeight-allPlayers[plr].distance;
                }
                arrayIndex++;
               // text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 200, yPos);
            }
            
        }
                if(keyIsDown(SPACE)){
                    playerObj.distance += 50;
                    playerObj.updateName();
                }
                drawSprites();
    }
}
