const popupLink = document.querySelector(".interested-link");
const popup = document.querySelector(".searching-form");
const arrival = popup.querySelector("[name=arrival-date");
const departure = popup.querySelector("[name=departure-date");
const adult = popup.querySelector("[name=adult-count");

function popupHide() {
    popup.classList.add("popup-show");
  };

popupLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("popup-show");
    popup.classList.remove("popup-error");
  });

popup.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !adult.value) {
      evt.preventDefault();
      popup.classList.add("popup-error");
    } 
  });

window.addEventListener("keydown", function (evt) {
    if (evt.key === "Esc" || evt.key === "Escape") {
      if (popup.classList.contains("popup-show")) {
        evt.preventDefault();
        } else {
            evt.preventDefault();
            popup.classList.add("popup-show");            
            popup.classList.remove("popup-error");
        }
    }
  });