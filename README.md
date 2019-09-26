# Idle Game Framework

An engine for creating web-based idle games with vanilla Javascript and Bootstrap as the styling framework. Please read the examples below for usage tips and examples.

### Table of Contents:

* [Intro](#Intro)
* [Creating an Element](#creating-an-element)
* [Removing an Element](#removing-an-element)
* [Hiding an Element](#hiding-an-element)
* [Creating a Section](#creating-a-section)
  * Rows & Columns
* [Borders](#borders)
* [Adding a Function to a Button](#adding-a-function-to-a-button)
* [Setting Up a Loop](#setting-up-a-loop)
* [Changing Font](#changing-font)


----

# Intro

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

----

# Creating an Element

There are many elements to create in this framework. Here are some examples:

```javascript
let text   = new Text('Hello!');          // Creates a text element and place it on the screen
let button = new Button('I am a button'); // Create a button element and place it on the screen
let title = new Title('Title of Game');   // Create a title element and place it on the screen
```

When you create an element, it automatically shows up on the screen. To `hide()` an element, read: [Hiding an Element](#Hiding-an-Element).

More elements are being added all the time. Stay up to date by reading this resource! You can submit a request for an element [here]().

----

# Removing an Element

To remove an element, call the `remove()` function on it:

```javascript
let welcome = new Title('Welcome to the Game!');
welcome.remove();
```

This is different than `hiding()` an element; once you destroy it, you cannot get it back.

----

# Hiding an Element

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

# Creating a Section

**Sections** are used to organize other elements into different parts of the screen. Create a section like this:

```javascript
let mySection = new Section();
```

Once you have created a section, you can add different elements to it by using the `add()` function:

```javascript
var rockButton = new Button('Collect rocks');
var stoneButton = new Button('Collect stones');

var buttonSection = new Section();

buttonSection.add(rockButton);
buttonSection.add(stoneButton);
```

Elements that are in the same section will be grouped together on the screen.

## Types of Sections: Rows & Columns

Sections can be combined to create **rows** and **columns**. You can create columns by adding `col` sections to a `row` section. Here is an example:

```javascript
var text1 = new Text('I will go in column 1');  // Create some text to go in the columns
var text2 = new Text('I will go in column 2');

var rowSection = new Section('row'); // Create the row to store the columns in
var column1 = new Section('col');    // Create the first column
var column2 = new Section('col');    // Create the second column

rowSection.add(column1);  // Add the first column to the row
rowSection.add(column2);  // Add the second column to the row

column1.add(text1);  // Add the text to the first column
column2.add(text2);  // Add the text to the second column
```

----

# Borders

You can add a border to any element using the `addBorder()` function. Here is an example:

```javascript
var section = new Section();
var text = new Text('Here is some text');

section.add(text);
section.addBorder();
```

You can pass in a color to the `addBorder()` function to change the color of the border.

```javascript
section.addBorder('red');
```

To remove the border, call the `removeBorder()` function:

```javascript
section.removeBorder();
```

----

# Adding a Function to a Button

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

# Setting Up a Loop

Create a loop using the `setInterval()` function. The first value in the parentheses is **the function you would like to loop**, and the second value is **how often you loop it** (in milliseconds).

Here is an example:

```javascript
var loop = setInterval(createButton, 1000); // Run the "createButton" function once every 1000 milliseconds (once every second)

function createButton() {
  let button = new Button('hello!');
}

function stopLoop() {
  clearInterval(loop);
}
```

To end the loop, you need to call the `clearInterval()` function and pass in the variable you stored the loop in. Look at the `stopLoop()` function above for an example.

----

# Changing Font

As long as you know the name of the font you would like to use, you can change the font of either the entire page or an individual element.

Here's how you change the font of an individual element (in this example, a button):

```javascript
var button = new Button('hello'); // First, create a button if you don't have one

button.changeFont('Impact');      // Then, change it to the 'Impact' font type
```

To change the font of the whole page, use the `changeFont()` function.

```javascript
changeFont('Impact') // This changes all the fonts on a page to 'Impact'
```

If you use `changeFont()`, and then change the font of an individual element as well, then the individual element will change it's font and everything else on the page will use the font you specified with `changeFont()`. Here's an example:

```javascript
changeFont('Arial'); // Change all the fonts on the page to Arial

var button1 = new Button('Hello');  // Create the first button
var button2 = new Button('Goodbye') // Create the second button

button1.changeFont('Impact');       // The first button is changed to impact

// The second button stays with 'Arial'
```

Change the font to help the player understand important buttons, or to convey a mood or emotion.

----


