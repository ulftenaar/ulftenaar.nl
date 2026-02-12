const woorden = ['zon', 'maan', 'sterren', 'samen', 'vliegen',
'blauw',
'tranen',
'herinneringen',
'water',
'in de wolken zijn we samen',
'ik gaf je de sterren, jij me de maan', "zo blauw als het water en bosbessen en de nacht",
"komt er ooit een dag",
"dat we samen beter zijn",
"dat we samen vliegen",
"zal ik het ooit nog voelen",
"wat denk ik als ik jou zie",
"als jij ook beter bent",
"was ik het waard?",
"waren wij het waard?",
"alle opgedroogde tranen",
"zou je het nog eens doen",
"onder de sterren liet ik je gaan",
"de ogen die ik duizend nachten liefhad",
"voor ik vergeten ben",
"de tranen die ik niet weg kwam vegen",
"hoe de aarde zweeg",
"jouw handen die de mijne vonden",
"ik ga alles langs",
"wat ik zelf ook niet wist",
"kon ik niet vertellen",
"ik weet het zo zeker als dat",
"twee meer is dan voorheen",
"en dat samen beter is dan alleen",
"de tranen op je wangen",
"de wind huilt voor je",
"de wolken vliegen voor je",
"ik ben gestopt met de dagen aftellen",
"dan kijk ik naar jouw plank spullen",
"en besef ik dat ik die daar voorlopig nog liever even laat liggen",
"wat boeken met jouw naam erop",
"vroeger was ik er ook al bang voor",
"een onvoorkombaar, ondraagelijk verlies"
]

const audiosrc = ['reigerstromp', 'hoehetwastromp2', 'hoehetwasgit', '12jangit', 'blauwaot', "12jantromp", "duszeggit", 'duszegwind']


let div = document.querySelector('.woorden')

let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const audiochange = document.querySelector("#achtergrondmuziek");
const varachtergrond = document.querySelector("#varachtergrond");
const vartekst = document.querySelector('.vartekst')
const vartekstcontainer = document.querySelector('.vartekst_container')
let audiorand = 0;
const muziekteller = document.querySelector('#muziekteller')
const muzieklengte = document.querySelector ('#muzieklengte')

wisselwoorden();
scandiv();
audiohover();
// verandertekst ();
vartekstcontainer.style.visibility = 'hidden'

function wisselwoorden() {
for (i=0;i<woorden.length; i++) {

	if (i<audiosrc.length) {
	div.insertAdjacentHTML("beforeend",`<div class="woordclick" style="top:${
	(Math.random()*vh)}px;
	left:${(Math.random() *(vw))}px"}
	>${woorden[i]}</div>`)
		}
		else {	
	div.insertAdjacentHTML("beforeend",`<div class="woord" style="top:${
	(Math.random()*vh)}px;
	left:${(Math.random() *(vw*0,5))}px"}
	>${woorden[i]}</div>`)
		}
        scandiv();
	audiohover();
}
}

function verwijderwoorden () {
document.querySelectorAll('.woord').forEach(function(item) {
		item.remove();	
})

document.querySelectorAll('.woordclick').forEach(function(item) {
		item.remove();	
})
}

function scandiv() {

document.querySelectorAll('.woord').forEach(function(item) {
  item.addEventListener('click', function() {
		verwijderwoorden();
		wisselwoorden();
		
  });
});


}
document.addEventListener('DOMContentLoaded', audiohover);

function audiohover () {
  document.querySelectorAll('.woordclick').forEach(function(item) {
    item.addEventListener('click', handleClick);
  });
}

function handleClick() {
  audiorand = Math.floor(Math.random() * audiosrc.length);
  audiochange.src = `Media/audio/aotdemos/${audiosrc[audiorand]}.wav`;  
  veranderachtergrond();
  verandertekst();
  counterfunc();
  audiochange.loop = false;
  
// Source - https://stackoverflow.com/a/9346630
// Posted by Derek 朕會功夫, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-12, License - CC BY-SA 3.0

  audiochange.addEventListener("ended", handleClick, false);

}

function veranderachtergrond () {
	varachtergrond.src=`Media/fotos/varachtergrond/${audiosrc[audiorand]}.jpg`
}

function verandertekst() {
vartekstcontainer.style.visibility = 'visible'

fetch(`Media/tekst/vartekst/${audiosrc[audiorand]}.txt`)
  .then(response => response.text())

  .then((data) => {
    vartekst.innerText = data;
  })
}

function counterfunc() {
// var x = document.querySelector('#achtergrondmuziek').duration 
muziekteller.innerText = `${audiorand+1}/${audiosrc.length}`
// muzieklengte.innerText = x
}
