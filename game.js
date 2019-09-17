var score = 0;

var button = new Button('hello');

setInterval(update, 50);
setInterval(increment, 1000);

function update() {
  button.edit(score);
}

function increment() {
  score++;
}

