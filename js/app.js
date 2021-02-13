// Copyright (c) 2019 - 2021 Jerry L Hoover
// All rights reserved
// javascript for realjhoo

// ========================================================
function createBox() {
  const portfolioContainer = document.querySelector(".portfolio-container");
  let finalBoxMarkup = "";

  for (let i = 0; i < projects.length; i++) {
    title = projects[i].title;
    subtitle = projects[i].subtitle;
    site = projects[i].site;
    git = projects[i].git;
    description = projects[i].description;
    thumbnail = projects[i].thumbnail;
    altThumbnail = projects[i].altThumbnail;

    const boxMarkup = `
    <div class="box">
      <div class="project-title">${title}
        <p class="project-subtitle">${subtitle}</p>
        <a href="${site}" target="_blank" class="button">view site</a>
        <a href="${git}" target="_blank" class="button">view source</a>
        <p class="project-description">${description}</p>
      </div>

      <div class="project-image">
        <img src="${thumbnail}" alt="${altThumbnail}"/>
      </div>
    </div>`;

    finalBoxMarkup += boxMarkup;
  }
  portfolioContainer.insertAdjacentHTML("beforeend", finalBoxMarkup);
}

// ========================================================
function hamburger_listener() {
  document.addEventListener("click", (event) => {
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

// ========================================================
function close_btn_listener() {
  let close = document.getElementById("close-btn");
  close.addEventListener("click", function () {
    document.querySelector(".modal-mask").style.display = "none";
  });
}

// ========================================================
function contact_listener() {
  let contact = document.querySelectorAll(".contact");
  for (let i = 0; i < contact.length; i++) {
    contact[i].addEventListener("click", function () {
      document.querySelector(".toggle").checked = false;
      document.querySelector(".modal-mask").style.display = "flex";
    });
  }
}

// ========================================================
function back_to_top() {
  document.addEventListener("scroll", function () {
    let y = window.pageYOffset;
    if (y > 450) {
      document.querySelector(".back-to-top").style.visibility = "visible";
    } else {
      document.querySelector(".back-to-top").style.visibility = "hidden";
    }
  });
}

// ========================================================
function parallax_effect() {
  const parallax = document.getElementById("background");

  window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
  });
}

//  =======================================================
function injectAboutMeText() {
  const aboutText = document.querySelector(".about-text");
  aboutText.innerHTML = `Hoover is a web developer with <a class="techdegree" href="https://www.credential.net/13865366">Front End</a> and <a class="techdegree" href="https://www.credential.net/365f03e7-0673-41e7-9491-8c13598563bd"> Full Stack</a> Techdegrees from <a class="techdegree" href="https://teamtreehouse.com">Team Treehouse</a>. He enjoys building websites, turning an empty page into something both beautiful and functional using tools like Javascript, CSS, React, Node, Express and, on occasion, even Angular.`;
}

// ========================================================
function main() {
  createBox();
  hamburger_listener();
  close_btn_listener();
  contact_listener();
  back_to_top();
  parallax_effect();
  injectAboutMeText();
}

// ========================================================
main();
