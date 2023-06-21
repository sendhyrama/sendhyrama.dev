// Cards
for (const cards of document.getElementsByClassName("cards")) {
  cards.addEventListener("mousemove", (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = (e as MouseEvent).clientX - rect.left,
        y = (e as MouseEvent).clientY - rect.top;
      const c = card as HTMLElement;
      c.style.setProperty("--mouse-x", `${x}px`);
      c.style.setProperty("--mouse-y", `${y}px`);
    }
  });
}

export {};
