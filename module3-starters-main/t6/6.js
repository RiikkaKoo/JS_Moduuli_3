/* Open t6 folder in your IDE/editor. Make a script that opens an alert
 window that says 'Button Clicked' when the <button> element is clicked. (1p) */

const nappula = document.querySelector('button');

nappula.addEventListener('click', function(n_event) {
  alert('Button Clicked');
});