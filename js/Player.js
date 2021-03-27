class Player {
    constructor () {
        this.index = null;
        this.name= null;
        this.answer = null;
    }

    getCount() {
        database.ref("playerCount").on("value", (data)=>{
            playerCount= data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })

    }
    update() {
        var info = "players/player" + this.index
        database.ref(info).update({
            Name : this.name,
            Answer : this.answer
        })
    }

    static getplayerInfo() {
        database.ref("players").on("value", (data)=> {
            allPlayers= data.val() ;
        })
    }
     

    
}