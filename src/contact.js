import locationImage from "./images/restaurant-location.jpeg";

function createContact() {
  const contact = document.createElement("section");
  contact.classList.add("contact");

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = locationImage;
  restaurantLocation.alt = "Sushi restaurant location";

  contact.appendChild(createParagraph("📞 123 456 789"));
  contact.appendChild(createParagraph("🏠 Tay Ho, Ha Noi, Viet Nam"));
  contact.appendChild(restaurantLocation);

  return contact;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

export default createContact;
