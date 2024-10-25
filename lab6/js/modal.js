const refs = {
  openModalBtnRegister: document.querySelector("[data-modal-open-register]"),
  openModalBtnLogin: document.querySelector("[data-modal-open-login]"),

  closeModalBtnRegister: document.querySelector("[data-modal-close-register]"),
  closeModalBtnLogin: document.querySelector("[data-modal-close-login]"),

  modalRegistration: document.querySelector("[modal-registration]"),
  modalLogin: document.querySelector("[modal-login]"),
};

refs.openModalBtnRegister.addEventListener("click", () =>
  removeHidden(refs.modalRegistration)
);
refs.openModalBtnLogin.addEventListener("click", () =>
  removeHidden(refs.modalLogin)
);
refs.closeModalBtnRegister.addEventListener("click", () =>
  addHidden(refs.modalRegistration)
);
refs.closeModalBtnLogin.addEventListener("click", () =>
  addHidden(refs.modalLogin)
);

function removeHidden(modal) {
  modal.classList.remove("is-hidden");
}

function addHidden(modal) {
  modal.classList.add("is-hidden");
}
