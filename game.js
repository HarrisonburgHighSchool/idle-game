var score = 0;

postToPage(score);

createButton('higher', btnPress);
createButton('lower', btnPress2);
changeTitle('Clicker Game');

setInterval(btnPress, 100);

function btnPress() {
  score++;
  postToPage(score);
}

function btnPress2() {
  score--;
  postToPage(score);
}