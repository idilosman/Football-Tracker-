// Saving the search into local storage

function store() {
  var inputTeams = document.getElementById("favouriteTeams");
  localStorage.setItem("favouriteTeams", inputTeams.value);
}
var storedTeam = localStorage.getItem("favouriteTeams");

console.log(storedTeam);

// append the search onto recent searches list

const list = document.getElementById("demo");
const newData = storedTeam;
const entry = document.createElement("li");
entry.appendChild(document.createTextNode(newData));
list.appendChild(entry);

// re-render the data from API when clicking on a recent search

// clear button to clear all local storages - on click event - localStorage.clear ();

// // video API

// on document.ready - render the videos
// // fetching the data

// let titles = [];
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
