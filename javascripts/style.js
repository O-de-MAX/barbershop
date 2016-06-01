var userLink = document.querySelector(".login");
var userPopup = document.querySelector(".modal-content-login");
var userClose = userPopup.querySelector(".modal-content-close");
var userLogin = userPopup.querySelector("[name=login]");

userLink.addEventListener("click", function(event) {
  event.preventDefault();
  userPopup.classList.add("modal-content-show");
  userLogin.focus();
      });

userClose.addEventListener("click", function(event) {
  event.preventDefault();
  userPopup.classList.remove("modal-content-show");
      });

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (userPopup.classList.contains("modal-content-show")) {
      userPopup.classList.remove("modal-content-show");
    }
  }
});

var mapOpen = document.querySelector(".js-open-map");

var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
    mapPopup.classList.remove("modal-content-show");
    }
  }
});
