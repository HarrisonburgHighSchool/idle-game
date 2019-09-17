var score = 0;

postToPage(score); // Print to the page

createButton('Button', btnPress); // Make a button
changeTitle('Clicker Game');
createText('Hello');

setInterval(btnPress, 1000);

function btnPress() {
  score++;
  postToPage(score);
}

