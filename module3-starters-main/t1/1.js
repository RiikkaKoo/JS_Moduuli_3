/* Open t1 folder in your IDE/editor. Add HTML by using innerHTML property (2p)
Add the following HTML code to the element with id="target":
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
Add class my-list to the element with id="target" */

const sisältö = `<li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>`;

document.querySelector('#target').innerHTML = sisältö;

let kohde = document.querySelector('#target');
kohde.classList.add('my-list');