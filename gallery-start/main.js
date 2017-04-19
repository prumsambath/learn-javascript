var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1; i <= 5; i++) {
  var newImg = document.createElement('img');
  newImg.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImg);

  newImg.addEventListener('click', viewImage);
}

function viewImage() {
  displayedImage.setAttribute('src', this.getAttribute('src'));
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  var className = this.getAttribute('class');
  if (className === 'dark') {
    this.setAttribute('class', 'light');
    this.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  else if (className === 'light') {
    this.setAttribute('class', 'dark');
    this.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.0)';
  }
}

