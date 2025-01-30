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

// Carregamento dos cards do projeto json
    fetch('cards.json')
        .then(response => response.json())
        .then(data => {
            const websitesContainer = document.getElementById("#websites-cards");
            const gamesContainer = document.getElementById("#games-cards");

            if (!websitesContainer || !gamesContainer) {
                console.error("⚠️ Containers de projetos não encontrados!");
                return;
            }

            function createCard(project) {
                const card = document.createElement("div");
                card.classList.add("card-project");

                card.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="card-img">
                    <div class="card-body">
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-text">${project.description}</p>
                    </div>
                `;

                return card;
            }

            // Adiciona os cards dos websites
            data.websites.forEach(project => {
                websitesContainer.appendChild(createCard(project));
            });

            // Adiciona os cards dos jogos
            data.games.forEach(project => {
                gamesContainer.appendChild(createCard(project));
            });
        })
        .catch(error => console.error('❌ Erro ao carregar JSON:', error));