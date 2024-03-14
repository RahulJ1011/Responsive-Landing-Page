document.addEventListener("DOMContentLoaded", function () {
  
  const toggleOff = document.querySelector(".toggle");
 
  const mobile = document.querySelector(".mobile");

  toggleOff.onclick = function () {
      mobile.classList.toggle('on');
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".header");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          nav.classList.add("nav-scrolled");
      } else {
          nav.classList.remove("nav-scrolled");
      }
  });
});
