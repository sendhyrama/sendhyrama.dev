// Background blob
const blob = document.getElementById("blob");

if (blob) {
  let mouseX = 0;
  let mouseY = 0;

  window.onmousemove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };

  const updateBlobPosition = () => {
    const currentX = parseFloat(blob.style.left) || 0;
    const currentY = parseFloat(blob.style.top) || 0;

    const dx = mouseX - currentX;
    const dy = mouseY - currentY;

    const newX = currentX + dx * 0.1; // Adjust the multiplier to change the delay
    const newY = currentY + dy * 0.1; // Adjust the multiplier to change the delay

    blob.style.left = `${newX}px`;
    blob.style.top = `${newY}px`;

    requestAnimationFrame(updateBlobPosition);
  };

  requestAnimationFrame(updateBlobPosition);
}

export {};
