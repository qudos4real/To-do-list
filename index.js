let lists = [];

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("inputValue").value;
  lists.push(input);
  addNewTask();
  document.getElementById("inputValue").value = "";
}

function addNewTask() {
  const output = document.getElementById("output");
  output.innerHTML = "";
  for (let index in lists) {
    let list = lists[index];
    output.innerHTML += `<div id='output' onclick='deleteTask(${index})' class='output'> ${list}</div>`;
  }
}

function deleteTask(index) {
  lists = lists.filter((word, i) => i != index);
  addNewTask();
}


