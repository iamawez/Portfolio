// Sticky Navbar



let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

const typewriterData = [
  { id: "typewriter-greeting", text: "Hello, I'm" },
  { id: "typewriter-name", text: "Aawesh Manyar" },
  { id: "typewriter-title", text: "Frontend Developer" },
  // { id: "typewriter-description", text: "Hey, I am Aawesh Manyar, currently pursuing a degree in Computer Science Engineering at GHRIEBM Jalgaon, Maharashtra." },
];

const speed = 100; // Adjust typing speed (milliseconds per character)
let currentIndex = 0;
let charIndex = 0;


function typeText() {
  const element = document.getElementById(typewriterData[currentIndex].id);
  const text = typewriterData[currentIndex].text;

  if (charIndex < text.length) {
    element.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, speed);
  } else {
    currentIndex++;
    charIndex = 0;
    if (currentIndex < typewriterData.length) {
      setTimeout(typeText, speed * 3); // Adjust the delay between elements
    }else{
      $(document).ready(function () {
        var box = $(".home-text");
        box.addClass("animated hinge");
    });
    }
  }
}

// Start the typing animation
typeText();

