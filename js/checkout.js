
// Exercise 6
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
 validate()

});

const validate = () => {
  console.log("validate");
  let error = 0;
  // Get the input fields
  const fName = document.getElementById("fName");
  const fEmail = document.getElementById("fEmail");
  const fAddress = document.getElementById("fAddress");
  const fLastN = document.getElementById("fLastN");
  const fPassword = document.getElementById("fPassword");
  const fPhone = document.getElementById("fPhone");

  // Validate fields entered by the user: name, phone, password, and email
  const regexName = /^[a-zA-Zs\s]+$/;
  const regexNumber = /^[0-9]+$/;
  const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const regexNumLet = /^[a-zA-Z0-9s]+$/;

  if (
    fName.value.trim() == "" ||
    fName.value.trim().length < 3 ||
    regexName.test(fName.value.trim()) == false
  ) {
    error++;
    fName.classList.add("is-invalid");
  } else {
    fName.classList.remove("is-invalid");
  }

  if (
    fEmail.value.trim() == "" ||
    fEmail.value.trim().length < 3 ||
    regexEmail.test(fEmail.value.trim()) == false
  ) {
    error++;
    fEmail.classList.add("is-invalid");
  } else {
    fEmail.classList.remove("is-invalid");
  }

  if (fAddress.value.trim() == "" || fAddress.value.trim().length < 3) {
    error++;
    fAddress.classList.add("is-invalid");
  } else {
    fAddress.classList.remove("is-invalid");
  }

  if (
    fLastN.value.trim() == "" ||
    fLastN.value.trim().length < 3 ||
    regexName.test(fLastN.value.trim()) == false
  ) {
    error++;
    fLastN.classList.add("is-invalid");
  } else {
    fLastN.classList.remove("is-invalid");
  }

  if (
    fPassword.value == "" ||
    fPassword.value.length < 4 ||
    regexNumLet.test(fPassword.value) == false
  ) {
    error++;
    fPassword.classList.add("is-invalid");
  } else {
    fPassword.classList.remove("is-invalid");
  }

  if (
    fPhone.value.trim() == "" ||
    fPhone.value.trim().length < 3 ||
    fPhone.value.trim().length > 9 ||
    regexNumber.test(fPhone.value.trim()) == false
  ) {
    error++;
    fPhone.classList.add("is-invalid");
  } else {
    fPhone.classList.remove("is-invalid");
  }

  if (error > 0) {
    alert("Please fill in all required fields.");
  } else {
    alert("Form submitted successfully");
    form.submit();
  }
};

