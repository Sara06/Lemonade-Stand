window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
//adding parallax effect to the hero section title
var titleOne = document.getElementById("title-one");
var titleTwo = document.getElementById("title-two");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  titleOne.style.right = value * 0.5 + "px";
  titleTwo.style.left = value * 0.5 + "px";
});

//adding responsive nav for mobile screens

function toggleMenu() {
  var x = document.getElementById("nav-links-sub");
  if (x.style.left != "0px") {
    x.style.left = "0px";
    document.body.style.overflowY = "hidden";
  } else {
    x.style.left = "-200px";
    document.body.style.overflowY = "visible";
  }
}

document.getElementById("year").textContent = new Date().getFullYear();

// Adding a form validation script for the contact form
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  var form = document.querySelector("form");

  // Add an event listener for the submit event
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form inputs
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();

    // Check if all fields are filled
    if (!name || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    // Perform a simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Check phone number format
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    form.reset(); // Reset the form fields
  });
});
