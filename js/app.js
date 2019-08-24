// javascript for portfolio and services

let contact = document.querySelectorAll(".contact");
for (let i = 0; i < contact.length; i++) {
  contact[i].addEventListener("click", function() {
    document.querySelector(".toggle").checked = false;
    document.querySelector(".modal-mask").style.display = "flex";
  });
}

let close = document.getElementById("close-btn");
close.addEventListener("click", function() {
  document.querySelector(".modal-mask").style.display = "none";
});
