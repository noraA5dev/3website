let portrait = window.matchMedia("(orientation: portrait)");

const box = document.getElementById('box');

portrait.addEventListener("change", function(e) {
    if(e.matches) {
      box.style.backgroundColor = 'yellow';
    } else {
      box.style.backgroundColor = 'purple';
    }
})

screen.orientation.addEventListener("change", function(e) {
  // Do something on change
});
