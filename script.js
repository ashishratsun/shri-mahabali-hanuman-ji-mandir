// ==========================
// SHRI MAHABALI HANUMAN JI MANDIR
// Premium JavaScript
// ==========================


// Navbar Background Change on Scroll

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


// Welcome Message

window.onload = function () {

    console.log("🚩 Jai Bajrang Bali 🚩");

}


// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#FFD700";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
topBtn.style.zIndex = "9999";


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// Fade Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

observer.observe(sec);

});


// Dark Mode

const darkBtn = document.createElement("button");

darkBtn.innerHTML="🌙";

document.body.appendChild(darkBtn);

darkBtn.style.position="fixed";

darkBtn.style.left="25px";

darkBtn.style.bottom="25px";

darkBtn.style.width="50px";

darkBtn.style.height="50px";

darkBtn.style.borderRadius="50%";

darkBtn.style.border="none";

darkBtn.style.cursor="pointer";

darkBtn.style.fontSize="22px";

darkBtn.style.background="#ff6a00";

darkBtn.style.color="white";

darkBtn.style.zIndex="9999";


let dark=false;

darkBtn.onclick=function(){

dark=!dark;

if(dark){

document.body.style.background="#111";

document.body.style.color="white";

darkBtn.innerHTML="☀";

}else{

document.body.style.background="#fff8ef";

document.body.style.color="#222";

darkBtn.innerHTML="🌙";

}

}