var score = 0;

postToPage(score);

createButton('Button', btnPress);
changeTitle('Clicker Game');

setInterval(btnPress, 1000);

function btnPress() {
  score++;
  postToPage(score);
}

