// main.js

// NAVBAR TOGGLE
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// FLOATING SHAPES ANIMATION
const floatingShapes = document.querySelectorAll(".floating-shape");
floatingShapes.forEach((shape, index) => {
  const delay = index * 2; // stagger the animation
  shape.style.animationDelay = `${delay}s`;
});

// SERVICE ICON HOVER SCALE
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach(card => {
  const icon = card.querySelector("i");
  card.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.3)";
  });
  card.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});

// STEP CARD ICON HOVER SCALE
const stepCards = document.querySelectorAll(".step-card");
stepCards.forEach(card => {
  const icon = card.querySelector("i");
  card.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.3)";
  });
  card.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});

// TESTIMONIALS APPEAR ON SCROLL
const testimonials = document.querySelectorAll(".testimonial-item");

function appearOnScroll() {
  const triggerBottom = window.innerHeight / 5 * 4;

  testimonials.forEach(testimonial => {
    const testimonialTop = testimonial.getBoundingClientRect().top;

    if(testimonialTop < triggerBottom){
      testimonial.classList.add("show");
    } else {
      testimonial.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", appearOnScroll);
appearOnScroll(); // initialize on load

// HERO IMAGE FLOATING EFFECT (Smooth up-down)
const heroShapes = document.querySelectorAll(".hero .floating-shape");

heroShapes.forEach((shape, i) => {
  shape.style.animation = `floating 6s ease-in-out ${i * 2}s infinite`;
});

// DARK / LIGHT MODE TOGGLE (optional)
// Example: You can add a button with id="mode-toggle" in navbar
const modeToggle = document.querySelector("#mode-toggle");
if(modeToggle){
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}