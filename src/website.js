import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

function createHeader() {
  const header = document.createElement("header");

  const restaurantName = document.createElement("div");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Sushiholic";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.classList.add("active"); //
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activateButton(homeButton);
    loadMain(createHome());
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activateButton(menuButton);
    loadMain(createMenu());
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activateButton(contactButton);
    loadMain(createContact());
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function activateButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.appendChild(createHome());
  return main;
}

function loadMain(page) {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(page);
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

function createFooter() {
  const footer = document.createElement("footer");
  const anchor = document.createElement("a");
  const copyrightParagraph = document.createElement("p");

  copyrightParagraph.textContent = "Copyright © 2024 na851998";
  anchor.appendChild(copyrightParagraph);
  footer.appendChild(anchor);

  return footer;
}

export default initializeWebsite;
