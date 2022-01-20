console.log("hello world")

let audioElement;

let audioElement1 = new Audio("songs/1.mp3")
let audioElement2 = new Audio("songs/2.mp3")
let audioElement3 = new Audio("songs/3.mp3")
let audioElement4 = new Audio("songs/4.mp3")
let audioElement5 = new Audio("songs/5.mp3")
let audioElement6 = new Audio("songs/6.mp3")
let audioElement7 = new Audio("songs/7.mp3")
let audioElement8 = new Audio("songs/8.mp3")
let audioElement9 = new Audio("songs/9.mp3")

let audioElements = [audioElement1, audioElement2, audioElement3, audioElement4, audioElement5, audioElement6, audioElement7, audioElement8, audioElement9];

let play = document.getElementById("playSong");
let progressBar = document.getElementById("progressBar");


//pause other songs
function otherSongsPause() {
    audioElement1.pause();
    audioElement2.pause();
    audioElement3.pause();
    audioElement4.pause();
    audioElement5.pause();
    audioElement6.pause();
    audioElement7.pause();
    audioElement8.pause();
    audioElement9.pause();

    document.getElementById('1').src = 'play.PNG';
    document.getElementById('2').src = 'play.PNG';
    document.getElementById('3').src = 'play.PNG';
    document.getElementById('4').src = 'play.PNG';
    document.getElementById('5').src = 'play.PNG';
    document.getElementById('6').src = 'play.PNG';
    document.getElementById('7').src = 'play.PNG';
    document.getElementById('8').src = 'play.PNG';
    document.getElementById('9').src = 'play.PNG';
}


//progress bar for every song using function

function songProgress() {
    audioElement.addEventListener('timeupdate', function() {
        console.log('timeUpdate');
        progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        progressBar.value = progress;
    });

    progressBar.addEventListener('change', () => {
        audioElement.currentTime = progressBar.value * audioElement.duration / 100;
    });

}



//individual plays

//1

document.getElementById('1').addEventListener('click', ourSong1)

function ourSong1() {
    if (audioElement1.paused) {

        otherSongsPause();
        audioElement1.play();
        document.getElementById('1').src = 'pause.PNG';
        play.src = 'covers/1.jpg';
        document.getElementById("songPlaying").innerHTML = "High Rated Gabru";
        audioElement = audioElement1;
        songProgress();
        document.getElementById("nextSong").addEventListener('click', ourSong2)
        document.getElementById("previousSong").addEventListener('click', ourSong9)


    } else {
        audioElement1.pause();
        document.getElementById('1').src = 'play.PNG';
        document.getElementById("songPlaying").innerHTML = "song name";
    }

}

//2
document.getElementById('2').addEventListener('click', ourSong2)

function ourSong2() {
    if (audioElement2.paused) {

        otherSongsPause();
        audioElement2.play();
        document.getElementById('2').src = 'pause.PNG';
        play.src = 'covers/2.PNG';
        document.getElementById("songPlaying").innerHTML = "Crazy Habibi";
        audioElement = audioElement2;
        songProgress();
        document.getElementById("nextSong").addEventListener('click', ourSong3)
        document.getElementById("previousSong").addEventListener('click', ourSong1)

    } else {
        audioElement2.pause();
        document.getElementById('2').src = 'play.PNG';
        document.getElementById("songPlaying").innerHTML = "song name";
    }

}
//3
document.getElementById('3').addEventListener('click', ourSong3)

function ourSong3() {
    if (audioElement3.paused) {

        otherSongsPause();
        audioElement3.play();
        document.getElementById('3').src = 'pause.PNG';
        play.src = 'covers/3.PNG';
        document.getElementById("songPlaying").innerHTML = "Downtown";
        audioElement = audioElement3;
        songProgress();
        document.getElementById("nextSong").addEventListener('click', ourSong4)
        document.getElementById("previousSong").addEventListener('click', ourSong2)

    } else {
        audioElement3.pause();
        document.getElementById('3').src = 'play.PNG';
        document.getElementById("songPlaying").innerHTML = "song name";
    }

}
//4
document.getElementById('4').addEventListener('click', ourSong4)

