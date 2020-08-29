// About me link
const aboutMe = document.querySelector('[href="#aboutMe"]');
const aboutMeSection = document.querySelector("#aboutMe");

aboutMe.addEventListener("click", function (event) {
  event.preventDefault();
  aboutMeSection.scrollIntoView({ behavior: "smooth" }, true);
});

// Recent projects link
const recentProjects = document.querySelector('[href="#projects"]');
const projectsSection = document.querySelector("#projects");

recentProjects.addEventListener("click", function (event) {
  event.preventDefault();
  projectsSection.scrollIntoView({ behavior: "smooth" }, true);
});

// Skills link
const skills = document.querySelector('[href="#skills"]');
const skillsSection = document.querySelector("#skills");

skills.addEventListener("click", function (event) {
  event.preventDefault();
  skillsSection.scrollIntoView({ behavior: "smooth" }, true);
});

// Contact link
const contact = document.querySelector('[href="#contact"]');
const contactSection = document.querySelector("#contact");

contact.addEventListener("click", function (event) {
  event.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth" }, true);
});
