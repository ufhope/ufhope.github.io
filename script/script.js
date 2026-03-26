function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  const btn = document.getElementById("navToggle");
  if (!nav || !btn) return;

  const isOpen = nav.classList.toggle("is-open");
  btn.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileNav() {
  const nav = document.getElementById("mobileNav");
  const btn = document.getElementById("navToggle");
  if (!nav || !btn) return;

  nav.classList.remove("is-open");
  btn.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", (e) => {
  const nav = document.getElementById("mobileNav");
  const btn = document.getElementById("navToggle");
  if (!nav || !btn) return;

  // If menu is open and you click outside the button+menu, close it
  if (nav.classList.contains("is-open")) {
    const clickedInside = nav.contains(e.target) || btn.contains(e.target);
    if (!clickedInside) closeMobileNav();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileNav();
});
