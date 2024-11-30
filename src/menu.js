import spicyTunaRoll from "./images/spicy-tuna-roll.webp";
import tempuraRoll from "./images/tempura-roll.webp";
import unagiRoll from "./images/unagi-roll.webp";
import californiaRoll from "./images/california-roll.webp";
import rainbowRoll from "./images/rainbow-roll.webp";
import dragonRoll from "./images/dragon-roll.webp";

const foods = [
  {
    name: "Spicy Tuna Roll",
    description:
      "Ahi (tuna) rolls usually have a dark pink layer of raw tuna in them.",
    image: spicyTunaRoll,
  },
  {
    name: "Tempura Roll",
    description:
      "Tempura is a Japanese style of deep frying that uses a light batter.",
    image: tempuraRoll,
  },
  {
    name: "Unagi Roll",
    description:
      "Unagi is a saltwater eel. Sushi usually uses a grilled slab of unagi coated.",
    image: unagiRoll,
  },
  {
    name: "California Roll",
    description: "A California roll is usually made with crab and avocado.",
    image: californiaRoll,
  },
  {
    name: "Rainbow Roll",
    description:
      "A rainbow roll is a sushi roll topped with many different types of sashimi.",
    image: rainbowRoll,
  },
  {
    name: "Dragon Roll",
    description:
      "Dragon rolls are usually unique to the chef, and many get creative with the appearance of the dragon roll.",
    image: dragonRoll,
  },
];

function createMenu() {
  const menu = document.createElement("section");
  menu.classList.add("menu");

  foods.forEach((food) => {
    menu.appendChild(createMenuItem(food.name, food.description, food.image));
  });

  return menu;
}

function createMenuItem(name, description, image) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodImage = document.createElement("img");
  foodImage.src = image;
  foodImage.alt = `${name}`;

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

export default createMenu;
