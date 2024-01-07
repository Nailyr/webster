// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika menu diklik
document.querySelector("#menu-bar").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik luar sidebar untuk menutup nav
const bar = document.querySelector("#menu-bar");

document.addEventListener("click", function (e) {
  if (!bar.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const form = document.querySelector("form");
const fullName = document.getElementById("nama");
const email = document.getElementById("email");
const no = document.getElementById("no");
const pesan = document.getElementById("pesan");

function sendEmail() {
  const bodyMessage =
    "Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${no.value}<br> Message: ${pesan.value}";

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "webstersolid@gmail.com",
    Password: "FC921FF9D18DDE6147A8860250D600EDFFFC",
    To: "webstersolid@gmail.com",
    From: "webstersolid@gmail.com",
    Subject: "Pelanggan",
    Body: bodyMessage,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
