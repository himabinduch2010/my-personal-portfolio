"use strict";

/* Sidebar toggle */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

/* ✅ NAV switch (THIS fixes Resume not working) */
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.textContent.trim().toLowerCase();

    navLinks.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    pages.forEach((page) => {
      const name = page.dataset.page.trim().toLowerCase();
      if (name === target) page.classList.add("active");
      else page.classList.remove("active");
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* Contact form enable/disable */
const form = document.querySelector("[data-form]");
const inputs = document.querySelectorAll("[data-form-input]");
const submitBtn = document.querySelector("[data-form-btn]");

if (form && submitBtn) {
  const toggleBtn = () => {
    submitBtn.disabled = !form.checkValidity();
  };
  inputs.forEach((i) => i.addEventListener("input", toggleBtn));
  toggleBtn();
}
