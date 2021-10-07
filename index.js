// code for mobile view. when user clicks menu, dropdown will turn black so its easily visible
const barsToggle = document.getElementById("bars");
const navLinks = document.getElementsByClassName("nav-links")[0];
const nav = document.getElementById("nav");

barsToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
})

barsToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-black");
})

// form submit for contact page, connects through formspree
const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Message successfully sent. I'll get back to you asap!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting the form."
  });
}
form.addEventListener("submit", handleSubmit)