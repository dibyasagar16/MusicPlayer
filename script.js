let index = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let progressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let trackItem = Array.from(document.getElementsByClassName('track-item'));
let trackPlay = Array.from(document.getElementsByClassName('track-play'));
let playingTrack = document.getElementById('playing-track');
let muteUnmute = document.getElementById('mute-unmute');

let songs = [
    { songName: "Makasaam", songDuration: "5:22", artistName: "KR$NA", filePath: "Songs/1.mp3", coverPath: "Images/Covers/1.jpg" },
    { songName: "Maharani", songDuration: "3:32", artistName: "KR$NA", filePath: "Songs/2.mp3", coverPath: "Images/Covers/2.jpg" },
    { songName: "No Cap", songDuration: "3:26", artistName: "KR$NA", filePath: "Songs/3.mp3", coverPath: "Images/Covers/3.jpg" },
    { songName: "Zero After Zero", songDuration: "2:55", artistName: "KR$NA", filePath: "Songs/4.mp3", coverPath: "Images/Covers/4.jpg" },
    { songName: "Hola Amigo", songDuration: "3:46", artistName: "KR$NA", filePath: "Songs/5.mp3", coverPath: "Images/Covers/5.jpg" },
    { songName: "Prathana", songDuration: "3:20", artistName: "KR$NA", filePath: "Songs/6.mp3", coverPath: "Images/Covers/6.jpg" },
    { songName: "Kaha Tak", songDuration: "3:34", artistName: "KR$NA", filePath: "Songs/7.mp3", coverPath: "Images/Covers/7.jpg" },
    { songName: "Fall Off", songDuration: "2:44", artistName: "KR$NA", filePath: "Songs/8.mp3", coverPath: "Images/Covers/8.jpg" },
    { songName: "Saza-e-Maut", songDuration: "3:00", artistName: "KR$NA", filePath: "Songs/9.mp3", coverPath: "Images/Covers/9.jpg" },
    { songName: "Khatta Flow", songDuration: "2:33", artistName: "KR$NA", filePath: "Songs/10.mp3", coverPath: "Images/Covers/10.jpg" },
    { songName: "Makasaam", songDuration: "5:22", artistName: "KR$NA", filePath: "Songs/1.mp3", coverPath: "Images/Covers/1.jpg" },
    { songName: "Maharani", songDuration: "3:32", artistName: "KR$NA", filePath: "Songs/2.mp3", coverPath: "Images/Covers/2.jpg" },
    { songName: "No Cap", songDuration: "3:26", artistName: "KR$NA", filePath: "Songs/3.mp3", coverPath: "Images/Covers/3.jpg" },
    { songName: "Zero After Zero", songDuration: "2:55", artistName: "KR$NA", filePath: "Songs/4.mp3", coverPath: "Images/Covers/4.jpg" },
    { songName: "Hola Amigo", songDuration: "3:46", artistName: "KR$NA", filePath: "Songs/5.mp3", coverPath: "Images/Covers/5.jpg" },
    { songName: "Prathana", songDuration: "3:20", artistName: "KR$NA", filePath: "Songs/6.mp3", coverPath: "Images/Covers/6.jpg" },
    { songName: "Kaha Tak", songDuration: "3:34", artistName: "KR$NA", filePath: "Songs/7.mp3", coverPath: "Images/Covers/7.jpg" },
    { songName: "Fall Off", songDuration: "2:44", artistName: "KR$NA", filePath: "Songs/8.mp3", coverPath: "Images/Covers/8.jpg" },
    { songName: "Saza-e-Maut", songDuration: "3:00", artistName: "KR$NA", filePath: "Songs/9.mp3", coverPath: "Images/Covers/9.jpg" },
    { songName: "Khatta Flow", songDuration: "2:33", artistName: "KR$NA", filePath: "Songs/10.mp3", coverPath: "Images/Covers/10.jpg" }
]
//To add the Details of the Songs
trackItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('track-name')[0].innerText = songs[i].songName + "-" + songs[i].artistName;
    element.getElementsByClassName('track-duration')[0].innerText = songs[i].songDuration;
})

//To handle Play/Pause
masterPlay.addEventListener('click', () => {
    makeAllPlay();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


//Update Progress Bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})

//To Make Play/Pause of Individual Song
const makeAllPlay = () => {
    trackPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
trackPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        index = parseInt(e.target.id);
        if (e.target.classList.contains('fa-circle-play')) {
            makeAllPlay();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `Songs/${index + 1}.mp3`;
            playingTrack.innerText = songs[index].songName + " - " + songs[index].artistName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.add('fa-pause-circle');
            masterPlay.classList.remove('fa-play-circle');
        } else {
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');

        }
    })
})

//Next song Handler
next.addEventListener('click', () => {
    if (index >= 9) {
        index = 0;
    } else {
        index += 1;
    }
    audioElement.src = `Songs/${index + 1}.mp3`;
    playingTrack.innerText = songs[index].songName + " - " + songs[index].artistName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

//Previous Song Handler
previous.addEventListener('click', () => {
    if (index <= 0) {
        index = 0;
    } else {
        index -= 1;
    }
    audioElement.src = `Songs/${index + 1}.mp3`;
    playingTrack.innerText = songs[index].songName + " - " + songs[index].artistName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
})

//Mute unmute Handler
muteUnmute.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-volume-high')) {
        audioElement.muted = true;
        e.target.classList.remove('fa-volume-high');
        e.target.classList.add('fa-volume-xmark');
    } else {
        audioElement.muted = false;
        e.target.classList.remove('fa-volume-xmark');
        e.target.classList.add('fa-volume-high');
    }
})

