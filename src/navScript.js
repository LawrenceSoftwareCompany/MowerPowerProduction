const modal = document.getElementById("modal");
let modalShowing = false;

const toggleModal = () => {
  if (modalShowing) {
    modal.style.display = "none";
    modalShowing = false;
  } else {
    modal.style.display = "flex";
    modalShowing = true;
  }
};
