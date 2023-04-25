let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  // to remove the active link class name on onclick
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  // to add the css to the clicked tab
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let menu = document.getElementById("sidemenu");

// to open menu
function openmenu() {
  menu.style.right = "0px";
}

// to close menu
function closemenu() {
  menu.style.right = "-200px";
}

// contact form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbx-P3biAvhN79xEh9xjF9E5q_kAwfOO692oaDTaZwG9GavFyoWyNmbaaaOU0Dlta5QqKQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
