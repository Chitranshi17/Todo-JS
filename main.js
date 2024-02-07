
let form = document.querySelector('form');

let input = document.getElementsByTagName('input');
// console.log(input)

let select = document.querySelector('select');

console.log(select)

let option = document.querySelector('option')
console.log(option);

let div = document.getElementsByClassName('card');

// console.log(div)
let div2 = document.getElementsByClassName('card-body')

// console.log(div2)
let span = document.getElementsByClassName('name')

// console.log(div)

let ul = document.querySelector('ul')

console.log()

// function forms(){
//     const div = document.createElement("div")
//     div.className="card-body  rounded-0 w-100"
//     div.innerText=input.value,select.value
    

// }

const formSubmit = (e) => {
    // console.log("submitted");

    e.preventDefault();
    
    ul.style.backgroundColor = "pink";

    let h4 = document.createElement('h4');
    h4.innerText = input[0].value;
    h4.className = "d-inline card-title"
    console.log(h4)
    div[0].appendChild(h4);

    let h6 = document.createElement('h6');
    h6.innerText = input[1].value;
    h6.className = "my-2"
    div[0].appendChild(h6)

    let p = document.createElement('p');
    p.innerText =select.value ;
    div[0].appendChild(p);

    let btnCall = document.createElement('a');
    btnCall.innerText = "Call Now"
    btnCall.className = "btn btn-primary text-black "
    div[0].appendChild(btnCall);
    
}


form.addEventListener("submit",formSubmit)


// Dark and Light Mode in Two Button

let Button1 = document.getElementById('light');
let Button2 = document.getElementById('dark');

let background = document.getElementById('background');
let heading = document.getElementById('heading');
let navbar = document.getElementById('navbar');
let navWhite = document.getElementById('nav-white');
console.log(navWhite)

const darkMode = (e) => {
    e.preventDefault();
    background.className = "bg-dark pb-5";
    navbar.className = "bg-light fs-3 w-100 text-center"
    navWhite.className = "bg-light "
    heading.className = "text-light display-1 w-100 text-center my-5"
}

Button2.addEventListener("click",darkMode);
