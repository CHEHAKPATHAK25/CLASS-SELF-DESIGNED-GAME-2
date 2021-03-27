var database;
var playerCount =0;
var allPlayers;
var gameState = 0;
var player, quiz, question;
function setup() {
  createCanvas(800,400);
  
  database = firebase.database();
  quiz = new Quiz();
  quiz.getstate();
  quiz.start();

}

function draw() {
  background(153, 102, 204);
  if(playerCount === 2){
    quiz.update(1);
  }
  if(gameState === 1) {
    quiz.play();
  }
  drawSprites();
}