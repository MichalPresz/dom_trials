console.log("Hello World!");
console.log(document);

document.querySelector("h2");
document.querySelector("h1");
const secondTitle = document.getElementById("second-title");

//change content of h2
secondTitle.textContent = "Amazing Title";

//  create new element
const section = document.querySelector("section");

const newImg = document.createElement("img");

newImg.src =
  "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTfAXO57aVAkHz63QhlrUGfwIpwI9GqdNEl-1hMBBlWgJAk1y71AvhjylR5EC7lULxzMODPhIvsYLwtirc";
newImg.alt = "Maria Sklodowska";
section.appendChild(newImg);
