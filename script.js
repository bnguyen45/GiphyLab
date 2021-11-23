const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=EXl7yFYXsZPOqYPfCKVH5Vr8NI1x63po`;

// GRAB THE BUTTON ELEMENT FROM THE DOM
const gifButton = document.querySelector("#getRandomGiphyButton");
// ADD A CLICK EVENT LISTENER
gifButton.addEventListener("click", getGif);
const img = document.querySelector('img');


function getGif() {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=EXl7yFYXsZPOqYPfCKVH5Vr8NI1x63po`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            // console.log(response);
            // console.log(response.data.images.fixed_height.url)
            img.src = response.data.images.fixed_height.url;
            document.getElementById('giphyTitleDiv').innerText = response.data.title;
        })
}

//Trending
const trendButton = document.querySelector("#getTrendingGiphyButton");
trendButton.addEventListener("click", getGifTrending);

function getGifTrending() {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=EXl7yFYXsZPOqYPfCKVH5Vr8NI1x63po`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            // console.log(response);
            // console.log(response.data[0].images.fixed_height.url)
            img.src = response.data[0].images.fixed_height.url;
            document.getElementById('giphyTitleDiv').innerText = response.data[0].title;
        })
}

//Search
const search = document.getElementById("getSearchGiphyButton")

search.addEventListener('click',searchGIF)

function searchGIF(){
    const searchValue = document.querySelector("input").value

    fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchValue}&limit=10&api_key=EXl7yFYXsZPOqYPfCKVH5Vr8NI1x63po`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            // console.log(response);
            // console.log(response.data[0].images.fixed_height.url)
            img.src = response.data[0].images.fixed_height.url;
            document.getElementById('giphyTitleDiv').innerText = response.data[0].title;
        })
}