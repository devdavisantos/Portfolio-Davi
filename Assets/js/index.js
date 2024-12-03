// Botões Next e Prev da section about
document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.querySelector(".next-btn-about");
    const prevBtn = document.querySelector(".prev-btn-about");
    const aboutMain = document.querySelector(".about-main");
    const aboutGeneral = document.querySelector(".about-general");

    aboutMain.style.display = "block";
    aboutGeneral.style.display = "none";

    nextBtn.addEventListener("click", function () {
        aboutMain.style.display = "none";
        aboutGeneral.style.display = "block";
        prevBtn.style.display = "inline-block";
        nextBtn.style.display = "none";
    });

    prevBtn.addEventListener("click", function () {
        aboutMain.style.display = "block";
        aboutGeneral.style.display = "none";
        prevBtn.style.display = "none";
        nextBtn.style.display = "inline-block";
    });
});

// Botões Next e Prev dos cards no project
const containers = document.querySelectorAll(".cards-project");
const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");

const gap = 16;

containers.forEach((container, index) => {
    const cardWidth = container.querySelector(".card-project").offsetWidth;

    nextBtns[index].addEventListener("click", () => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft < maxScroll) {
            container.scrollLeft += cardWidth + gap;
        }
    });

    prevBtns[index].addEventListener("click", () => {
        if (container.scrollLeft > 0) {
            container.scrollLeft -= cardWidth + gap;
        }
    });
});