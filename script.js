// ************************************************************************************************

// Data insert and Create a Card

let form = document.querySelector("form");
let userName = document.getElementById("inputName");
let mail = document.getElementById("inputEmail");
let select = document.querySelector("select");
// let number = document.getElementById('inputNumber');
let card = document.getElementById("card");

console.log(card);

const formSubmit = (e) => {
  e.preventDefault();

  // card.className  = 'py-2'

  let cardBody = document.createElement("div");
  cardBody.className =
    "card-body roundad-0 bg-body-secondary shadow-lg p-4 my-2 border-none";
  card.appendChild(cardBody);

  let h4 = document.createElement("h4");
  h4.innerText = userName.value;
  // h4.innerText = "Riya"
  h4.className = "d-inline";
  cardBody.appendChild(h4);

  let Button = document.createElement("button");
  Button.innerText = "Delete";
  Button.className = "btn btn-danger float-end ";
  cardBody.appendChild(Button);

  let h6 = document.createElement("h6");
  h6.innerText = mail.value;
  // h6.innerText = "riya@gamil.com";
  h6.className = "my-2";
  cardBody.appendChild(h6);

  let p = document.createElement("p");
  p.innerText = select.value;
  // p.innerText = "Ratlam";
  cardBody.appendChild(p);

  // let callBtn = document.createElement('button');
  // callBtn.innerText = "Call Now";
  // callBtn.className = "btn btn-primary";
  // card.appendChild(callBtn)

  form.reset();
};

form.addEventListener("submit", formSubmit);

//***************************************************************************** */

// Dark and Light Mode

let lightMode = document.getElementById("light");
let darkMode = document.getElementById("dark");

let background = document.getElementById("background");
let navbar = document.getElementById("navbar");
let navWhiteHeading = document.getElementById("nav-whiteHeading");
let heading = document.getElementById("heading");

// Dark Mode Button
function dark(e) {
  e.preventDefault();

  background.className = "bg-dark";
  navbar.className = "bg-light w-100 text-center fs-3 py-3";
  navWhiteHeading.className = "bg-light";
  heading.className = "text-white w-100 text-center display-1 my-5";
  card.style.backgroundColor = "white";
  card.className = "bg-dark";
}

darkMode.addEventListener("click", dark);

// Light Mode Button

function light(e) {
  e.preventDefault();
  background.className = "bg-light";
  navbar.className = "bg-dark w-100 text-center fs-3 py-3";
  navWhiteHeading.className = "bg-dark text-light";
  card.className = "bg-light";
  heading.className = "text-dark w-100 text-center display-1 my-5";
}

lightMode.addEventListener("click", light);

// Delete Card

const deltCard = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let cardBody = e.target.parentElement;
    if (window.confirm("Are You Sure ? ")) {
      card.removeChild(cardBody);
    }
  }
};

card.addEventListener("click", deltCard);

// Remove All Button

let removeBtn = document.getElementById("remove");
console.log(removeBtn);

const deleteAll = () => {
  if (window.confirm("Are You Sure ?")) {
    card.remove(card);
  }
};

removeBtn.addEventListener("click", deleteAll);
