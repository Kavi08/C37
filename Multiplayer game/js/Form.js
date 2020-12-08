class Form{

    constructor(){
      this.input  = createInput("Name");
      this.button = createButton("Play");
      //hello = createElement('h5');
    }

    display(){
        var title = createElement('h2');//h1 to h7
        title.html("Car Racing Game");
        title.position(displayWidth/2 - 60, displayHeight/2 - 100);

        //var input = createInput("Name");
        this.input.position(displayWidth/2 - 40, displayHeight/2 - 60);

        //var button = createButton("Play");
        this.button.position(displayWidth/2 - 20, displayHeight/2 - 20);
        //console.log("Inside form");
        
        this.button.mousePressed(
            () =>{
                this.input.hide();
                this.button.hide();
                playerObj.name = this.input.value();
                var hello = createElement('h5');
                hello.html(" Welcome " + playerObj.name + " to the car racing game ");
                hello.position(displayWidth/2, displayHeight/2);
                playerCount++;
                playerObj.index = playerCount;
                playerObj.updateCount(playerCount);
                playerObj.updateName();
            }
        )
    }

}