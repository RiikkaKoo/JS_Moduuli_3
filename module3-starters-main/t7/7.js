/* Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
when user mouses over <p id="trigger"> change the picture of <img id="target">
form picA.jpg to picB.jpg when user mouses off, change the picture back to original */

const laukaisin = document.querySelector('#trigger');

function hover_event(event) {
  let muutettava = document.querySelector('#target');
  muutettava.src = 'img/picB.jpg';
}

function palauta(event) {
  let muutettava = document.querySelector('#target');
  muutettava.src = 'img/picA.jpg';
}

laukaisin.addEventListener('mouseenter', hover_event);
laukaisin.addEventListener('mouseleave', palauta);