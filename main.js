const musicPlayerContainer = document.querySelector("#header-container");


let input = document.getElementById("music-search");
let form = document.getElementById("form");
let searchResults = document.getElementById("search-results");
//let clearButton = document.getElementById('clear');
let resultsPlaySong = document.getElementById("audio");


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
        buildResults(myData.results);
    })
})


    function buildResults(musicArray) {
         searchResults.innerHTML = ("")

         if (musicArray.length === 0) {
            searchResults.innerText = "No results match your search.";

         } else {

            for (let data of musicArray) {
                //console.log(`${data.trackName} by ${data.artistName}`)

                let resultsDiv = document.createElement("div");
                let resultsSongPic = document.createElement("img");
                let resultsArtistName = document.createElement("h3");
                let resultsSongName = document.createElement("p");
                let resultsAlbumName = document.createElement("p");

                resultsSongPic.src = `${data.artworkUrl100}`;
                resultsArtistName.innerText = `${data.artistName}`;
                resultsSongName.innerText = `${data.trackName}`;
                resultsAlbumName.innerText = `${data.collectionName}`;
                
                resultsDiv.addEventListener("click", (event) => {
                    // resultsPlaySong.src = ""
                    resultsPlaySong.src = `${data.previewUrl}`;
                    resultsPlaySong.volume = 0.08;
                })

                resultsDiv.appendChild(resultsSongPic);
                resultsDiv.appendChild(resultsArtistName);
                resultsDiv.appendChild(resultsSongName);
                resultsDiv.appendChild(resultsAlbumName);
              
                searchResults.appendChild(resultsDiv);

                resultsDiv.classList.add("results-div");
            }
            }}
    
            