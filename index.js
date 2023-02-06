function darkMode() {
  var darkToggle = document.body;
  darkToggle.classList.toggle("dark-mode");
}

// navbar show and hide
var lastScrollTop; // Store top position

navbar = document.getElementById('navbar'); // Get the navbar

window.addEventListener('scroll',function(){ // Called on every scroll
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get location on scroll
  
  if(scrollTop > lastScrollTop){ // if it will be greater than the previous, then set the value to the negative of height of navbar 
    navbar.style.top='-80px';
  } else{
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop; //New Position Stored
});