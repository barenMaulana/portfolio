const nav_camellique = document.getElementById("camellique");
const nav_meatguy = document.getElementById("meatguy");
const experience_contents = document.getElementById("experience-content");

nav_camellique.classList.add("exp-active");
experience_contents.childNodes[1].classList.add("show-experience");

nav_camellique.addEventListener("click", function () {
  nav_camellique.classList.add("exp-active");
  nav_meatguy.classList.remove("exp-active");
  experience_contents.childNodes[1].classList.add("show-experience");
  experience_contents.childNodes[3].classList.remove("show-experience");
});

nav_meatguy.addEventListener("click", function () {
  nav_meatguy.classList.add("exp-active");
  nav_camellique.classList.remove("exp-active");
  experience_contents.childNodes[3].classList.add("show-experience");
  experience_contents.childNodes[1].classList.remove("show-experience");
});

AOS.init();
