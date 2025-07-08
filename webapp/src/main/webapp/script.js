// Smooth Scroll to Sections
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const revealButton = document.getElementById("showImageButton");
  const images = document.querySelectorAll(".slideshow-image");
  const finalMessage = document.getElementById("finalMessage");
  const audio = document.getElementById("fireworksAudio");

  if (revealButton) {
    revealButton.addEventListener("click", function () {
      let index = 0;

      // Start background music
      if (audio) {
        audio.play().catch(err => console.log("Audio playback failed:", err));
      }

      // Slideshow logic
      const showNextImage = () => {
        // Hide all images
        images.forEach(img => img.classList.remove("show"));

        if (index < images.length) {
          images[index].classList.add("show");
          index++;
          setTimeout(showNextImage, 16000); // ⏱️ 16 seconds per image
        } else {
          // Show final message
          finalMessage.classList.add("show");
        }
      };

      showNextImage();
    });
  }
});
