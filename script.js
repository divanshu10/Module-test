let globalSumit = false;
function validate(isSubmit = false) {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let country = document.getElementById("country").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let others = document.getElementById("others").checked;
  let error = false;
  console.log(isSubmit);

  if (isSubmit) {
    globalSumit = true;
  }

  //first name condition
  if (globalSumit) {
    var letters = /^[a-zA-Z]*$/;
    if (isNaN(firstName) && firstName.length >= 3 && firstName.match(letters)) {
      document.getElementById("first-name-valid").style.display = "block";
      document.getElementById("first-name-invalid").style.display = "none";
    } else {
      document.getElementById("first-name-invalid").style.display = "block";
      document.getElementById("first-name-valid").style.display = "none";
      error = true;
    }

    //last name condition
    if (isNaN(lastName) && lastName.length >= 3 && lastName.match(letters)) {
      document.getElementById("last-name-valid").style.display = "block";
      document.getElementById("last-name-invalid").style.display = "none";
    } else {
      document.getElementById("last-name-invalid").style.display = "block";
      document.getElementById("last-name-valid").style.display = "none";
      error = true;
    }

    //email condition
    if (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") >= 1 &&
      email.lastIndexOf(".") < email.length - 2 &&
      email.lastIndexOf(".") >= email.length - 4
    ) 
    {
      document.getElementById("valid-email").style.display = "block";
      document.getElementById("invalid-email").style.display = "none";
    } else {
      document.getElementById("invalid-email").style.display = "block";
      document.getElementById("valid-email").style.display = "none";
      error = true;
    }
    // isNaN = it checks output is number or Not a number
    // !isNaN = it returns true if there is a number
    var validNumber = /^\d{10}$/;
    let get_num = String(mobile).charAt(0);
    var firstIndex = Number(get_num);

    let mobilenumber = parseInt(mobile);
    if (
      mobile.length == 10 &&
      !isNaN(mobilenumber) &&
      firstIndex > 5 &&
      mobile.match(validNumber)
    ) {
      document.getElementById("valid-number").style.display = "block";
      document.getElementById("invalid-number").style.display = "none";
    } else {
      document.getElementById("invalid-number").style.display = "block";
      document.getElementById("valid-number").style.display = "none";
      error = true;
    }

    if (country != "none") {
      document.getElementById("valid-country").style.display = "block";
      document.getElementById("invalid-country").style.display = "none";
    } else {
      document.getElementById("invalid-country").style.display = "block";
      document.getElementById("valid-country").style.display = "none";
      error = true;
    }

    if (male || female || others) {
      document.getElementById("valid-gender").style.display = "block";
      document.getElementById("invalid-gender").style.display = "none";
    } else {
      document.getElementById("invalid-gender").style.display = "block";
      document.getElementById("valid-gender").style.display = "none";
      error = true;
    }

    // 1- reset the form, clear all valid and invalid messages
    // 2- Alert popup - your form has been submitted successfully
    if (!error && isSubmit) {
      swal({
        title: "Success!",
        text: `Your form has been submitted`,
        icon: "success",
        button: "Ok",
      });

      document.getElementById("form-registration").reset();

      let validFeedback = document.getElementsByClassName("valid-feedback");
      for (i = 0; i < validFeedback.length; i++) {
        validFeedback[i].style.display = "none";
      }
      let invalidFeedback = document.getElementsByClassName("invalid-feedback");
      for (i = 0; i < invalidFeedback.length; i++) {
        invalidFeedback[i].style.display = "none";
      }
    }
  }
}
