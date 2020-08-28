// project one video functionality
const projectOneVideo = document.querySelector(".projectOneVideo");

projectOneVideo.addEventListener("mouseover", function () {
  if (!projectOneVideo.playing) {
    projectOneVideo.play();
  }
});

projectOneVideo.addEventListener("mouseleave", function () {
  projectOneVideo.pause();
});

// project two video functionality
const projectTwoVideo = document.querySelector(".projectTwoVideo");

projectTwoVideo.addEventListener("mouseover", function () {
  if (!projectTwoVideo.playing) {
    projectTwoVideo.play();
  }
});

projectTwoVideo.addEventListener("mouseleave", function () {
  projectTwoVideo.pause();
});

// project three video functionality
const projectThreeVideo = document.querySelector(".projectThreeVideo");

projectThreeVideo.addEventListener("mouseover", function () {
  if (!projectThreeVideo.playing) {
    projectThreeVideo.play();
  }
});

projectThreeVideo.addEventListener("mouseleave", function () {
  projectThreeVideo.pause();
});
