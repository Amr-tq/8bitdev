function closeModal() {
  const modal = document.getElementById("thanYouModal");

  if (modal) {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
}

document.addEventListener("click", function (event) {
  const modal = document.getElementById("thanYouModal");
  if (modal && !modal.contains(event.target)) {
    closeModal();
  }
});
