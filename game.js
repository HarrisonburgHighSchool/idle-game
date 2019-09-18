var score = 0;

var title = new HTMLElement('h1', 'Welcome to the Game');
var button = new Button('hello', btnPress);
var scr = new HTMLElement('p', score);

setInterval(btnPress, 1000);

function btnPress() {
  score++;
  scr.edit(score);
}
