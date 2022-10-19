"use strict";
var text = document.querySelector(".text");
const pattern = /^[^]+@[^ ]+\.[a-z]{2,3}$/;
const email = document.querySelector(".email");
const btn = document.querySelector(".btn");

function validateEmail(e) {
  if (email.value.match(pattern)) {
    email.classList.remove("err");
    text.innerHTML = "Your email address is valid";
    text.classList.remove("error");
    text.classList.add("success");
  } else {
    text.classList.remove("success");
    text.classList.add("error");
    text.innerHTML = "Please provide a valid email address ";
    email.classList.add("err");
  }
}

email.addEventListener("keydown", validateEmail);
text.innerHTML = "";
btn.addEventListener("click", () => {
  if (email.value === "") {
    text.innerHTML = "Whoops! It looks like you forgot to add your email";
  }
});
