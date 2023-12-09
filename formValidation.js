function validateForm() {
  let validForm = true;
  console.log("got inside fn");

  //validate email
  let emailVal = document.getElementById("email").value;
  let valEmail = /^[a-zA-Z0-9!#$%.]+@[a-zA-Z0-9-]+\.([a-zA-Z]{2,3})$/;
  if (!valEmail.test(emailVal)) {
    document.getElementById("emailAns").innerText =
      "Must be a valid email address.";
    validForm = false;
  } else {
    document.getElementById("emailAns").innerText = "";
  }

  //validate password
  let passwordVal = document.getElementById("password").value;
  let valPassword = /^[a-zA-Z0-9]{8,10}$/;
  if (!valPassword.test(passwordVal)) {
    document.getElementById("passwordAns").innerText =
      "Must be between 8-10 characters.";
    validForm = false;
  } else {
    document.getElementById("passwordAns").innerText = "";
  }

  //validate verify password
  let vpasswordVal = document.getElementById("vpassword").value;
  if (!(vpasswordVal == passwordVal)) {
    document.getElementById("vpasswordAns").innerText = "Passwords must match.";
    validForm = false;
  } else {
    document.getElementById("vpasswordAns").innerText = "";
  }

  //

  //validate first name
  let fnVal = document.getElementById("fn").value;
  let valFn = /[A-Za-z]/;
  if (!valFn.test(fnVal)) {
    document.getElementById("fnAns").innerText = "Enter your first name.";
    validForm = false;
  } else {
    document.getElementById("fnAns").innerText = "";
  }

  //validate last name
  let lnVal = document.getElementById("ln").value;
  let valLn = /[A-Za-z]/;
  if (!valLn.test(lnVal)) {
    document.getElementById("lnAns").innerText = "Enter your last name.";
    validForm = false;
  } else {
    document.getElementById("lnAns").innerText = "";
  }

  //validate adress
  let addressVal = document.getElementById("address").value;
  let valAddress = /[a-zA-Z0-9\s.,'-]/;
  if (!valAddress.test(addressVal)) {
    document.getElementById("addressAns").innerText = "Enter a valid address.";
    validForm = false;
  } else {
    document.getElementById("addressAns").innerText = "";
  }

  //validate city
  let cityVal = document.getElementById("city").value;
  let valCity = /[A-Za-z]/;
  if (!valCity.test(cityVal)) {
    document.getElementById("cityAns").innerText = "Enter your city.";
    validForm = false;
  } else {
    document.getElementById("cityAns").innerText = "";
  }

  //validate state
  let stateVal = document.getElementById("state").value;
  let valState = /^[A-Za-z]{2}$/;
  if (!valState.test(stateVal)) {
    document.getElementById("stateAns").innerText =
      "Use 2 character abbreviation.";
    validForm = false;
  } else {
    document.getElementById("stateAns").innerText = "";
  }

  //validate zipcode
  let zipVal = document.getElementById("zip").value;
  let valZip = /^\d{5}$/;
  if (!valZip.test(zipVal)) {
    document.getElementById("zipAns").innerText =
      "Use a 5 letter zipcode format.";
    validForm = false;
  } else {
    document.getElementById("zipAns").innerText = "";
  }

  //validate phone number
  let phoneVal = document.getElementById("phone").value;
  let valPhone = /^\d{3}-\d{3}-\d{4}$/;
  if (!valPhone.test(phoneVal)) {
    document.getElementById("phoneAns").innerText = "Use 999-999-9999 format.";
    validForm = false;
  } else {
    document.getElementById("phoneAns").innerText = "";
  }

  //validate credit card
  let cardVal = document.getElementById("ccard").value;
  let valCard = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  if (!valCard.test(cardVal)) {
    document.getElementById("ccAns").innerText =
      "Use 1234-1234-1234-1234 format.";
    validForm = false;
  } else {
    document.getElementById("ccAns").innerText = "";
  }

  //validate expiration date
  let expVal = document.getElementById("exp").value;
  let valExp = /^(0[1-9]|1[0-2])\/\d{4}$/;
  if (!valExp.test(expVal)) {
    document.getElementById("expAns").innerText = "Use mm/yyyy format.";
    validForm = false;
  } else {
    document.getElementById("expAns").innerText = "";
  }
}
document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    //prevent default form submission
    event.preventDefault();
    //function to validate fields
    validateForm();
  });
