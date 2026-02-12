const title = document.querySelector('#player_titel');
const audio = document.querySelector('#player_audio');
const cover = document.querySelector('#player_cover');
const download = document.querySelector('#player_download');
const downloadlink = document.querySelector('#player_downloadlink')
const next = document.querySelector('#player_next');
const description = document.querySelector('#player_description')
const info_length = document.querySelector('#player_info_length')
const info_index = document.querySelector('#player_info_index') 

const songs = ["alles flitst voorbij", "melodica in de bergen", "waar zoekt een mens als een mens alles heeft gevonden", "wat zie je als je in de spiegel kijkt","het dorp", "paganini", "voel het in je schoenen", "hoe kan het zijn", "wat hou je nog over dan", "ik staar je aan", "het is altijd hetzelfde lied", "wie kan ik bedanken", "stiekem verliefd", "vandaag is niet zo'n dag", "zijn de vogels er dan nog", "ik dans met de duivel", "terwijl er iemand geen huis heeft", "als ik ooit nog jou verliezen zou", "als je niet leeft voor vandaag", "wat is het leven mooi als je iemand mist","dit land staat scheef", "op mijn gezicht, de jouwe ook", "ik niet", "wat is het vredig hier", "op een dag als alle anderen", "een relschopper in de rechtbank", "heb ik half mijn geluk al gehad", "ik heb het weer gedaan"];

newSong();

function loadSong(song, index) {
  title.innerText = song;
  // CORRECT logging

  // CORRECT audio source
  audio.src = `https://file.ulftenaar.nl/webplayer/muziek/${song}.wav`;

  // CORRECT background image
  cover.style.backgroundImage = `url("Muziek/webplayer/foto/${song}.jpg")`;

  // description.innerText = fetch(`http://localhost/Muziek/webplayer/tekst/${song}.txt`)
  //   .then(response => response.text())
  //   .then((data) => {
  //     console.log(data)
  //   })
downloadlink.href = `https://file.ulftenaar.nl/webplayer/muziek/${song}.wav`;
info_length.innerText = songs.length;
info_index.innerText = (index+1);
  console.log(index);

loadTextFile(song);
}

next.addEventListener('click', () => {
newSong()
}
)

function newSong() {
// random I generenren 
  // nummertitelpakken uit lijst met i
  // loadsonguitvoeren met songtitel

const i = Math.floor(Math.random() * songs.length);
loadSong(songs[i], i);
}

function loadTextFile(song) {
fetch(`/Muziek/webplayer/tekst/${song}.txt`)
  .then(response => response.text())
  .then((data) => {
    console.log(data);
    description.innerText = data;
  })

}

