// DOM (Document Object Model) is a programming interface for web documents.
// methods of accessing HTML
// tagName, .class, #id, querySelector, querySelectorAll

// getElementById

const header = document.getElementById("header");
//document.querySelector("#header");
header.innerText = "Welcome to Javascript DOM 🎉";

// getElementsByClassName
const topics = document.getElementsByClassName("topic");
//document.querySelector(".topic");
topics[1].innerText = "Accessing HTML using DOM";

// getElementsByTagName
const h1 = document.getElementsByTagName("h1");
h1[1].style.color = 'red';

// querySelector : selects the first element that matches the selector
const topic = document.querySelector("topic");

// querySelectorAll : selects all elements that match the selector


let x_cord = 0;

const theme = () =>{
    x_cord += 5;
    console.log(x_cord);
    console.log('Theme changed');
    const body = document.querySelector("body");

    if(body.classList.contains("bg-[#283237]")){
        body.classList.remove("bg-[#283237]", "text-white");
    }else{
        body.classList.add("bg-[#283237]", "text-white");
    }
}



// Browser storage 