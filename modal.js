document.addEventListener("DOMContentLoaded", () => {
  // select button element
  const openModal = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  let modalTimeout =
    // add event listener on click to button
    openModal.addEventListener("click", () => {
      // remove class invisible from div modal
      modal.classList.remove("invisible");
      // add timeout
      modalTimeout = setTimeout(() => {
        modal.classList.add("invisible");
      }, 5000);
    });

  // add event listener on key press Escape
  document.addEventListener("keydown", (event) => {
    // add class invisible to div modal
    if (event.key === "Escape") {
      modal.classList.add("invisible");
      clearTimeout(modalTimeout);
    }
  });
});
