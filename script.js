// "use strict";

const navLink = document.querySelectorAll(".list-items a");
const dropdownItems = document.querySelectorAll("#list-items");

const mobileNav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

// Mobile Menu/Active statues

const mobileMenuBtn = document.querySelector(".mobile-nav-btn");
const closeBtn = document.querySelector(".close-btn");

mobileMenuBtn.addEventListener("click", function (e) {
  mobileNav.classList.add("display-item");
  closeBtn.classList.add("display-item");
  overlay.style.opacity = 0.7;
});

const closeMenu = function () {
  mobileNav.classList.remove("display-item");
  closeBtn.classList.remove("display-item");
  overlay.style.opacity = 0;
};

closeBtn.addEventListener("click", closeMenu);
closeMenu();

navLink.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
