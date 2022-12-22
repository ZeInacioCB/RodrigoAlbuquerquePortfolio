const clip = document.querySelectorAll(".hover-to-play");

for (let i = 0; i < clip.length; i++) { clip[i].addEventListener("mouseenter", function (e) { clip[i].play();
  }); clip[i].addEventListener("mouseout", function (e) { clip[i].pause(); }); 
}

// define clicking variables
const gimbalBtn = document.getElementById("btn-gimbal");
const focusPullerBtn = document.getElementById("btn-focus-puller");
const aboutBtn = document.getElementById("btn-about");
const logoBtn = document.getElementById("logo-header")
// define secion variables
const videoShowreel = document.getElementById("showreel");
const aboutBody = document.getElementById("body-about");
const gimbalBody = document.getElementById("body-gimbal");
const focusPullerBody = document.getElementById("body-focus-puller");

logoBtn.addEventListener("click", function (e) {
  videoShowreel.style.display = "block";
  aboutBody.style.display = "none";
  gimbalBody.style.display = "none"
  focusPullerBody.style.display = "none";
  gimbalBtn.classList.remove("active");
  focusPullerBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
})

gimbalBtn.addEventListener("click", function (e) {
  videoShowreel.style.display = "none";
  aboutBody.style.display = "none";
  gimbalBody.style.display = "block"
  focusPullerBody.style.display = "none";
  gimbalBtn.classList.add("active");
  focusPullerBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
})

focusPullerBtn.addEventListener("click", function (e) {
  videoShowreel.style.display = "none";
  aboutBody.style.display = "none";
  gimbalBody.style.display = "none"
  focusPullerBody.style.display = "block";
  gimbalBtn.classList.remove("active");
  focusPullerBtn.classList.add("active");
  aboutBtn.classList.remove("active");
})

aboutBtn.addEventListener("click", function (e) {
  videoShowreel.style.display = "none";
  aboutBody.style.display = "block";
  gimbalBody.style.display = "none"
  focusPullerBody.style.display = "none";
  gimbalBtn.classList.remove("active");
  focusPullerBtn.classList.remove("active");
  aboutBtn.classList.add("active");
}) 

/*

function openSection(e, sectionName) {

  // Get all elements with class="navContent" and hide them
  let navContent = document.getElementsByClassName("navContent");
  for (i = 0; i < navContent.length; i++) {
    navContent[i].style.display = "none";
  }

  // Get all elements with class="navLinks" and remove the class "active"
  let navLinks = document.getElementsByClassName("navLinkChange");
  for (i = 0; i < navLinks.length; i++) {
    navLinks[i].className = navLinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(sectionName).style.display = "block";
  e.currentTarget.parentNode.classList.add("active");
}

let navContent = document.getElementsByClassName("navContent");
console.log(navContent)
*/