var score = 0; // Create a variable to store the score in
var title = new Title('Space Attack'); // Create a title element
var scr = new Text(score);                    // Create a text element

var coinButton = new Button('coins', btnPress1);
var button2 = new Button('lower', btnPress2);

var text1 = new Text('weapons');  // Create some text to go in the columns
var text2 = new Text('I will go in column 2');


setInterval(btnPress1, 200); // Run the "createButton" function once every 1000 milliseconds (once every second)

function coinButton() {
  let button = new Button('Collect coins'); 
}


function btnPress1() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {

  }

  if(score > 15) {  
  }
}

function btnPress2() {
  
  scr.edit(score); // Update the page with the new score
}

function scoreIncrease() {
  score++;                 //Increase the score
}

if(score > 1000){
  button.show(); //If the score reaches 100, show the button!
}