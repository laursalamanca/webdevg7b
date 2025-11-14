// scripts/scripts.js

// Run after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupMobileMenu();
  highlightActiveNavLink();
  setupFontSizeControls();
});

function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
  });
}

function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOpenIcon = document.getElementById("menu-open-icon");
  const menuCloseIcon = document.getElementById("menu-close-icon");

  if (!menuToggle || !mobileMenu || !menuOpenIcon || !menuCloseIcon) return;

  menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    menuOpenIcon.classList.toggle("hidden", !isHidden);
    menuCloseIcon.classList.toggle("hidden", isHidden);
  });
}

function highlightActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add(
        "bg-gray-100",
        "dark:bg-gray-800",
        "text-blue-600",
        "dark:text-blue-400",
        "hover:text-blue-600"
      );
    } else {
      link.classList.remove(
        "bg-gray-800",
        "dark:bg-gray-800",
        "text-blue-600",
        "dark:text-blue-400"
      );
    }
  });
}

function setupFontSizeControls() {
  const increase = document.getElementById("font-increase");
  const decrease = document.getElementById("font-decrease");

  if (!increase || !decrease) return;

  let scale = 1;
  const minScale = 0.85;
  const maxScale = 1.3;

  const applyScale = () => {
    document.documentElement.style.fontSize = `${16 * scale}px`;
  };

  decrease.addEventListener("click", () => {
    scale = Math.max(minScale, scale - 0.05);
    applyScale();
  });

  increase.addEventListener("click", () => {
    scale = Math.min(maxScale, scale + 0.05);
    applyScale();
  });
}
