class Form{
    constructor(){
        this.input=createInput("NAME")
        this.button=createButton("PLAY")
        this.greeting=createElement("h3")
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title=createElement("h1")
        title.html("RUN! RUN!")
        title.position(250,30)
        this.input.position(270,300)
        this.button.position(270,380)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("HELLO "+player.name)
            this.greeting.position(displayWidth/3,displayHeight/4)
        });
    }
}