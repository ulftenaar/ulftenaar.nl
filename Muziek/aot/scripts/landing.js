land_description = document.querySelector('#land_description')
land_titel = document.querySelector('#land_titel')
c_land= document.querySelector('#c_land')
var state = 0 
// check();
// klikhier();
c_land.addEventListener('click', () => {
	check();
	// console.log('yeah')

})


function check () {
if (state==1) {
	// land_titel.style.visibility='hidden';
	// land_description.style.visibility='visible'
	
	land_titel.style.display='none';
	land_description.style.display='flex'
	land_live.style.display='none'
		state++
}

else if (state==0) {
	land_titel.style.display='flex';
	land_description.style.display='none'
	land_live.style.display='none'
		state++
}

else if (state==2) {
	land_titel.style.display='none';
	land_description.style.display='none'
	land_live.style.display='flex'
		state=0
}
}
