/* Open t2 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
Add the following HTML code to the element with id="target":
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
Add class my-item to the second list item */

document.querySelector('#target').
    appendChild(document.createElement('li')).innerHTML = 'First item';

document.querySelector('#target').
    appendChild(document.createElement('li')).innerHTML = 'Second item';

document.querySelector('#target').
    appendChild(document.createElement('li')).innerHTML = 'Third item';

const toinen = document.querySelectorAll('li')[1];
toinen.classList.add('my-item');

