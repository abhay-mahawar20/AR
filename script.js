let slideIndex = [0, 0, 0]; // Array to hold the current slide index for each slider
const totalSlides = 3; // Total number of slides

function changeSlide(n, slider) {
    showSlide(slideIndex[slider] += n, slider);
}

function showSlide(n, slider) {
    const slides = document.querySelectorAll(`#slider${slider + 1} .slide`);
    const dots = document.querySelectorAll(`#slider${slider + 1} .dot`);
    
    if (n >= totalSlides) { slideIndex[slider] = 0; }
    if (n < 0) { slideIndex[slider] = totalSlides - 1; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex[slider]].style.display = "block";  
    dots[slideIndex[slider]].className += " active";
}

// Function to automatically change slides
function autoSlide() {
    for (let i = 0; i < slideIndex.length; i++) {
        changeSlide(1, i); // Change to the next slide for each slider
    }
}

// Initialize the sliders
for (let i = 0; i < slideIndex.length; i++) {
    showSlide(slideIndex[i], i);
}

// Set interval for automatic sliding every 3 seconds (3000 milliseconds)
setInterval(autoSlide, 3000);



