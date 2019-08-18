// javascript for portfolio and services

let contact = document.querySelector(".contact");
contact.addEventListener("click", function() {
  document.querySelector(".modal-mask").style.display = "flex";
});

close = document.getElementById("close-btn");
close.addEventListener("click", function() {
  document.querySelector(".modal-mask").style.display = "none";
});
