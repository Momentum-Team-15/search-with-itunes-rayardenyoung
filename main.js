const musicPlayerContainer = document.querySelector("#header-container");


let input = document.getElementById("music-search");
let form = document.getElementById("form");
let searchResults = document.getElementById("search-results");
let resultsPlaySong = document.getElementById("audio");
let clearButton = document.getElementById("clear")


form.addEventListener("submit", (event) => {
    let search = input.value;
    let url = `https://itunes.apple.com/search?term=${search}&limit=25`
    event.preventDefault();

    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
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

            let resultsDiv = document.createElement("div");
            let resultsSongPic = document.createElement("img");
            let resultsSongName = document.createElement("h3");
            let resultsArtistName = document.createElement("p");
            let resultsAlbumName = document.createElement("p");

            resultsSongPic.src = `${data.artworkUrl100}`;
            resultsSongName.innerText = `${data.trackName}`;
            resultsArtistName.innerText = `${data.artistName}`;
            resultsAlbumName.innerText = `${data.collectionName}`;

            resultsDiv.addEventListener("click", (event) => {
                // resultsPlaySong.src = ""
                resultsPlaySong.src = `${data.previewUrl}`;
                resultsPlaySong.volume = 0.08;
            })

            resultsDiv.appendChild(resultsSongPic);
            resultsDiv.appendChild(resultsSongName);
            resultsDiv.appendChild(resultsArtistName);
            resultsDiv.appendChild(resultsAlbumName);

            searchResults.appendChild(resultsDiv);

            resultsDiv.classList.add("results-div");
            resultsSongName.classList.add("inside-card");
            resultsArtistName.classList.add("inside-card");
            resultsAlbumName.classList.add("inside-card");
            resultsSongPic.classList.add("inside-card");

        }
    }
}

clearButton.addEventListener("click", (event) => {
    searchResults.innerHTML = [];
})

