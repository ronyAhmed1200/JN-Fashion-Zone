// navbar color changing while scroll
let navbar = document.querySelector("nav");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 40) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("bg-transparent");
  }
};

//service list add class
let serviceSection = document.querySelector(".service_section");
let serviceList = document.querySelectorAll(".service-list li");

serviceSection.addEventListener("mouseenter", addAnimation);
function addAnimation() {
  serviceList.forEach((currentItem) => {
    currentItem.classList.add("animate__animated", "animate__fadeInLeft");
  });
  addDelay();
}

//server list remove class
serviceSection.addEventListener("mouseleave", removeAnimation);
function removeAnimation() {
  serviceList.forEach((currentItem) => {
    currentItem.classList.remove("animate__animated", "animate__fadeInLeft");
  });
}

//service list animation delay
function addDelay() {
  for (let i = 0; i < serviceList.length; i++) {
    let delayInTime = i * 1000;
    let currentElement = serviceList[i];
    console.log(currentElement);
    serviceList[i].style.setProperty("--animate-delay", delayInTime);
  }
  serviceList.style.setProperty("--animate-duration", "2s");
}

//contact section hover effect
let contactSection = document.querySelector(".contact");
let contactBtn = document.querySelector(".contact-btn");

contactSection.addEventListener("mouseenter", addContactAnimation);
function addContactAnimation() {
  contactBtn.classList.add("animate__animated", "animate__fadeInUpBig");
}

//server list remove class
contactSection.addEventListener("mouseleave", removeContactAnimation);
function removeContactAnimation() {
  contactBtn.classList.remove("animate__animated", "animate__fadeInUpBig");
}
