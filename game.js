var score = 0; // Create a variable to store the score in
var title = new Title('Space Attack'); // Create a title element
var scr = new Text(score);                    // Create a text element

var button1 = new Button('higher', btnPress1);
var button2 = new Button('lower', btnPress2);




function btnPress1() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 1000) {
    hidden.show();
  }

  if(score > 15) {  
  }
}

function btnPress2() {
  score--;
  scr.edit(score); // Update the page with the new score
}

function scoreIncrease() {
  score++;                 //Increase the score
}

if(score > 1000){
  button.show(); //If the score reaches 100, show the button!
}