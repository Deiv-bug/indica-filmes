    const movieData = {
      "interestelar": {
        synopsis: "Um grupo de astronautas atravessa um buraco de minhoca para buscar um novo futuro para a humanidade.",
        streaming: ["Max", "Prime Video (aluguel)", "Apple TV (aluguel)"]
      },
      "sociedade-do-anel": {
        synopsis: "Frodo recebe a missão de destruir o Um Anel e impedir o avanço de Sauron sobre a Terra-média.",
        streaming: ["Max", "Prime Video (aluguel)", "Apple TV (aluguel)"]
      },
      "corra": {
        synopsis: "Um jovem visita a família da namorada e descobre segredos perturbadores por trás da aparente hospitalidade.",
        streaming: ["Prime Video", "Telecine", "Apple TV (aluguel)"]
      },
      "aranhaverso": {
        synopsis: "Miles Morales encontra versões de outros universos do Homem-Aranha para impedir o colapso do multiverso.",
        streaming: ["Netflix", "Prime Video (aluguel)", "Apple TV (aluguel)"]
      },
      "parasita": {
        synopsis: "Uma família em dificuldade financeira se infiltra na rotina de uma família rica, com consequências explosivas.",
        streaming: ["Prime Video", "Telecine", "Apple TV (aluguel)"]
      },
      "la-la-land": {
        synopsis: "Uma atriz e um pianista se apaixonam enquanto tentam equilibrar amor e ambição em Los Angeles.",
        streaming: ["Prime Video", "Apple TV (aluguel)", "Google Play (aluguel)"]
      },
      "a-origem": {
        synopsis: "Dom Cobb lidera uma equipe para implantar uma ideia na mente de um alvo durante o sono profundo.",
        streaming: ["Max", "Prime Video (aluguel)", "Apple TV (aluguel)"]
      },
      "batman-cavaleiro-das-trevas": {
        synopsis: "Com Gotham ameaçada pelo Coringa, Batman precisa testar seus limites para proteger a cidade.",
        streaming: ["Max", "Prime Video (aluguel)", "Apple TV (aluguel)"]
      },
      "duna-parte-2": {
        synopsis: "Paul assume seu destino entre os Fremen e lidera a resistência em Arrakis contra o Império.",
        streaming: ["Max", "Prime Video (aluguel)", "Apple TV (aluguel)"]
      },
      "whiplash": {
        synopsis: "A ambição de um jovem músico colide com os métodos extremos de um renomado maestro de jazz.",
        streaming: ["Prime Video", "Telecine", "Apple TV (aluguel)"]
      },
      "clube-da-luta": {
        synopsis: "Um narrador desiludido cria, com Tyler Durden, um clube secreto que vira um movimento perigoso.",
        streaming: ["Star+", "Prime Video (aluguel)", "Apple TV (aluguel)"]
      },
      "coco": {
        synopsis: "No Dia dos Mortos, Miguel atravessa para o além e desvenda a história de sua família.",
        streaming: ["Disney+", "Prime Video (aluguel)", "Apple TV (aluguel)"]
      }
    };

    const streamingLogos = {
      "Max": { short: "MAX", bg: "#2b53ff" },
      "Prime Video": { short: "PV", bg: "#00a8e1" },
      "Apple TV": { short: "TV", bg: "#111111" },
      "Netflix": { short: "N", bg: "#e50914" },
      "Telecine": { short: "TC", bg: "#f59e0b" },
      "Google Play": { short: "GP", bg: "#34a853" },
      "Star+": { short: "S+", bg: "#1f7aff" },
      "Disney+": { short: "D+", bg: "#113ccf" }
    };

    function makeLogoDataUri(shortText, bgColor) {
      const svg =
        "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>" +
        "<rect width='64' height='64' rx='12' fill='" + bgColor + "'/>" +
        "<text x='32' y='40' text-anchor='middle' font-family='Arial, sans-serif' font-size='22' font-weight='700' fill='white'>" +
        shortText +
        "</text></svg>";
      return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
    }

    const genreFilter = document.getElementById("genre-filter");
    const moviesGrid = document.getElementById("movies-grid");
    const movieCards = Array.from(document.querySelectorAll(".card"));
    const movieLinks = Array.from(document.querySelectorAll(".movie-link"));
    const emptyState = document.getElementById("empty-state");
    const pageHeader = document.querySelector("header");
    const filterBar = document.querySelector(".filter-bar");
    const moviesNav = document.querySelector(".movies-nav");
    const movieDetail = document.getElementById("movie-detail");
    const backToListBtn = document.getElementById("back-to-list");
    const detailPoster = document.getElementById("detail-poster");
    const detailTitle = document.getElementById("detail-title");
    const detailGenre = document.getElementById("detail-genre");
    const detailSynopsis = document.getElementById("detail-synopsis");
    const detailStreaming = document.getElementById("detail-streaming");
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");

    genreFilter.addEventListener("change", function () {
      const selectedGenre = genreFilter.value;
      let visibleCount = 0;

      movieCards.forEach(function (card) {
        const genres = (card.dataset.genres || "").split(",");
        const isVisible = selectedGenre === "todos" || genres.includes(selectedGenre);
        card.style.display = isVisible ? "" : "none";
        if (isVisible) visibleCount += 1;
      });

      emptyState.style.display = visibleCount === 0 ? "block" : "none";
    });

    movieLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const movieId = link.dataset.movieId;
        const info = movieData[movieId];
        if (!info) return;

        const poster = link.querySelector(".poster");
        const title = link.querySelector(".title").textContent;
        const genre = link.querySelector(".genre").textContent;

        detailPoster.src = poster.src;
        detailPoster.alt = poster.alt;
        detailTitle.textContent = title;
        detailGenre.textContent = genre;
        detailSynopsis.textContent = info.synopsis;
        detailStreaming.innerHTML = "";

        info.streaming.forEach(function (service) {
          const item = document.createElement("li");
          const serviceBaseName = service.split(" (")[0];
          const logoConfig = streamingLogos[serviceBaseName];

          if (logoConfig) {
            const logo = document.createElement("img");
            logo.className = "service-logo";
            logo.src = makeLogoDataUri(logoConfig.short, logoConfig.bg);
            logo.alt = "Logo " + serviceBaseName;
            logo.loading = "lazy";
            item.appendChild(logo);
          }

          const label = document.createElement("span");
          label.textContent = service;
          item.appendChild(label);
          detailStreaming.appendChild(item);
        });

        pageHeader.style.display = "none";
        filterBar.style.display = "none";
        moviesNav.style.display = "none";
        emptyState.style.display = "none";
        movieDetail.hidden = false;
      });
    });

    backToListBtn.addEventListener("click", function () {
      pageHeader.style.display = "";
      filterBar.style.display = "";
      moviesNav.style.display = "";
      movieDetail.hidden = true;
      genreFilter.dispatchEvent(new Event("change"));
    });

    scrollLeftBtn.addEventListener("click", function () {
      moviesGrid.scrollBy({ left: -420, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", function () {
      moviesGrid.scrollBy({ left: 420, behavior: "smooth" });
    });
