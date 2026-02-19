audioaot=document.querySelector('#achtergrondmuziek');
audiofeniksmuziek=document.querySelector('#feniksmuziek');
audiofeniksfoley=document.querySelector('#feniksfoley');
container=document.querySelector('.witsectie');
zinfeniks=document.querySelector('.witgedicht');
feniksteller=document.querySelector('#feniksteller');
fenikslengte=document.querySelector('#fenikslengte');
witfotoid=document.querySelector('#witfotoid')
// muzieklengte=document.querySelector('#muzieklengte');
// muziekteller=document.querySelector('#muziekteller');
container.addEventListener('mouseover', () => {
	audioaot.muted=true;
	audiofeniksfoley.muted=false;
	audiofeniksmuziek.muted=false;
	feniksteller.style.visibility='visible';
	fenikslengte.style.visibility='visible';
	muzieklengte.style.visibility='hidden';
	muziekteller.style.visibility='hidden';
})

container.addEventListener('mouseleave', () => {
	audioaot.muted=false;
	audiofeniksfoley.muted=true;
	audiofeniksmuziek.muted=true;

	feniksteller.style.visibility='hidden';
	fenikslengte.style.visibility='hidden';
	muzieklengte.style.visibility='visible';
	muziekteller.style.visibility='visible';
})
zinfeniks.addEventListener('mouseover', () => {
	kiesgeluid();
	kiesfoto();
})

function kiesgeluid() {
	var randint = (Math.floor(Math.random()*51)+1)
	audiofeniksfoley.src=`https://file.ulftenaar.nl/aot/feniksfoley/feniksfoley_${randint}.wav`
	feniksteller.innerText=randint
}
audiofeniksfoley.addEventListener("ended",kiesgeluid, false);

function kiesfoto() {
		var randint = (Math.floor(Math.random()*12)+1)
	witfotoid.src=`Media/fotos/witachtergrond/${randint}.jpg`
}
