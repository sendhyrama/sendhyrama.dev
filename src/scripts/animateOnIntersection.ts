document.addEventListener("DOMContentLoaded", () => {
  const titleElements = document.querySelectorAll(".animate-on-intersection");
  const contactButton = document.querySelectorAll(".contact-button");

  function animateOnIntersection(
    targets: NodeListOf<Element>,
    animationClass: string
  ): void {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    targets.forEach((target) => {
      observer.observe(target);
    });
  }

  animateOnIntersection(titleElements, "motion-safe:animate-slide-left");
  animateOnIntersection(contactButton, "motion-safe:animate-jellow");
});

export default {};

// used in Layout
