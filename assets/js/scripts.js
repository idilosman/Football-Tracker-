function store() {
  var inputTeams = document.getElementById("ftb");
  localStorage.setItem("ftb", inputTeams.value);
  console.log("Test");
}

var storedTeams = localStorage.getItem("ftb");
