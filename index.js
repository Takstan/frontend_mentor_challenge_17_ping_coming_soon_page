"use strict";

const form = document.querySelector(".main__form");
const inputEmail = document.querySelector(".main__input");
const btnSubmit = document.querySelector(".main__btn-submit");
const errorMessage = document.querySelector(".main__input--error");

const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;

const validate = function (el) {
  const inputValue = el.value.trim();

  // Check if the input is empty
  if (inputValue.length === 0) {
    errorMessage.style.display = "none";
  } else if (!emailRegex.test(inputValue)) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
};

// Add input event listener to validate while typing
inputEmail.addEventListener("input", function () {
  validate(inputEmail);
});
