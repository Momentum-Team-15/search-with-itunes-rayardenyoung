const musicPlayerContainer = document.querySelector("#music-player-container");

const url = 'https://proxy-itunes-api.glitch.me/search?term=jack+johnson'

fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
})

.then(function(response){
    return response.json()
})

.then(function(myData){
    
    for (let data of myData.results){
        console.log(`${data.trackName} by ${data.artistName}`)
        
        let resultsDiv = document.createElement("div");
        let resultsSongPic = document.createElement("img");
        let resultsArtistName = document.createElement("h2");
        let resultsSongName = document.createElement("p");
        let resultsAlbumName = document.createElement("p");
        let resultsPlaySong = document.createElement("audio");
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
        resultsDiv.appendChild(resultsPlaySong);
        // customerDiv.appendChild(resultsPreviewSong);
        musicPlayerContainer.appendChild(resultsDiv);

        resultsDiv.classList.add("results-box");

   }})
