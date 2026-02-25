land_description = document.querySelector('#land_description')
land_titel = document.querySelector('#land_titel')
c_land= document.querySelector('#c_land')
var state = false 
// check();
// klikhier();
c_land.addEventListener('click', () => {
	state = !state;
	check();
	console.log('yeah')

})


function check () {
if (state==true) {
	// land_titel.style.visibility='hidden';
	// land_description.style.visibility='visible'
	
	land_titel.style.display='none';
	land_description.style.display='flex'
}

else if (state==false) {
	land_titel.style.display='flex';
	land_description.style.display='none'
}
}
