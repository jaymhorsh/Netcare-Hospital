// 1. confirm password
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

// Validate Password
function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// Registration form
const form = document.getElementById("register");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const DoB = document.getElementById("date").value;
  // const gender =  document.querySelector(`[name="${gender}"]:checked`).value //get value from check box
  let gender = Array.from(document.getElementsByName("gender")).find(r => r.checked).value;
  console.log(gender)
  const select = document.getElementById("category");
  const category = select.options[select.selectedIndex].value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phoneNum").value;
  const kinName = document.getElementById("kinName").value;
  const kinPhone = document.getElementById("kinPhone").value;
  const select2 = document.getElementById("relationship");
  const relationship = select2.options[select.selectedIndex].value;
  const address = document.getElementById("textbox").value;
  const password = document.getElementById("password").value;


  // Making a request
  const result = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      DoB,
      gender,
      category,
      email,
      phone,
      kinName,
      kinPhone,
      relationship,
      address,
      password
    }),
  }).then((res) => res.json());

  if (result.status === "ok") {
    alert("Registration was Successful, Proceed to Login?");
    window.location = "/login";
  } else {
    alert(result.error);
  }
});

// Login