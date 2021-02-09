class Game {
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();

        })
    }
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref("playerCount").once("value")
            if(playerCountRef.exists){
                playerCount=playerCountRef.val();
                 player.getCount();
            }
            form=new Form();
            form.display();
        }
        car1=createSprite(displayWidth/2-50,displayHeight/10)
        car1.addImage(car1Img)
        car2=createSprite(displayWidth/2+50,displayHeight/10)
        car2.addImage(car2Img)
        cars=[car1,car2]
    }
    play(){
        
        form.hide();
        //text("GAME START",120,100)
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            background(bgImg)
            //var displayPosition=130;
            var index=0;
            var x=300;
            var y;
            for(var plr in allPlayers){
           // displayPosition+=20;
            index=index+1
            x=x+200
            y=displayHeight-allPlayers[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y
            if(index===player.index){
                cars[index-1].shapeColor="red";
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
            }
            
        }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50;
            player.update();
        }
         if(player.distance>3500){
            gameState=2;
         }
         
        drawSprites();
    }
}