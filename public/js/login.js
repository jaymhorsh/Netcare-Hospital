const login = document.getElementById("login-form");
login.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const result = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());

  if (result.status === "ok") {
    // console.log('Got the token:', result.data)
    // saving login details to localStorage
    localStorage.setItem('data', JSON.stringify({
      email,
      password
    }, ))
    alert("Login Successful");
    window.location = '/dashboard'
  } else {
    alert(result.error);
  }
});