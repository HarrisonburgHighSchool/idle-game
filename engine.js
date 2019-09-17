function postToPage(message) {
  var para = document.createElement("p");                 // Create a <p> element
  para.innerHTML = message;     
  para.id = 'message' 
  var child = document.getElementById('message');                         // Insert text
  document.getElementById("game").replaceChild(para, child);   // Append <p> to <div> with id="myDIV"
}

function createButton(message, script) {
  var button = document.createElement('button');
  button.className = 'btn btn-primary';
  button.type = 'button';
  button.innerHTML = message;
  button.addEventListener('click', script);
  document.getElementById('buttons').appendChild(button);
}

function changeTitle(text) {
  let title = document.getElementById('title');
  title.innerHTML = text;
}

function createText(text, id, parentId) {
  let newText = document.createElement('p');
  newText.innerHTML = text;
  newText.id = id;
  if(!parentId) {
    parentId = "game";
  }
  let parent = document.getElementById(parentId);
  parent.appendChild(newText);
}

function addStyle(id, attribute, value) {
  let element = document.getElementById(id);
  element.style[attribute] = "value";
}

class HTMLElement {
  constructor(tag, value, id, parent) {
    this.tag = tag;
    if(id) {
      this.id = id;
    } else {
      this.id = String(Math.floor(Math.random() * 10000));
    }
    if(!parent) {
      this.parent = 'game';
    } else {
      this.parent = parent;
    }
    this.value  = value;
    this.type;
    this.hidden = false;
    this.add(this.parent);
  }
  add(parent) {
    if(parent) {
      this.parent = parent;
    }
    let element = this.create()
    document.getElementById(this.parent).appendChild(element);
    console.log('Created element with id ' + this.id);

  }
  edit(value) {
    //console.log(document.getElementById(this.id));
    let element = this.getElement();
    element.innerHTML = value;
  }
  create() {
    let element = document.createElement(this.tag);
    element.innerHTML = this.value;
    console.log("Adding element with ID: " + element.id);
    element.id = this.id;
    return element;
  }
  getElement() {
    let element = document.getElementById(this.id);
    return element;
  }
}

class Button extends HTMLElement {
  constructor(value, script, id, parent) {
    super('button', value, id, parent);
    this.script = script;
  }
  add(parent) {
    if(parent) {
      this.parent = parent;
    }
    let button = this.create();
    button.addEventListener('click', this.script);
    button.className = 'btn btn-primary';

    document.getElementById(this.parent).appendChild(button);
    console.log('Created element with id ' + this.id);
  }
}