let zinnen = [ "Ik hoop dat je een onwijs fijne dag hebt vandaag", "Moge de reigers je vandaag het licht laten zien", "Geniet van de zon als die er is anders zijn de wolken ook best mooi als je er lang genoeg naar kijkt","drink eens een heel klein beetje water of thee mag ook en als je dat al te veel hebt gedaan drink nog een beetje en vergeet er vooral niet dankbaar voor te zijn",
"Wat heb je gister voor leuks gedaan? heb je daar vandaag wel aan gedacht?",
"Heb je een liedje dat je iemand kan aanraden? doe dat dan vooral ook want hoe leuk is dat altijd om te krijgen en dan vooral om het echt niet te luisteren"]
let i = Math.floor(Math.random() * zinnen.length);
let r = zinnen[i];
console.log(r);

let woorden = ["ja", "soep", "reiger", "mens", "persoon", "liefde", "zijn", "ben", "ongeloofelijk", "schoonheid", "mooi", "menselijk", "zon", "maan", "de", "het", "een", "samen", "eventjes", "nooit", "overweldigend", "bewonderaar", "dankbaar", "capibara", "rooibosthee", "met", "gezelschap", "maar", "de", "een", "de", "blauwe", "groene", "snapje", "gemeenschap", "gele", "laarsjes", "grasveld", "wijsheid", "de", "maar","bos", "schapen"]
let zin = []; 

for (i=0;i<10;i++){
  let m = Math.floor(Math.random() * woorden.length)
  zin.push(woorden[m]);
  
}
let zinstring = zin.join(' ');

console.log (zinstring);

const box = document.getElementById('zinpopuptext');
box.insertAdjacentText('afterbegin', r);
box.insertAdjacentText('beforeend', zinstring)

