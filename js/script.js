// JavaScript: script.js

// Lazy loading for image placeholders
document.addEventListener("DOMContentLoaded", function () {
  const placeholders = document.querySelectorAll(".image-placeholder");
  placeholders.forEach((placeholder) => {
    placeholder.addEventListener("click", () => {
      placeholder.style.backgroundColor = "#ccc";
      placeholder.textContent = "Image Loaded";
    });
  });
});
