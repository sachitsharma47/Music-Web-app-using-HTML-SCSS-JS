// .................................Variables and Constants.......................................
let songIndex = 0;
let songsArr = [
    { "songName": "Agar Tum Saath Ho - Arijit Singh", "songPath": "./Musics/Agar Tum Saath Ho - Arijit Singh.mp3", },
    { "songName": "Dil Diyan Gallan - Atif Aslam", "songPath": "./Musics/Dil Diyan Gallan - Atif Aslam.mp3", },
    { "songName": "Khariyat - Arijit Singh", "songPath": "./Musics/Khariyat - Arijit Singh.mp3", },
    { "songName": "Main Rang Sharbatoon Ka - Atif Aslam", "songPath": "./Musics/Main Rang Sharbatoon ka - Atif Aslam.mp3", },
    { "songName": "Musafir - Atif Aslam", "songPath": "./Musics/Musafir - Atif Aslam.mp3", },
    { "songName": "O Saathi - Atif Aslam", "songPath": "./Musics/O Saathi - Atif Aslam.mp3", },
    { "songName": "Raabta - Arijit Singh", "songPath": "./Musics/Raabta - Arijit Singh.mp3", },
    { "songName": "Tera yaar Hoon Main - Arijit Aslam", "songPath": "./Musics/Tera Yaar Hoon Main - Arijit Singh.mp3", },
    { "songName": "Tere Sang Yaara - Atif Aslam", "songPath": "./Musics/Tere Sang Yaara - Atif Aslam.mp3", },
];

let music = new Audio(songsArr[songIndex].songPath);

// Getting DOM Elements
const previousSongBtn = document.getElementById('previousSongBtn');
const masterPlayBtn = document.getElementById('masterPlayBtn');
const nextSongBtn = document.getElementById('nextSongBtn');
const musicPlayingGif = document.getElementById('musicPlayingGif');
const songProgress = document.getElementById('songProgress');
const playerSongName = document.getElementById('playerSongName');
const songs = Array.from(document.getElementsByClassName('songs'));

// .................................Funcitions.......................................
// playing song
function songPlay() {
    if (music.paused || music.currentTime <= 0) {
        music.play()
        masterPlayBtn.classList.remove('fa-play');
        masterPlayBtn.classList.add('fa-pause');
        musicPlayingGif.style.opacity = 1;
    }
    else {
        music.pause();
        masterPlayBtn.classList.remove('fa-pause');
        masterPlayBtn.classList.add('fa-play');
        musicPlayingGif.style.opacity = 0;
    }
}

// Update Seekbar
function timeupdateFun() {
    let progress = parseInt((music.currentTime / music.duration) * 100);
    songProgress.value = progress;
}

// changing song current time 
function songCurrentTimeChange() {
    music.currentTime = (songProgress.value * music.duration) / 100;
}

// Playing Music according songIndex
function playMusic() {
    music = new Audio(songsArr[songIndex].songPath);
    music.play();
    music.addEventListener('timeupdate', timeupdateFun);
    changeSongName();
    changePlayingSongIcon();
}

// Playing Next Song
function playNextSong() {
    music.pause();
    songProgress.value = 0;

    // Changing Song Index
    if (songIndex < 8) {
        songIndex++;
    }
    else if (songIndex == 8) {
        songIndex = 0;
    }

    playMusic();
}

// Playing Previous Song
function playPreviousSong() {
    music.pause();
    songProgress.value = 0;

    // Changing Song Index
    if (songIndex > 0) {
        songIndex--;
    }
    else if (songIndex == 0) {
        songIndex = 8;
    }

    playMusic();
}

// Changing Current playing song name
function changeSongName() {
    playerSongName.innerHTML = songsArr[songIndex].songName;
}

// Change playing song icon
function changePlayingSongIcon(){
    songs.forEach( (elem, index)=>{
        
    } )
}

// .................................Main Logic.......................................
masterPlayBtn.addEventListener('click', songPlay);

music.addEventListener('timeupdate', timeupdateFun);
music.addEventListener('play', changeSongName);
music.addEventListener('play', changePlayingSongIcon);

songProgress.addEventListener('change', songCurrentTimeChange);

nextSongBtn.addEventListener('click', playNextSong);

previousSongBtn.addEventListener('click', playPreviousSong);
