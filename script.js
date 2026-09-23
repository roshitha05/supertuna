const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const handleAnchorNavigation = (event) => {
  const link = event.currentTarget;
  const selector = link.getAttribute("href");

  if (!selector || selector === "#") {
    return;
  }

  const target = document.querySelector(selector);
  if (!target) {
    return;
  }

  event.preventDefault();
  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", handleAnchorNavigation);
});

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  const updateBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 600);
  };

  updateBackToTop();
  window.addEventListener("scroll", updateBackToTop, { passive: true });
}