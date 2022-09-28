const musicPlayerContainer = document.querySelector("#music-player-container");


let input = document.getElementById("music-search");
let form = document.getElementById("form");
let searchResults = document.getElementById("search-results");
//let clearButton = document.getElementById('clear');



// function clearResults() {
//     if (myData.results === true) {
//         console.log ("this is true");
//       searchResults = ""
//     }
//   }
//   clearButton.addEventListener("click", (event) => {
//       clearResults()
//   })
  



form.addEventListener("submit", (event) => {
    let search = input.value;
    let url = `https://itunes.apple.com/search?term=${search}&limit=25`
    event.preventDefault();

fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
})
    .then(function (response) {
        return response.json()
    })
    .then(function (myData) {
        searchResults.innerHTML = ""
        buildResults(myData.results);
    })
})


    function buildResults(itunesArray) {
            for (let data of itunesArray) {
                //console.log(`${data.trackName} by ${data.artistName}`)

                let resultsDiv = document.createElement("div");
                let resultsSongPic = document.createElement("img");
                let resultsArtistName = document.createElement("h2");
                let resultsSongName = document.createElement("p");
                let resultsAlbumName = document.createElement("p");
                let resultsPlaySong = document.getElementById("audio");
                // let resultsPreviewSong = document.createElement ("audio");

                resultsSongPic.src = `${data.artworkUrl60}`;
                resultsArtistName.innerText = `${data.artistName}`;
                resultsSongName.innerText = `${data.trackName}`;
                resultsAlbumName.innerText = `${data.collectionName}`;
                resultsPlaySong.src = `${data.trackViewUrl}`;
                // resultsPreviewSong.src = `${data.previewUrl}`;

                resultsDiv.appendChild(resultsSongPic);
                resultsDiv.appendChild(resultsArtistName);
                resultsDiv.appendChild(resultsSongName);
                resultsDiv.appendChild(resultsAlbumName);
                // resultsDiv.appendChild(resultsPlaySong);
                // customerDiv.appendChild(resultsPreviewSong);
                searchResults.appendChild(resultsDiv);

                resultsDiv.classList.add("results-div");
            }
            }
    