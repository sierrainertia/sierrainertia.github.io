// About me link
const aboutMe = document.querySelector('[href="#aboutMe"]');
const aboutMeSection = document.querySelector("#aboutMe");

const mainMenuButton = document.querySelector(".menuToggle");
const openMainMenu = document.querySelector(".mainMenu");
const closeMainMenuButton = document.querySelector(".menuClose");

mainMenuButton.addEventListener("click", (event) => {
  event.preventDefault();
  openMainMenu.classList.add("menuOpen");
});

closeMainMenuButton.addEventListener("click", (event) => {
  event.preventDefault();
  openMainMenu.classList.remove("menuOpen");
});

// about me section
aboutMe.addEventListener("click", function (event) {
  event.preventDefault();
  aboutMeSection.scrollIntoView({ behavior: "smooth" }, true);
  openMainMenu.classList.remove("menuOpen");
});

// Recent projects link
const recentProjects = document.querySelector('[href="#projects"]');
const projectsSection = document.querySelector("#projects");

recentProjects.addEventListener("click", function (event) {
  event.preventDefault();
  projectsSection.scrollIntoView({ behavior: "smooth" }, true);
  openMainMenu.classList.remove("menuOpen");
});

// Skills link
const skills = document.querySelector('[href="#skills"]');
const skillsSection = document.querySelector("#skills");

skills.addEventListener("click", function (event) {
  event.preventDefault();
  skillsSection.scrollIntoView({ behavior: "smooth" }, true);
  openMainMenu.classList.remove("menuOpen");
});

// Contact link
const contact = document.querySelector('[href="#contact"]');
const contactSection = document.querySelector("#contact");

contact.addEventListener("click", function (event) {
  event.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth" }, true);
  openMainMenu.classList.remove("menuOpen");
});
