// ==========================
// SHRI MAHABALI HANUMAN JI MANDIR - Enhanced Animations
// ==========================

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#d35400";
        header.style.padding = "14px 8%";
    } else {
        header.style.background = "#ff6a00";
        header.style.padding = "18px 8%";
    }
});

// Scroll To Top Button (Already tha, improved)
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.cssText = `
    position:fixed; right:25px; bottom:25px; width:55px; height:55px; 
    border:none; border-radius:50%; background:#FFD700; color:#000; 
    font-size:24px; cursor:pointer; display:none; box-shadow:0 5px 20px rgba(0,0,0,.3);
    z-index:9999;
`;

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Enhanced Intersection Observer Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll("section, .box, .grid-item").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.9s ease";
    observer.observe(el);
});

// Gallery Swipe Feel (already hai toh enhance)
console.log("🚩 Jai Bajrang Bali 🚩 Website Animations Loaded");