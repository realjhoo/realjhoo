// Copyright (c) 2019 Jerry L Hoover
// All rights reserved
// javascript for realjhoo

function hamburger_listener() {
  document.addEventListener("click", event => {
    menu_home = document.querySelector(".menu-home");
    menu_portfolio = document.querySelector(".menu-portfolio");
    menu_about = document.querySelector(".menu-about");

    if (
      event.target === menu_home ||
      event.target === menu_portfolio ||
      event.target === menu_about
    ) {
      document.querySelector(".toggle").checked = false;
    }
  });
}

function close_btn_listener() {
  let close = document.getElementById("close-btn");
  close.addEventListener("click", function() {
    document.querySelector(".modal-mask").style.display = "none";
  });
}

function contact_listener() {
  let contact = document.querySelectorAll(".contact");
  for (let i = 0; i < contact.length; i++) {
    contact[i].addEventListener("click", function() {
      document.querySelector(".toggle").checked = false;
      document.querySelector(".modal-mask").style.display = "flex";
    });
  }
}

function random_background() {
  // FUNCTION CHANGES MARQEE BACKGROUND
  let random = Math.floor(Math.random() * 3) + 0;
  let bg = "background" + random;
  document.getElementById("background").className = bg;
}

function back_to_top() {
  document.addEventListener("scroll", function() {
    let y = window.pageYOffset;
    if (y > 450) {
      document.querySelector(".back-to-top").style.visibility = "visible";
    } else {
      document.querySelector(".back-to-top").style.visibility = "hidden";
    }
  });
}

function main() {
  random_background();
  hamburger_listener();
  close_btn_listener();
  contact_listener();
  back_to_top();
}

main();
