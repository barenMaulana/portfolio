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

// check day or night
const date = new Date();
const hour = date.getHours();

// get element by id night-animal and night-animal-2
// show when night
const night_animal = document.getElementById("night-animal");
const night_animal_2 = document.getElementById("night-animal-2");

if (hour >= 18 || hour <= 6) {
  night_animal.classList.add("show-night-animal");
  night_animal_2.classList.add("show-night-animal");
} else {
  night_animal.classList.remove("show-night-animal");
  night_animal_2.classList.remove("show-night-animal");
}

AOS.init();
