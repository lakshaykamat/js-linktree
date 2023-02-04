const searchBoxElem = document.getElementById('searchbox')
const searchbtnElem = document.getElementById('search-btn')
const iframeElem = document.getElementById('iframe')
const downloadElem = document.getElementById('download-link')
const durationElem = document.getElementById('duration')
const titleElem = document.getElementById('title')
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '04f144a486mshf8408ceb53634b3p1ac06cjsnfb9e4811bf3f',
        'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
    }
};
let songAppeared = false
//for not creating two div in HTML

searchbtnElem.addEventListener('click', () => {
    let vidLink = searchBoxElem.value
    if (!(vidLink == '')) {
        let videoID = videoIdFinder(vidLink)

        setInterval(customLoader,1)
        //loading screen interval
        api(videoID)
    }else{
        document.getElementById('error').textContent = "Enter a link"
    }

})

function videoIdFinder (vidLink) {
    //Youtube Video ID is 11 characters long
    //There are only two ways to get or copy any youtube video link
    //1. From copying address bar ex- https://www.youtube.com/watch?v=5afErrqrs6w
    //2. From share button ex- https://youtu.be/5afErrqrs6w

    //geting the index of this string if have
    let position = vidLink.indexOf('?v=')

    //if not just extract the the just last part of string that is video ID
    if (position == -1) {
        //removing first 17 charcters
        let videoID = vidLink.substring(17)
        return videoID
    } else{
        let videoID = vidLink.substring(position + 3, position + 11 + 3);
        return videoID
    }
}
function setDuration (seconds) {
    let time = seconds
    if (seconds > 60) {
        time = (seconds / 60).toFixed()
        if(time > 60){
            time = (time/60).toFixed()
            return `${time}h`
        }
        return `${time}m`
    } else {
        return `${time.toFixed()}s`
    }
}
function api (videoID) {
    fetch(`https://youtube-mp3-download1.p.rapidapi.com/dl?id=${videoID}`, options)
        .then(response => response.json())
        .then(response => {
            if(response.status == 'fail'){
                document.getElementById("error").textContent = "Invalid Link"
            }else{
            document.getElementById("error").textContent = ''
            createHtmlElement()
            document.getElementById('iframe').src = `https://www.youtube.com/embed/${videoID}`
            document.getElementById('download-link').href = response.link
            document.getElementById('title').textContent = response.title
            document.getElementById('duration').textContent = setDuration(response.duration)
            }
        })
        .catch(err => console.error(err))
}
function createHtmlElement(){
    if(songAppeared == false){
    let div = document.createElement('div')
    div.className = "song-parent"
    div.innerHTML = `
    <div class="song-container">
            <div class="iframe-container">
                <iframe id="iframe" width="560" height="315" src=""
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div class="text">
                <h1 id="title"></h1>
                <p id="duration"></p>
                <a href="" target="_blank" id="download-link">
                    <button class="btn">Download</button>
                </a>
            </div>
        </div>
    `
    document.getElementById('song-parent').appendChild(div)
    }
    songAppeared = true
}
function customLoader(){
    if(songAppeared == false){
        document.getElementById('loader').style.display = 'block'
   }else{
       document.getElementById('loader').style.display = 'none'
   }
}