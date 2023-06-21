export function showToast(message: string, type = "success", duration = 3000) {
  const toastContainer = document.getElementById("toast-container");
  const toastTemplate = document.getElementById(
    "toast-template"
  ) as HTMLTemplateElement;
  const clone = toastTemplate.content.cloneNode(true) as DocumentFragment;
  const toast = clone.querySelector(".toast");
  const toastMessage = clone.querySelector(".toast-message");
  const toastIcon = clone.querySelector(".toast-icon");

  if (toast && toastMessage && toastContainer && toastIcon) {
    toastMessage.textContent = message;

    if (type === "success") {
      toastIcon.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#61d345"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            ></path>
          </svg>`;
    } else {
      toastIcon.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ff4b4b"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            ></path>
          </svg>`;
    }

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove("opacity-0", "translate-y-24");
      toast.classList.add("animate-toast-enter");
    }, 100);

    setTimeout(() => {
      toast.classList.remove("animate-toast-enter");
      toast.classList.add("animate-toast-leave");

      setTimeout(() => {
        toastContainer.removeChild(toast);
      }, 600);
    }, duration);
  }
}
