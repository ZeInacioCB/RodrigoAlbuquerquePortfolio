// class to make an mp4 video play while hovering
const clip = document.querySelectorAll(".hover-to-play");
for (let i = 0; i < clip.length; i++) { clip[i].addEventListener("mouseenter", function (e) { clip[i].play();
  }); clip[i].addEventListener("mouseout", function (e) { clip[i].pause(); }); 
}

// function that reveals and opens different sections
function openSection(e, sectionName) {

  // Get all elements with class="navContent" and hide them
  let navContent = document.getElementsByClassName("navContent");
  for (i = 0; i < navContent.length; i++) {
    navContent[i].style.display = "none";
  }

  // Get all elements with class="navLinks" and remove the class "active"
  let navLinks = document.getElementsByClassName("navLinkChange");
  for (i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(sectionName).style.display = "block";
  e.target.classList.add("active");
}

// funtion to unmute video when clicking