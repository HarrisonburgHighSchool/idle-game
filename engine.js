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
