// menu1 = document.querySelector('#menu1');
// menu2 = document.querySelector('#menu2');
// menu3 = document.querySelector('#menu3');
// manu4 = document.querySelector('#menu4')
// menu5 = document.querySelector('#menu5');
// menu6 = document.querySelector('#menu6');
// var toggleState = 4;
//
// menucontent1 = document.querySelector('#menucontent1');
// menucontent2 = document.querySelector('#menucontent2');
// menucontent3 = document.querySelector('#menucontent3');
// menucontent4 = document.querySelector('#menucontent4')
// menucontent5 = document.querySelector('#menucontent5');
// menucontent6 = document.querySelector('#menucontent6');
//
// menu1.addEventListener('click', () => {
// 	toggleState=1;
// 	console.log("yeah")
// })
// menu2.addEventListener('click', () => {
// 	toggleState=2;
// })
//
// menu3.addEventListener('click', () => {
// 	toggleState=3;
// })
//
// menu4.addEventListener('click', () => {
// 	toggleState=4	;
// })
// menu5.addEventListener('click', () => {
// 	toggleState=5;
// })
//
// if (toggleState===1) {
// 	menucontent1.style.display="flex";
// }
// 	else if (toggleState != 1){
// 		menucontent1.style.display="none";
// 	}
// if (toggleState===2) {
// 	menucontent2.style.display="flex";
// }
// 	else{
// 		menucontent2.style.display="none";
// 	}
// if (toggleState===3) {
// 	menucontent3.style.display="flex";
// }
// 	else{
// 		menucontent3.style.display="none";
// 	}
// if (toggleState===4) {
// 	menucontent4.style.display="flex";
// }
// 	else{
// 		menucontent4.style.display="none";
// 	}
// if (toggleState===5) {
// 	menucontent5.style.display="flex";
// }
// 	else{
// 		menucontent5.style.display="none";
const menus = document.querySelectorAll('[id^="menu"]');
const contents = document.querySelectorAll('[id^="menucontent"]');
menu1 = document.querySelector('#menucontent1')

menu1.style.display = "flex";
menus.forEach((menu, index) => {
	contents.forEach((content, i) => {
		content.style.display="none"
	})
	contents[0].style.display="flex"
  menu.addEventListener('click', () => {
    contents.forEach((content, i) => {
      content.style.display = (i === index) ? "flex" : "none";
    });
  });
}); 	
