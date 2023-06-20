// Glitch
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval: NodeJS.Timer | undefined = undefined;

document.querySelectorAll(".glitch").forEach((glitchElement) => {
  glitchElement.addEventListener("mouseover", (event) => {
    let iteration = 0;

    interval && clearInterval(interval);

    interval = setInterval(() => {
      const target = event.target as HTMLElement | null;
      if (target && target.dataset.value != null) {
        target.innerText = target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return target.dataset.value?.[index] ?? "";
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= target.dataset.value.length) {
          clearInterval(interval);
          interval = undefined;
        }

        iteration += 1 / 3;
      }
    }, 30);
  });
  glitchElement.addEventListener("mouseout", (event) => {
    const target = event.target as HTMLElement | null;
    if (target && target.dataset.value != null) {
      target.innerText = target.dataset.value;
    }

    interval && clearInterval(interval);
    interval = undefined;
  });
});

export {};
