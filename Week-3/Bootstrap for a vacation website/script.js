function showAlert(alertId) {
  const bootstrapAlert = document.querySelector("#" + alertId);
  const collapse = new bootstrap.Collapse(bootstrapAlert);
  collapse.show();
}

const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
const modal = new bootstrap.Modal(document.getElementById("contact-modal"));
modalYesBtn.addEventListener("click", function () {
  const sendBtn = document.querySelector("#send-message-btn");
  modal.hide();
  sendBtn.style.display = "none";
  showAlert("conf-alert");
});
