const audio = document.querySelector ('#achtergrondmuziek')
const button = document.querySelector ('#stopmuziekknop')
var toggle = 0
function stopsong () {
	audio.muted = true;
	button.innerText='ontstop de muziek'
	toggle=1
}

function startsong() {
	audio.muted = false;
	button.innerText='stop de muziek'
	toggle=0

}

button.addEventListener ('click', () => {
	if (toggle==0) {
		stopsong();
		// console.log('ho')
	}
	else {
		console.log('hey!');
		startsong();
	}
})
