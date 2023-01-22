document.getElementById('form').classList.remove('lessVisible');

var promptBox = document.getElementById("prompt-box");
promptBox.style.visibility = "hidden";

const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  // when user clicks on submit btn or hits enter when th ebtn has focus, the event is first fired before the request hits the server.
  // thus, we have a chance to validate the form
  event.preventDefault();

  let emailVal = form.elements["email"].value;
  let passwordVal = form.elements["password"].value;

  if(emailVal == "" || passwordVal == "") {
    promptBox.style.visibility = "visible";
    document.getElementById('form').classList.add('lessVisible');
  }
});

function closePrompt() {
  promptBox.style.visibility = "hidden";
  document.getElementById('form').classList.remove('lessVisible');
}
