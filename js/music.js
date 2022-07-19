const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist= document.getElementById("artist");
const title= document.getElementById("title");
const previous= document.getElementById("previous");
const forward= document.getElementById("forward");

let progress = document.getElementById("progress");

let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");


let isPlaying= false;

// for play button
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};


//for false button
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});



const songs = [
    {
        name: "cheap",
        title: "Cheap Thrills",
        artist: "Sia",
    },
    {
    
        name: "lean on",
        title: "Lean On",
        artist: "Major Lazer ft.Dj-Snake",
    },
    {

        name: "see you again",
        title: "See you again",
        artist: "Wiz Khalifa, Charli Puth",

    },
    {
        name: "something",
        title: " Something just like this",
        artist: "The Chainsmokers",
    },
    {
        name: "let her go",
        title: "Let Her Go",
        artist: "Passenger",
    },
    {
        name: "night changes",
        title: "Night Changes",
        artist: "One Direction",
    },
    {
        name: "ed sheraan",
        title: "Perfect-Ed-Sheeran",
        artist: "ED Sheeran",
    }

];

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "img/" + songs.name + ".jpg";
};

songIndex = 0;

const nextSong = () =>{
    //for repeat the song we use
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};


const prevSong = () =>{
    //for repeat the song we use
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

//progress bar
music.addEventListener("timeupdate", (event) =>{
    const { currentTime, duration } = event.target;
    let progress_time = (currentTime/duration)*100;
    progress.style.width = `${progress_time}%`;


    //music duration update
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration%60);

    let tot_duration = `${min_duration}:${sec_duration}`;
    if(duration){
        total_duration.textContent = `${tot_duration}`;
     }


     //current duration update
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime%60);

    if(sec_currentTime < 10){
        sec_currentTime = `0${sec_currentTime}`;
    }

    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`;
});




forward.addEventListener("click", nextSong);
previous.addEventListener("click", prevSong);






