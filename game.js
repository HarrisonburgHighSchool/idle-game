var score = 0;

var title = new HTMLElement('h1', 'Welcome to the Game');
title.add();
var button = new Button('hello', btnPress);
button.add();
var scr = new HTMLElement('p', score);
scr.add();

setInterval(btnPress, 1000);

function btnPress() {
  score++;
  scr.edit(score);
}
