document.addEventListener('DOMContentLoaded', () => {
  // Get all success popups on the page
  const successPopups = document.querySelectorAll('[id^="success-popup"]');

  successPopups.forEach(popup => {
    const id = popup.id;
    const closeButton = popup.querySelector(`#close-btn-${id}`) as HTMLButtonElement;

    if (closeButton) {
      closeButton.addEventListener("click", () => {
        // Dispatch custom event to close the popup
        document.dispatchEvent(
          new CustomEvent("close-success-popup", {
            detail: { popupId: id }
          })
        );
      });
    }
  });
});