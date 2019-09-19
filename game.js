var score = 0; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element


var button1 = new Button('higher', btnPress);
var button2 = new Button('lower', btnPress2);

//changeTitle('Clicker Game');
createText('Hello');

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  }
}

function btnPress2() {
  score--;
  scr.edit(score); // Update the page with the new score
}

setIncrease(scoreIcrease, 1000);// Run the "scoreIncrease" function once every
function scoreIncrease() {
  score++;                 //Increase the score
}

if(score > 10){
  button.show(); //If the score reaches 100, show the button!
}