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

// Botões Next e Prev da section about
document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.querySelector(".next-btn-about");
    const prevBtn = document.querySelector(".prev-btn-about");
    const aboutMain = document.querySelector(".about-main");
    const aboutGeneral = document.querySelector(".about-general");

    // Inicia com a about-general oculta
    aboutMain.style.display = "block";
    aboutGeneral.style.display = "none";

    nextBtn.addEventListener("click", function () {
        aboutMain.style.display = "none";  // Ocultar a primeira div
        aboutGeneral.style.display = "block";  // Exibir a segunda div
        prevBtn.style.display = "inline-block";  // Mostrar o botão de retroceder
        nextBtn.style.display = "none";  // Ocultar o botão de avançar
    });

    prevBtn.addEventListener("click", function () {
        aboutMain.style.display = "block";  // Exibir a primeira div
        aboutGeneral.style.display = "none";  // Ocultar a segunda div
        prevBtn.style.display = "none";  // Ocultar o botão de retroceder
        nextBtn.style.display = "inline-block";  // Exibir o botão de avançar
    });
});
