document.addEventListener('DOMContentLoaded', function() {
  const signupPanel = document.getElementById('signup-panel');
  const createAccountBtn = document.querySelector('button[onclick*="signup-panel"][onclick*="block"]');
  const backToSignInBtn = document.querySelector('#signup-panel button[onclick*="none"]');
  if (signupPanel && createAccountBtn && backToSignInBtn) {
    createAccountBtn.addEventListener('click', function() {
      signupPanel.style.display = 'block';
      window.scrollTo(0, document.body.scrollHeight);
    });
    backToSignInBtn.addEventListener('click', function() {
      signupPanel.style.display = 'none';
      window.scrollTo(0, 0);
    });
  }

  const inputs = document.querySelectorAll('input[type="email"], input[type="password"], input[type="text"]');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.boxShadow = '0 0 0 2px #cce6ff';
      this.style.borderColor = '#0078d7';
    });
    input.addEventListener('blur', function() {
      this.style.boxShadow = '';
      this.style.borderColor = '#ccc';
    });
  });

  document.querySelectorAll('input[type="password"]').forEach(function(pwInput) {
    const wrapper = pwInput.parentElement;
    if (!wrapper.querySelector('.toggle-pw')) {
      const toggle = document.createElement('span');
      toggle.textContent = 'Show';
      toggle.className = 'toggle-pw';
      toggle.style.cssText = 'margin-left:8px; cursor:pointer; color:#0078d7; font-size:0.95rem; user-select:none;';
      toggle.addEventListener('click', function() {
        if (pwInput.type === 'password') {
          pwInput.type = 'text';
          toggle.textContent = 'Hide';
        } else {
          pwInput.type = 'password';
          toggle.textContent = 'Show';
        }
      });
      pwInput.style.width = 'calc(100% - 50px)';
      wrapper.appendChild(toggle);
    }
  });
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".item");
const hamburger= document.querySelector(".bars");
const closeIcon= document.querySelector(".fa-xmark");
const menuIcon = document.querySelector(".fa-bars");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);