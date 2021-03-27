class Question {
    constructor () {
        this.Input = createInput("").attribute("placeholder", "Name");
        this.Button = createButton("Submit");
        this.Answer = createInput("").attribute("placeholder", "Answer")
    }

    hide() {
        this.Input.hide();
        this.answer.hide();
        this.Button.hide();
    }
    display() {
        var Title = createElement("h2");
        Title.html("Welcome To My Quiz")
        Title.position(400, 45);
        this.Input.position(300,330);
        this.Button.position(510,370);
        this.Answer.position(600,330);
        
        var Question = createElement("h2")
        Question.html("Q. What is Lighter than air but can never be stored?");
        Question.position(200,100)
        Question.style("color : yellow");
        var O1 = createElement("h2")
        O1.html("A. Hydrogen");
        O1.position(270,150);
        var O2 = createElement("h2")
        O2.html("B. Graphene");
        O2.position(270,180);
        var O3 = createElement("h2")
        O3.html("C. Bubble");
        O3.position(270,210);
        var O4 = createElement("h2")
        O4.html("D. Helium");
        O4.position(270,240);

        this.Button.mousePressed (()=>{
            this.Input.hide();
            this.Answer.hide();
            player.name= this.Input.value();
            player.answer = this.Answer.value();
            playerCount += 1;
            player.Index = playerCount;
            player.updateCount(playerCount);
            player.update();
        })
    }
}