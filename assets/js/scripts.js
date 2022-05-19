console.log("test");

// video API
// getting the data

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
};

// changing the links in HTML

var title = document.getElementById(videoTitle);
var matchDate = document.getElementById(date);
var url = document.getElementById(VideoURL);
