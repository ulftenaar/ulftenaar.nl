const songtitel = document.querySelector('#songtitel');
const albumaudio = document.querySelector('#albumaudio')
let songs = ['duszegdannietdatjenogvanmehoudt', 'kast','24nov25', 'slaapzacht', 'landen', 'hoehetwasomvanjetehouden','blauw','alswesamenbeterzijn','vaarwel','visophetdroge']
let songindex = 0;
const knop_prev = document.querySelector('#knop_prev');
const knop_stop = document.querySelector('#knop_stop');
const knop_pause = document.querySelector('#knop_pause');
const knop_next = document.querySelector('#knop_next');

function playsong () {
  albumaudio.src=`https://file.ulftenaar.nl/aot/Albumaot/${songs[songindex]}.wav`;

}

function stopalbum (){
  albumaudio.pause();
  songindex=0;
}

function pausealbum (){
if (albumaudio.duration > 0 && !albumaudio.paused) {
console.log("ikspeel");
  albumaudio.pause();
  knop_pause.innerText = "speel"
} else {
    //Not playing...maybe paused, stopped or never played.
knop_pause.innerText = "pauzeer"
albumaudio.play();
}
}

function nextsong () {
  if (songindex <= 8) {
  songindex ++
  playsong()
  }
  else if (songindex > 8) {
    console.log("het einde is bereikt")
  }
}

function prevsong(){
  if (songindex > 0) {
    songindex--
    playsong()
  }
  else if (songindex <= 0) {
    console.log("het begin is bereikt")
  }
}

function playalbum () {
playsong(songindex);
albumaudio.play();
albumaudio.addEventListener('ended', function() {
  songindex++;
  playsong();
  if (songindex > songs.length) {
    stopalbum();
    songindex=0;
  }

}  )
}

// buttons 

knop_prev.addEventListener('click', prevsong);
knop_stop.addEventListener('click', stopalbum);
knop_pause.addEventListener('click', pausealbum);
knop_next.addEventListener('click', nextsong);

