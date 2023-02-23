let list = [];

function onSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("inputValue").value;
  list.push(input);
  addList();
  document.getElementById("inputValue").value = "";
  list = [];
}

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);

function addList() {
  const output = document.getElementById("output");
  for (let i of list) {
    output.innerHTML += "<div id='output' class='output'>" + i + "</div>";
  }
}

function onDelete(e) {
  const remove = document.getElementById("output");
  e.target.remove();
}

const remove = document.getElementById("output");
remove.addEventListener("click", onDelete);
