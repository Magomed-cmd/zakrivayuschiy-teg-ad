const saveButton = document.querySelector('.save-button');
const dialog = document.querySelector('.dialog');
const closeDialogButton = document.querySelector('.dialog__button');

if (saveButton && dialog && closeDialogButton) {
  saveButton.addEventListener('click', () => {
    dialog.showModal();
  });

  closeDialogButton.addEventListener('click', () => {
    dialog.close();
  });
}
