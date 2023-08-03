// ABOUT
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.getElementsByClassName('about-btn');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      this.classList.toggle('active');
      var subnav = this.nextElementSibling;
      if (this.classList.contains('active')) {
        subnav.style.maxHeight = subnav.scrollHeight + 'px';
      } else {
        subnav.style.maxHeight = '0';
      }
    });
  }
});

// OTHER BUTTONS
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.getElementsByClassName('nav-btn');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      this.classList.toggle('active');
      var subnav = this.nextElementSibling;
      if (this.classList.contains('active')) {
        subnav.style.maxHeight = subnav.scrollHeight + 'px';
      } else {
        subnav.style.maxHeight = '0';
      }
    });
  }
});

