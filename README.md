# Idle Game Framework

An engine for creating web-based idle games with vanilla Javascript and Bootstrap as the styling framework. Please read the examples below for usage tips and examples.

The framework expects your **game code** to run in `game.js`. The rules and functions for the engine are stored in `engine.js`.

If you want to get started with an example, clone this repository and paste the following code into `game.js`:

```javascript
var score = 0; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);         // Create a button element
var scr = new Text(score);                     // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
}
```

### Creating an Element

There are many elements to create in this framework. Here are some examples:

```javascript
let text   = new Text('Hello!');          // Creates a text element and place it on the screen
let button = new Button('I am a button'); // Create a button element and place it on the screen
let title = new Title('Title of Game');   // Create a title element and place it on the screen
```

More elements are being added all the time. Stay up to date by reading this resource! You can submit a request for an element [here]().

----

### Adding a Function to a Button

You can make a button call a `function` when you click it like this:

```javascript
let score = 0; //Declare the data structure before using it!

let button = new Button('Click me to make score go up!', scoreIncrease); // Run the "score" function when you click the button

// Don't forget to define the function!
function scoreIncrease() {
  score++;
}
```

----

### Setting Up a Loop

Create a loop using the `setInterval()` function. The first value in the parentheses is **the function you would like to loop**, and the second value is **how often you loop it** (in milliseconds).

Here is an example:

```javascript
setInterval(createButton, 1000); // Run the "createButton" function once every 1000 milliseconds (once every second)

function createButton() {
  let button = new Button('hello!');
}
```

----

### Hiding an Element

To hide an element, use the `hide()` method. To show an element, use the `show()` method:

```javascript
let score = 0;                   // Set score to 
let button = new Button('Boo!'); // Make a button
button.hide()                    // Hide the button

setInterval(scoreIncrease, 1000);// Run the "scoreIncrease" function once every second (1000 milliseconds)

function scoreIncrease() {
  score++;                       // Increase the score

  if(score > 10) {
    button.show();               // If the score reaches 11, show the button!
  }
}

```

If you pass a number into the `hide()` or `show()` functions, you can control how fast the element fades in or out.

```javascript
button.hide(500); // Fade out over the course of 500 milliseconds
button.show(0);   // Fade in instantly  (0 milliseconds)
```
----
