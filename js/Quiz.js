class Quiz  {
    constructor () {
        
    }
    getstate() {
        database.ref("gameState").on('value', (data)=>{
            gameState = data.val()
        })
    }

    update(state) {
        database.ref("/").update({
            gameState : state
        })
    }

start () {
    if(gameState === 0) {
        player = new Player();
        question = new Question();
        player.getCount();
        question.display();
    }
}

play() {
    question.hide();
    textSize(30);
    text("Result", 120, 100);
    players.getplayerinfo();
    if(allPlayers !== undefined){
        var x = 120;
        var y = 100;
        var index = 0;
        background("yellow");
        for(var plr in allPlayers){
            var correctans ="A"
            y+=30;
            index+=1;
            if(correctans === allPlayers[plr].answer){
                fill('green')
            }
            else{
                fill("red")
            }
            textSize(30);
            text(allPlayers[plr].name, allPlayers[plr].answer, 120, y)
        }
        }
    }
   
}
