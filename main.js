const hamburgerMenu = document.querySelector(".hamburger__container");
const navLinks = document.querySelector(".nav__links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
});

const navListDescription = document.querySelectorAll(".nav__list-description");
navListDescription.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    listItem.classList.toggle("open");
  });
});

const categoriesDetails = document.querySelectorAll(".category__details");
categoriesDetails.forEach((category) => {
  category.addEventListener("click", () => {
    category.classList.toggle("selected");
  });
});
