const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("hidden");
    hamburger.textContent = nav.classList.contains("hidden") ? "☰" : "✖";
});
const lastModified = document.getElementById("lastModified");
lastModified.textContent = document.lastModified;
