function store() {
  var inputTeams = document.getElementById("ftb");
  localStorage.setItem("ftb", inputTeams.value);
  console.log("inputTeams.value");
}

var storedTeams = localStorage.getItem("ftb");
console.log("test");

// // video API
// // getting the data

fetch(
  "https://www.scorebat.com/video-api/v3/feed/?token=[MTkxNzZfMTY1MjY5MzE4Nl8zYmM4Y2NkMGEzMmVkN2MwYWRlMzBkZTk1Mjg0NGVmZmIwMTZmMzMy]"
)
  .then((response) => response.json())
  .then((data) => filteredItems(data));

//   getting the items from the data

const filteredItems = (data) => {
  const englishTeams = data.response.filter((item) =>
    item.competition.includes("ENGLAND")
  );
  console.log(englishTeams);
  return englishTeams;
};

// API Getting I.D's from form input

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
    "https://v3.football.api-sports.io/fixtures?team=50&season=2021&status=NS",
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
