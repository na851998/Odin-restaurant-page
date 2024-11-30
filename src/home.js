import chefPngImage from "./images/chef.png";

function createHome() {
  const home = document.createElement("section");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = chefPngImage;
  chefImage.alt = "Chef";

  home.appendChild(createParagraph("Best sushi in the world"));
  home.appendChild(createParagraph("Made with passion since 1900"));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

export default createHome;
