var score = 0; // Create a variable to store the score in
var title = new Title('Space Attack'); // Create a title element
var scr = new Text(score);                    // Create a text element

var button = new Button('Text')
var coinButton = new Button('Coins', btnPress1);
var button2 = new Button('Weapons', btnPress2);

var text1 = new Text('weapons');  // Create some text to go in the columns
var text2 = new Text('I will go in column 2');

var section = new Section();
var text =new Text('Here is some text');

section.add(text);
section.addBorder('green');

var rowSection = new Section('row');
var column1 = new Section('col')
var column2 = new Section('col')

rowSection.add(column1);
rowSection.add(column2);
section.style('height', '20rem')

column1.add(text1);
column2.add(text2);

column1.add(section)
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
  var section = new Section();
var text = new Text('Here is some text');

section.add(text);
section.addBorder();

  scr.edit(score); // Update the page with list of weapons
}

function scoreIncrease() {
  score++;                 //Increase the score
}

if(score > 1000){
  button.show(); //If the score reaches 100, show the button!
}