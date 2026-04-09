const songtitel = document.querySelector('#songtitel');
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const albumaudio = document.querySelector('#albumaudio')
let songs = ['duszegdannietdatjenogvanmehoudt', 'kast','24nov25', 'slaapzacht', 'landen', 'hoehetwasomvanjetehouden','blauw','alswesamenbeterzijn','vaarwel','visophetdroge']
const knop_prev = document.querySelector('#knop_prev');
const knop_stop = document.querySelector('#knop_stop');
const knop_pause = document.querySelector('#knop_pause');
const knop_next = document.querySelector('#knop_next');
const knop_startalbum = document.querySelector('#knop_startalbum')
const info_nummer = document.querySelector('#info_nummer');
const playermenu = document.querySelector('.playermenu');
const sections = document.querySelectorAll('[id^="sec"]')
const randommedias = document.querySelectorAll('.randommedia')

let songindex =0;
let albumplaying = false;
let blendmodes=["difference", "soft-light", "exclusion", "luminosity", "color-dodge"]

sections[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
// playalbum();

// window.onbeforeunload = function (e) {
//         return "weet je het zeker?";
//     };

function playsong () {
  albumaudio.src=`https://file.ulftenaar.nl/aot/Albumaot/${songs[songindex]}.wav`;
  info_nummer.innerText=`speelt nu: ${songindex+1}: ${songs[songindex]}`;  
  sections[songindex+1].scrollIntoView();
}

function stopalbum (){
  if (albumplaying==true) {
  albumaudio.pause();
  songindex=0;
    albumplaying=false;
    knop_stop.innerText='start';
    info_nummer.innerText=''
  sections[0].scrollIntoView();
  }
  else if (albumplaying==false) {
    knop_stop.innerText='stop'
    playalbum();
  }
}

function pausealbum (){
if (albumaudio.duration > 0 && !albumaudio.paused) {
  albumaudio.pause();
  knop_pause.innerText = "speel"
  info_nummer.innerText=`gepauzeerd: ${songindex + 1}: ${songs[songindex]}`
} else {
knop_pause.innerText = "pauzeer"
albumaudio.play();
  info_nummer.innerText=`speelt nu: ${songindex+1}: ${songs[songindex]}`;  
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
albumplaying=true;
playermenu.style.display='flex';
knop_pause.innerText = "pauzeer"
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

  randommedias.forEach(function (val, i, list) {
  randommedias[i].style.top=`${(Math.random() *(vh*0.75))}px`;
  randommedias[i].style.left=`${(Math.random() *(vw*0.75))}px`;
  randommedias[i].style.width=`${((Math.random() *(vw*0.75)) + vw*0.1)}px`;
  randommedias[i].style.height=`${((Math.random() *(vh*0.75)) + vh*0.1)}px`;
  // randommedias[i].style.mix_blend_mode=`${blendmodes[Math.floor(Math.random()*blendmodes.length)]}`;
})

// buttons 

knop_prev.addEventListener('click', prevsong);
knop_stop.addEventListener('click', stopalbum);
knop_pause.addEventListener('click', pausealbum);
knop_next.addEventListener('click', nextsong);
knop_startalbum.addEventListener('click', playalbum);

