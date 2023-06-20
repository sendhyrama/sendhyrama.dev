const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .nav-container a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id") ?? "";
    }
  });

  navLi.forEach((li) => {
    li.classList.remove(
      "font-bold",
      "text-neutral-900",
      "dark:text-primary-600"
    );
    li.classList.add("text-neutral-700", "dark:text-neutral-400");
    if (li.classList.contains(current)) {
      li.classList.remove("text-neutral-700", "dark:text-neutral-400");
      li.classList.add(
        "font-bold",
        "text-neutral-900",
        "dark:text-primary-600"
      );
    }
  });
});

export default {};
