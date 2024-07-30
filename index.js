
  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slick-slider');
    const slides = document.querySelectorAll('.element');
    const totalSlides = slides.length;
    let currentIndex = 0;




    function showSlide(index) {
      // Ensure the index is within the bounds
      if (index >= totalSlides) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = totalSlides - 1;
      } else {
        currentIndex = index;
      }
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Event listeners for the buttons
    document.getElementById('left-button').addEventListener('click', () => {
     (showSlide(currentIndex - 1)) 
    });

    document.getElementById('right-button').addEventListener('click', () => {
      showSlide(currentIndex + 1);

    
    });

    // Initial slide
    showSlide(currentIndex);
  });

