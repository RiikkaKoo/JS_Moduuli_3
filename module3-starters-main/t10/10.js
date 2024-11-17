/* Open t10 folder in your IDE/editor. Read the first name and last name
values from the form and print them in the <p id="target"> (2p)

remember to stop the default action of the form
you can use attribute selectors in querySelector() to select the <input> elements
example output: Your name is Luke Skywalker */


function lue_lomake(event) {
  event.preventDefault();
  const etunimi = document.querySelector('input[name="firstname"]').value;
  const sukunimi = document.querySelector('input[name="lastname"]').value;
  // console.log('etunimi', etunimi);
  // console.log('sukunimi', sukunimi);

  document.querySelector('#target').innerHTML = `Your name is ${etunimi} ${sukunimi}`;
}

document.querySelector('#source').addEventListener('submit', lue_lomake);