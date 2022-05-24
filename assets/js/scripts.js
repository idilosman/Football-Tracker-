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

  // getID(inputTeams.value);
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
  const splicedTeams = englishTeams.slice(0, 3);
  splicedTeams.forEach(teamVideoData);
};

// // appending the data

function teamVideoData(teamData) {
  const titles = teamData.title;
  const dates = teamData.date;
  const formatedDate = moment(dates).format("MMMM Do, YYYY");
  const links = teamData.videos[0].embed;
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

// async function getID(userInput) {
//   const response = await fetch(
//     "https://v3.football.api-sports.io/teams?league=39&season=2021",
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "v3.football.api-sports.io",
//         "x-rapidapi-key": "9b9d1d9d07956e4f79f9562b5094204b",
//       },
//       parameters: {
//         league: 39,
//       },
//     }
//   );
//   const json = await response.json();

//   const leagueinfo = json.response;

//   console.log(leagueinfo);

//   const teamMatch = leagueinfo.filter((leagueinfo) =>
//     leagueinfo.team.includes("userInput")
//   );

//   console.log(teamMatch);
// }

// filter through 'json'
// pick out the ID
// call getFixtures (ID)

// array.length === 0 throw message on screen
// getting the fixtures passing through the team ID "+teamID+"

const getFixtures = async (teamID) => {
  const res = await fetch(
    "https://v3.football.api-sports.io/fixtures?team=46&season=2021&status=FT",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "0c1884728a129c5d744a402a0b8d9cc4",
      },
    }
  );

  console.log(res);
  const fixtures = await res.json();
  console.log(fixtures);

  const teamInfo = fixtures.response;

  console.log(teamInfo);

  const mostRecentMatch = teamInfo[teamInfo.length - 1];

  console.log(mostRecentMatch);

  const matchDate = mostRecentMatch.fixture.date;
  const homeTeam = mostRecentMatch.teams.home.name;
  const awayTeam = mostRecentMatch.teams.away.name;
  const homeScore = mostRecentMatch.score.fulltime.home;
  const awayScore = mostRecentMatch.score.fulltime.away;
  const league = mostRecentMatch.league.name;
  const round = mostRecentMatch.league.round;

  console.log(matchDate);
  console.log(homeTeam);
  console.log(awayTeam);
  console.log(homeScore);
  console.log(awayScore);
  console.log(league);
  console.log(round);

  const dataContainer = document.getElementById("table-container");

  // // appending match date
  const enterMatchDate = document.createElement("td");
  enterMatchDate.appendChild(document.createTextNode(matchDate));
  dataContainer.appendChild(enterMatchDate);
  // // appending home team
  const enterHomeTeam = document.createElement("td");
  enterHomeTeam.appendChild(document.createTextNode(homeTeam));
  dataContainer.appendChild(enterHomeTeam);

  // // appending away team
  const enterAwayTeam = document.createElement("td");
  enterAwayTeam.appendChild(document.createTextNode(awayTeam));
  dataContainer.appendChild(enterAwayTeam);

  // //  appending home score
  const enterHomeScore = document.createElement("td");
  enterHomeScore.appendChild(document.createTextNode(homeScore));
  dataContainer.appendChild(enterHomeScore);

  // // appending away score
  const enterawayScore = document.createElement("td");
  enterawayScore.appendChild(document.createTextNode(awayScore));
  dataContainer.appendChild(enterawayScore);

  // // appending league
  const enterleague = document.createElement("td");
  enterleague.appendChild(document.createTextNode(league));
  dataContainer.appendChild(enterleague);

  // // appending round
  const enterRound = document.createElement("td");
  enterRound.appendChild(document.createTextNode(round));
  dataContainer.appendChild(enterRound);
};

// update page contents
// // udpateFixtures
const updateFixtures = (fixtures) => {};

getFixtures();
