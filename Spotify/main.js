console.log("welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("MasterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let MasterSongName = document.getElementById("mastersongname");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songname: "Warriya-Mortals ", filename: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songname: "Cielo-Huma-Huma ", filename: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songname: "Deaf Kev -Invincible", filename: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songname: "diferent Heaven ", filename: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songname: "a peyar ka nagma ", filename: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songname: "khuda gawa Ali ", filename: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songname: "jama dekhe ga ", filename: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songname: "jangi-Heroes ", filename: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songname: "nathepak ", filename: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songname: "norekhuda ", filename: "songs/10.mp3", coverPath: "covers/10.jpg" },
]
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
})
masterPlay.addEventListener("click",(e)=>{
    console.log("hello vera");
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener("timeupdate", () => {
    // console.log("timeupdate");
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myprogressbar.value = progress;
    //100*currenttime /duration =percentage
    // currenttime = percentage * duration /100
})
myprogressbar.addEventListener("change", () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}
Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target.id);
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        MasterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})
document.getElementById("Next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    MasterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})
document.getElementById("Previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    MasterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})
// /* classlist ke madad se aap css or js add kar shakte ho yane ke kese pe alrady jo class lag raha hoga uspe aaap add or remove kar shakrte hai wo class ko or bhi baghut kuych kar shakte hai class or html dono ko target karke usme kuch bhi class addd kart shakwa shakte hai */