function ourSong4() {
    if (audioElement4.paused) {

        otherSongsPause();
        audioElement4.play();
        document.getElementById('4').src = 'pause.PNG';
        play.src = 'covers/4.PNG';
        document.getElementById("songPlaying").innerHTML = "Ishare Tere";
        audioElement = audioElement4;
        songProgress();
        document.getElementById("nextSong").addEventListener('click', ourSong5)
        document.getElementById("previousSong").addEventListener('click', ourSong3)

    } else {
        audioElement4.pause();
        document.getElementById('4').src = 'play.PNG';
        document.getElementById("songPlaying").innerHTML = "song name";
    }

}
//5
document.getElementById('5').addEventListener('click', ourSong5)

function ourSong5() {
    if (audioElement5.paused) {

        otherSongsPause();
        audioElement5.play();
        document.getElementById('5').src = 'pause.PNG';
        play.src = 'covers/5.PNG';
        document.getElementById("songPlaying").innerHTML = "Lahore";
        audioElement = audioElement5;
        songProgress();
        document.getElementById("nextSong").addEventListener('click', ourSong6)
        document.getElementById("previousSong").addEventListener('click', ourSong4)

    } else {
        audioElement5.pause();
        document.getElementById('5').src = 'play.PNG';
        document.getElementById("songPlaying").innerHTML = "song name";
    }

}
//6
document.getElementById('6').addEventListener('click', ourSong6)

function ourSong6() {
    if (audioElement6.paused) {

        otherSongsPause();
        audioElement6.play();
        document.getElementById('6').src = 'pause.PNG';
        play.src = 'covers/6.PNG';
        document.getElementById("songPlaying").innerHTML = "Made In India";
        audioElement = audioElement6;
        songProgress();
        document.getElementById("nextSong").addEventListener('click', ourSong7)
        document.getElementById("previousSong").addEventListener('click', ourSong5)

    } else {
        audioElement6.pause();
        document.getElementById('6').src = 'play.PNG';
        document.getElementById("songPlaying").innerHTML = "song name";
    }

}
//7
document.getElementById('7').addEventListener('click', ourSong7)

function ourSong7() {
    if (audioElement7.paused) {

        otherSongsPause();
        audioElement7.play();
        document.getElementById('7').src = 'pause.PNG';
        play.src = 'covers/7.PNG';
        document.getElementById("songPlaying").innerHTML = "Slowly Slowly";
        audioElement = audioElement7;
        songProgress();
        document.getElementById("nextSong").addEventListener('click', ourSong8)
        document.getElementById("previousSong").addEventListener('click', ourSong6)

    } else {
        audioElement7.pause();
        document.getElementById('7').src = 'play.PNG';
        document.getElementById("songPlaying").innerHTML = "song name";
    }

}
//8
document.getElementById('8').addEventListener('click', ourSong8)

function ourSong8() {
    if (audioElement8.paused) {

        otherSongsPause();
        audioElement8.play();
        document.getElementById('8').src = 'pause.PNG';
        play.src = 'covers/8.PNG';
        document.getElementById("songPlaying").innerHTML = "Surma Surma";
        audioElement = audioElement8;
        songProgress();
        document.getElementById("nextSong").addEventListener('click', ourSong9)
        document.getElementById("previousSong").addEventListener('click', ourSong7)

    } else {
        audioElement8.pause();
        document.getElementById('8').src = 'play.PNG';
        document.getElementById("songPlaying").innerHTML = "song name";
    }

}
//9
document.getElementById('9').addEventListener('click', ourSong9)

function ourSong9() {
    if (audioElement9.paused) {

        otherSongsPause();
        audioElement9.play();
        document.getElementById('9').src = 'pause.PNG';
        play.src = 'covers/9.PNG';
        document.getElementById("songPlaying").innerHTML = "Banja Rani";
        audioElement = audioElement9;
        songProgress();
        document.getElementById("nextSong").addEventListener('click', ourSong1)
        document.getElementById("previousSong").addEventListener('click', ourSong8)

    } else {
        audioElement9.pause();
        document.getElementById('9').src = 'play.PNG';
        document.getElementById("songPlaying").innerHTML = "song name";
    }

}