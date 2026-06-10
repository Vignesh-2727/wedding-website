/* LOADER */

window.addEventListener("load", ()=>{

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("loader-hide");

    },3000);

});

/* OPEN BUTTON */

const button = document.querySelector(".open-btn");

button.addEventListener("click", ()=>{

    window.scrollTo({

        top:window.innerHeight,

        behavior:"smooth"
    });

});

/* COUNTDOWN */

const weddingDate = new Date(2026, 6, 5, 0, 0, 0).getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);

/* POPUP GALLERY */

const popup = document.getElementById("imagePopup");

const popupImg = document.getElementById("popupImg");

const closePopup = document.getElementById("closePopup");

const galleryImages = document.querySelectorAll(".gallery-item img");

/* OPEN */

galleryImages.forEach((img)=>{

    img.addEventListener("click", ()=>{

        popup.style.display = "flex";

        popupImg.src = img.src;
    });

});

/* CLOSE BUTTON */

closePopup.addEventListener("click", ()=>{

    popup.style.display = "none";
});

/* OUTSIDE CLICK */

popup.addEventListener("click", (e)=>{

    if(e.target === popup){

        popup.style.display = "none";
    }

});