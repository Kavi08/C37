class Player{
    constructor(){  
        this.name = null;
        this.distance = 0;
        this.index = null;

    }

    //Method for reading playerCount from DB
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){ 
            playerCount = data.val();
        } );        
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }
        
    updateName(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });

    }

    //static    
    static getPlayerInfo(){
        var playerRef = database.ref('players');
        playerRef.on("value", (data)=>
        {
            allPlayers = data.val();
        });
    }




}