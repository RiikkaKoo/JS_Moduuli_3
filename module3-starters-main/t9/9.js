/* Open t9 folder in your IDE/editor. This is continuation to previous task.
There is only one text field left, where the user writes the calculation
(addition, subtraction, multiplication or division) (4p)
You can use the includes and split methods.
eval() function is prohibited
No need to support decimal numbers, calculating integers is enough.
Example inputs: 3+5, 2-78, 3/6, etc... */

const suorita = document.querySelector('#start');

function laske(event) {
  let tulos = 0;
  let laskutoimitus = document.querySelector('#calculation').value;
  console.log(laskutoimitus);

  if (laskutoimitus.includes('+')) {
    const summa = laskutoimitus.split('+');
    console.log(summa);
    tulos = parseFloat(summa[0]) + parseFloat(summa[1]);

  } else if (laskutoimitus.includes('-')) {
    const erotus = laskutoimitus.split('-');
    console.log(erotus);
    tulos = parseFloat(erotus[0]) - parseFloat(erotus[1]);

  } else if (laskutoimitus.includes('*')) {
    const tulo = laskutoimitus.split('*');
    console.log(tulo);
    tulos = parseFloat(tulo[0]) * parseFloat(tulo[1]);

  } else if (laskutoimitus.includes('/')) {
    const osamaara = laskutoimitus.split('/');
    console.log(osamaara);
    tulos = parseFloat(osamaara[0]) / parseFloat(osamaara[1]);
  }
  console.log(tulos);
  document.querySelector('#result').innerText = `Tulos: ${tulos}`;
}

suorita.addEventListener('click', laske);