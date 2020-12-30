class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play() {
    form.hide();

    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      var yPos = 130;

      for (var plr in allPlayers) {
        if (plr === "player" + player.index) {
          fill("green");
        }else{
          fill("black");
        }

        yPos = yPos + 25; //yPos += 25

        textSize(15);
        text(allPlayers[plr].name +" : "+ allPlayers[plr].distance, 120, yPos);
      }

    }

    if ( keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 50;
      player.update();
    }

  }
}
