document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.getElementById("hamburgerButton");
  const mobileNav = document.getElementById("mobileNav");

  function toggleMobileNav() {
    if (
      mobileNav?.classList.contains("translate-x-0") &&
      mobileNav?.classList.contains("opacity-100")
    ) {
      mobileNav.classList.remove("translate-x-0");
      mobileNav.classList.remove("opacity-100");
      mobileNav.classList.add("opacity-0");
      mobileNav.classList.add("-translate-x-full");
      hamburgerButton?.classList.remove("hamburgerOpen");
    } else {
      mobileNav?.classList.remove("opacity-0");
      mobileNav?.classList.remove("-translate-x-full");
      mobileNav?.classList.add("translate-x-0");
      mobileNav?.classList.add("opacity-100");
      hamburgerButton?.classList.add("hamburgerOpen");
    }
  }

  hamburgerButton?.addEventListener("click", toggleMobileNav);

  const mobileNavLinks = document.querySelectorAll("#primary-navigation a");

  mobileNavLinks.forEach((navLink) => {
    navLink.addEventListener("click", toggleMobileNav);
  });
});

export default {};
