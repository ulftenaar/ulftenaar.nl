
window.onload = function() {
  const denkenfooterHTML = `
    <div class="denkenIndex"  >
     <a href="denkenaan.html">Thuis</a> | 
    <a href="overditalbum.html">Over dit album</a> | 
     <a href="../../index.html">Terug naar Ulftenaar.nl</a> 
    <ol>
        <li><a href="snellefietser.html">Snelle Fietser</a></li>
        <li> <a href="postlude.html">Postlude</a></li>
        <li><a href="afscheid.html">Afscheid</a></li>
        <li><a href="17aug24.html">17 Aug 24</a></li>
        <li><a href="witteprins.html">De Witte Prins op het Zwart Gele Paard</a></li>
        <li><a href="Nuisalles.html">Nu is Alles dat je Hebt</a></li>
        <li><a href="ikkanniksmeeraan.html">Ik Kan Niks meer Aan</a></li>
        <li><a href="17okt.html">17 Okt</a></li>
        <li><a href="jammerdat.html">Jammer dat het Niet Echt is</a></li>
        <li><a href="dewerelddraait.html">De Wereld Draait</a></li>
        <li><a href="9mei.html">9 Mei</a></li>
        <li><a href="ikdenkdatjemehaat.html">Ik denk dat je me Haat</a></li>
        <li><a href="allesgaatdoor.html">Alles Gaat Door</a></li>
        <li><a href="eerstelentedag.html">Eerste Lente Dag</a></li>
      </ol>
    </div>
  `;
// Find the last .denkenCont div and insert the footer there
  const lastDenkenCont = document.querySelectorAll('.denkenCont').length;
  const lastDiv = document.querySelectorAll('.denkenCont')[lastDenkenCont - 1];
  lastDiv.insertAdjacentHTML('beforeend', denkenfooterHTML);

  // Get the current page path (just the file name, not full file path)
  const currentPath = window.location.pathname.split('/').pop();  // Get the file name from the path

  // Get all the links in the footer and check if their href matches the current path
  const links = document.querySelectorAll('.denkenIndex a');
  links.forEach(link => {
    // Get the relative path from the link href
    const linkPath = link.getAttribute('href');

    // If the link path matches the current page path, highlight the link
    if (linkPath === currentPath) {
      link.style.fontWeight = 'bold';  // Make the current page link bold
    }
  });
}


