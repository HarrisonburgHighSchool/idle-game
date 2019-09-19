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
    this.value = value;
    if(!this.value) {
      this.value = ""
    }
    this.type;
    this.hidden = false;
    this.add();
  }
  add(parent) {
    if(parent) {
      this.parent = parent;
    }
    let element = this.create()
    element.id = this.id;
    element.classList.add('shown');
    document.getElementById(this.parent).appendChild(element);
    console.log('Created element with id ' + this.id);

  }
  move(parent) {
    let element = document.getElementById(parent);
    element.appendChild(this.getElement());
  }
  edit(value, attribute) {
    //console.log(document.getElementById(this.id));
    let element = this.getElement();
    if(attribute) {
      element[attribute] = value;
    } else {
      element.innerHTML = value;
    }
  }
  style(attribute, value) {
    let element = this.getElement();
    element.style[attribute] = value;
  }
  hide(rate) {
    let element = this.getElement();
    if(rate) {
      element.style.transition = 'opacity ' + rate + 'ms linear';
    }
    //element.style.transition = 'opacity 1s linear'
    element.style.opacity = 0;
  }
  show(rate) {
    let element = this.getElement();
    if(rate) {
      element.style.transition = 'opacity ' + rate + 'ms linear';
    }
    element.style.opacity = 1;
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
    this.className = 'btn btn-primary';
    this.type = 'button';
    let button = this.getElement();
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.type = this.type;
    button.innerHTML = this.value;
    button.addEventListener('click', this.script);
  }
}

class Title extends HTMLElement {
  constructor(value, id, parent) {
    super('h1', value, id, parent);
  }
}

class Text extends HTMLElement {
  constructor(value, id, parent) {
    super('p', value, id, parent);
  }
}

class Columns extends HTMLElement {
  constructor(columns, id, parent) {
    super('div', null, id, parent);
    let row = this.getElement();
    row.classList.add('row');
    this.columns = [];
    for(var i = 0; i < columns; i++) {
      let col = new HTMLElement('div', "", randomID(), this.id);
      col.classList.add('col');
      this.columns.push(col);
    }
  }
  addToColumn(index, obj) {
    if(!obj) {
      console.log('Second parameter is not an object!');
    } else {
      let location = this.columns[index - 1].getElement();
      obj.move(location.id);
    }
  }
}

function randomID() {
  return String(Math.floor(Math.random() * 10000))
}

function require(filename) {
  let script = document.createElement('script');
  script.setAttribute('src', filename);
  document.body.appendChild(script);
}
