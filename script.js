const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Smooth-scroll internal links while preserving normal behaviour for files and external links.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
