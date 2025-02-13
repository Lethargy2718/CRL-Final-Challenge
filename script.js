const toggleBtn = document.querySelector(".dropdown");
const nav = document.querySelector("nav");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
})

// nav.classList.add("nav--visible");