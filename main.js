
let bar = document.getElementById('bar');
let close = document.getElementById('close');
let nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active'); // Show the menu
    close.style.display = 'block'; // Show the close button
    bar.style.display = 'none'; // Hide the menu icon
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active'); // Hide the menu
    close.style.display = 'none'; // Hide the close button
    bar.style.display = 'block'; // Show the menu icon
  });
}