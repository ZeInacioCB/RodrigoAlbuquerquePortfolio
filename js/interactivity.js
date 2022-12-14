// class to make an mp4 video play while hovering - not being use at the moment
const clip = document.querySelectorAll(".hover-to-play");
for (let i = 0; i < clip.length; i++) { clip[i].addEventListener("mouseenter", function (e) { clip[i].play();
  }); clip[i].addEventListener("mouseout", function (e) { clip[i].pause(); }); 
}

// navigate the site - reveals and hides different sections
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

// Toggle between unmute and mute when clicking in main video
// let video = document.querySelector("section#showreel video");
// video.onclick = () => video.muted ? video.muted = false : video.muted = true;

// Manipulating video sound to improve UX
/*
let showreelVideo = document.getElementById("showreel-video");
let unmuteHanlder = function() {
  let mutedSrc = showreelVideo.src;
  let unmutedSrc = mutedSrc.replace("muted=1", "muted=0");
  showreelVideo.src = unmutedSrc;
  showreelVideo.removeEventListener('mouseenter', unmuteHanlder);
}
showreelVideo.addEventListener('mouseenter', unmuteHanlder);
*/

// Adding event handlers to modals and iframes so that the videos starts and stops when  function to stop and play video on ALL modals
function setModalToAutoplayAndPause() {
  const alliframes = document.querySelectorAll('iframe.modal-video');
  const allModals = document.querySelectorAll(".modal");

  for (let i = 0; i < allModals.length; i++) {
    // defining the modal and iframe for the loop
    const modal = allModals[i];
    const iframeVideo = alliframes[i];

    // adding the event handler to start the video to each modal
    modal.addEventListener('show.bs.modal', function () {
      let stopSrc = iframeVideo.src;
      let playSrc = stopSrc.replace("autoplay=0", "autoplay=1");
      iframeVideo.src = playSrc;
    });

    // adding the event handler to start the video to each modal
    modal.addEventListener('hide.bs.modal', function () {
      let playSrc = iframeVideo.src;
      let stopSrc = playSrc.replace("autoplay=1", "autoplay=0");
      iframeVideo.src = stopSrc;
    });
    
  }

} 

setModalToAutoplayAndPause();