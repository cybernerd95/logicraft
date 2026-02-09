document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <a href="dashboard.html">Dashboard</a>
    <a href="entry.html">Data Entry</a>
    <a href="login.html">Login</a>
    <button onclick="logout()">Logout</button>
  `;
  document.body.prepend(nav);
});

function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

function checkAuth() {
  if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
}
