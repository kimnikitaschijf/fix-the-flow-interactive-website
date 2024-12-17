// ---------------- Slider Interactie ---------------- //
function initializeSlider() {
  // Stap 1: Selecteer de elementen
  const slides = document.querySelectorAll(".slides-fade");
  const dots = document.querySelectorAll(".dot");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let slideIndex = 1; // Start met de eerste slide
  showSlides(slideIndex);

  // Stap 2: Koppel acties aan events
  prevButton.addEventListener("click", () => plusSlides(-1));
  nextButton.addEventListener("click", () => plusSlides(1));

  dots.forEach((dot, index) => {
      dot.addEventListener("click", () => currentSlide(index + 1));
  });

  // Stap 3: Functies
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;

      slides.forEach(slide => slide.style.display = "none");
      dots.forEach(dot => dot.classList.remove("active"));

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
  }
}

// ---------------- Harry Hover Interactie ---------------- //
function initializeHarryHover() {
  const speechBubble = document.getElementById("speech-bubble");
  const plantImage = document.querySelector(".shape-container");

  plantImage.addEventListener("mouseenter", () => {
      speechBubble.style.display = "block";
  });

  plantImage.addEventListener("mouseleave", () => {
      speechBubble.style.display = "none";
  });
}

// ---------------- Initialiseer Alles ---------------- //
document.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
  initializeHarryHover();
});
