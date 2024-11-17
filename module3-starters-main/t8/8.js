/* Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
There are two input fields where user enters numbers. Based on the drop-down
list, calculator performs addition, subtraction, multiplication or division of
these two numbers.

Use the value attribute of <option> elements to decide which operation the
calculator needs to do. Example.
Show the result in <p id="result"> when the button is clicked. */

const painike = document.querySelector('#start');

function laskin(event) {
  event.preventDefault();
  const eka_nro = parseFloat(document.querySelector('#num1').value);
  const toka_nro = parseFloat(document.querySelector('#num2').value);
  const toiminto = document.querySelector('#operation').value;
  const tulokset = document.querySelector('#result');
  // console.log('num1', eka_nro);
  // console.log('num2', toka_nro);
  // console.log('valinta', toiminto);
  let tulos = 0;
  if (toiminto === 'add') {
    tulos = eka_nro + toka_nro;
  } else if (toiminto === 'sub') {
    tulos = eka_nro - toka_nro;
  } else if (toiminto === 'multi') {
    tulos = eka_nro * toka_nro;
  } else if (toiminto === 'div') {
    tulos = eka_nro / toka_nro;
  }
  tulokset.innerText = `Tulos: ${tulos}`;
}

painike.addEventListener('click', laskin);