// Smooth Scroll to Sections
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Reveal Memories Button Logic
document.addEventListener("DOMContentLoaded", function () {
  const revealButton = document.getElementById('showImageButton');
  const images = document.querySelectorAll('.reveal-image');
  const audio = document.getElementById('fireworksAudio');

  if (revealButton) {
    revealButton.addEventListener('click', function () {
      images.forEach(img => img.classList.add('show'));
      if (audio) {
        audio.play().catch(err => console.log("Audio playback failed:", err));
      }
    });
  }
});
