// get user details for login
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

btn.addEventListener("click", validateLogin);

function validateLogin() {
  //input value
  let emailValue = email.value;
  let passwordValue = password.value;

  //credential check
  let emailCheck = String(emailValue)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  let passwordCheck = /^[A-Za-z]\w{7,14}$/;

  if (passwordValue.match(passwordCheck) && emailCheck) {
    return (window.location.href = "./success.html");
  } else {
    alert("Enter a valid email and password!");
    return false;
  }
}





// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

// function CheckPassword(inputtxt) {
//   var passw = /^[A-Za-z]\w{7,14}$/;
//   if (inputtxt.value.match(passw)) {
//     alert("Correct, try another...");
//     return true;
//   } else {
//     alert("Wrong...!");
//     return false;
//   }
// }

// function validateEmail(value) {
//   var input = document.createElement('input');

//   input.type = 'email';
//   input.required = true;
//   input.value = value;

//   return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
// }

// function checkPassword(str) {
//   var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//   return re.test(str);
// }
