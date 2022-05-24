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

  getID(inputTeams.value);
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

// // // video API
// // // fetching the data

fetch(
  "https://www.scorebat.com/video-api/v3/feed/?token=[MTkxNzZfMTY1MjY5MzE4Nl8zYmM4Y2NkMGEzMmVkN2MwYWRlMzBkZTk1Mjg0NGVmZmIwMTZmMzMy]"
)
  .then((response) => response.json())
  .then((data) => filteredItems(data));

// //   filtering the data

const filteredItems = (data) => {
  const englishTeams = data.response.filter((item) =>
    item.competition.includes("ENGLAND")
  );
  console.log(englishTeams);
  const splicedTeams = englishTeams.slice(0, 3);
  console.log(splicedTeams);
  splicedTeams.forEach(teamVideoData);
};

// // appending the data

function teamVideoData(teamData) {
  const titles = teamData.title;
  console.log(titles);
  const dates = teamData.date;
  console.log(dates);
  const formatedDate = moment(dates).format("MMMM Do, YYYY");
  const links = teamData.videos[0].embed;
  console.log(links);

  const video = document.getElementById("video-container");

  const entryVideo = document.createElement("div");
  entryVideo.innerHTML = links;
  video.appendChild(entryVideo);

  entryVideo.className = "video-div";

  const entryTitle = document.createElement("h2");
  entryTitle.appendChild(document.createTextNode(titles));
  video.appendChild(entryTitle);

  const entryDate = document.createElement("p");
  entryDate.appendChild(document.createTextNode(formatedDate));
  video.appendChild(entryDate);
}

// // API Getting I.D's from form input - use input to search through the response

async function getID(userInput) {
  const response = await fetch(
    "https://v3.football.api-sports.io/teams?league=39&season=2021",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "9b9d1d9d07956e4f79f9562b5094204b",
      },
      parameters: {
        league: 39,
      },
    }
  );
  const json = await response.json();
  console.log(json);

  // filter through 'json'
  // pick out the ID
  // call getFixtures (ID)
}

// array.length === 0 throw message on screen
// getting the fixtures passing through the team ID "+teamID+"

const getFixtures = async (teamID) => {
  const res = await fetch(
    "https://v3.football.api-sports.io/fixtures?team=39&season=2021&status=FT",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "9b9d1d9d07956e4f79f9562b5094204b",
      },
    }
  );

  console.log(res);
  const response = await res.json();
  const fixtures = response;
  console.log(fixtures);

  json.response;
  // follow steps from before to disect data & append
};

// update page contents
// udpateFixtures
const updateFixtures = (fixtures) => {};

getFixtures();
