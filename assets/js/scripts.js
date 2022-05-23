// Saving the search into local storage

function store() {
  var inputTeams = document.getElementById("favouriteTeams");

  let searchedTeamsString = localStorage.getItem("favouriteTeams");
  let searchedTeams;

  if (searchedTeamsString === null) {
    searchedTeams = [];
  } else {
    searchedTeams = JSON.parse(searchedTeamsString);
  }

  searchedTeams.push(inputTeams.value);

  localStorage.setItem("favouriteTeams", JSON.stringify(searchedTeams));
  loadTeams();
}

function loadTeams() {
  var storedTeam = localStorage.getItem("favouriteTeams");
  var storedTeamParse = JSON.parse(storedTeam);
  // adding to html

  const list = document.getElementById("demo");

  list.innerHTML = "";

  for (let i = 0; i < storedTeamParse.length; i++) {
    const newData = storedTeamParse[i];
    const entry = document.createElement("li");
    entry.appendChild(document.createTextNode(newData));
    list.appendChild(entry);
  }
}

var clearHistory = document.getElementById("clear-history");

const list = document.getElementById("demo");

clearHistory.onclick = function () {
  localStorage.clear();
  list.innerHTML = "";
};

// // video API
// // fetching the data

let titles = [];
let dates = [];
let links = [];

fetch(
  "https://www.scorebat.com/video-api/v3/feed/?token=[MTkxNzZfMTY1MjY5MzE4Nl8zYmM4Y2NkMGEzMmVkN2MwYWRlMzBkZTk1Mjg0NGVmZmIwMTZmMzMy]"
)
  .then((response) => response.json())
  .then((data) => filteredItems(data));

//   filtering the data

const filteredItems = (data) => {
  const englishTeams = data.response.filter((item) =>
    item.competition.includes("ENGLAND")
  );
  console.log(englishTeams);
  return englishTeams;
};

// // const titles = json.map((filteredItems) => filteredItems.title);
// // console.log(titles);

// const titles = englishTeams.map((englishTeams) => englishTeams.title);
// console.log(titles);

// Looping/mapping through the data to get the VideoURL x3

// appending the URL into the HTML

// API Getting I.D's from form input - use input to search through the response

fetch("https://v3.football.api-sports.io/teams?league=39&season=2021", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "9b9d1d9d07956e4f79f9562b5094204b",
  },
  parameters: {
    league: 39,
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

// getting the fixtures passing through the team ID

const getFixtures = async () => {
  const res = await fetch(
    "https://v3.football.api-sports.io/fixtures?team=40&season=2021&status=FT",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "9b9d1d9d07956e4f79f9562b5094204b",
      },
    }
  );

  console.log(res);
  const { response } = await res.json();
  fixtures = response;
  console.log(fixtures);
};

//update page contents
// udpateFixtures
const updateFixtures = (fixtures) => {};

getFixtures();
