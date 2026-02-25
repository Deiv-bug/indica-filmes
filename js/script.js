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

const bulkGeneralMoviesText = `
O jogo da imitação
Diário de um banana
Brilho eterno de uma mente sem lembrança
Hill amor pelo jogo
De volta ao futuro
Battlefield
Todo mundo quase morto
País e filhas
Preço do amanhã
No limite do amanhã
+ velozes +furiosos
Bastardos inglórios
Jumper
Efeito borboleta
Era uma vez em hollywood
As Aventuras do Caça-Feitiço
Duna
A Vida Secreta de Walter Mitty
Rush - no limite da emoção
Os cúmplices
Apenas amigos
Faça oq eu digo mas não faça oq eu faço
O código da Vinci
Warcraft o primeiro encontro de dois mundos
Príncipe da percia
A origem dos guardiões
E se fosse verdade
Dias incríveis (old school)
Pelas garotas e pela glória
Presságio
Eurotrip
Pequenos guerreiros
Segundas intenções
Nova York eu te amo
O homem que desafiou o diabo
A odisseia
Advogado do Diabo
A torre negra
Malevola
O guerreiro silencioso
As crônicas de Nárnia
Último samurai
Entre montanhas
Maze runner
Seven
Rocketman (Elton John)
The town
Atração perigosa
Covil dos ladroes
Sem saída
A caçada ao grande tigre da montanha
Poder sem limites
Lendas do crime
Gladiator - o desafio
Projeto X
Donnie darko (viagem no tempo)
Busca implacável
Sucker punch
Ninja assassino
Dragon blade
Os fabelmans
Kingdom of heaven (cruzada)
A proposta
Scoby doo
O poderoso chefão 1, 2 e 3
O senhor dos anéis
Show de vizinha
Capitão harlock
Motoqueiro fantasma
Corvo branco
Onde nasce a esperança
Drive
Os 6 ridículos
Esposa de mentirinha
Looper - assassinos do futuro
Ritmo quente
O presente
Anjos da noite
O norbit
Conan o bárbaro
A chegada
Batman
Do que as mulheres gostam
Homem aranha (TM)
O regresso
É apenas uma fase amor
Caça fantasmas
Passageiros
Kingsman
O terno de 2 bilhões de dólares
Arthur and the invisibles
Amor a toda prova
Todo poderoso
A hora do rush
Um milhão de anos antes de Cristo
9: a salvação
Diário de uma paixão
Projeto X: uma festa fora de controle
Matraquilhos
A arca de Noé
O exame
Para sempre minha garota
Alfa
Ela é demais pra mim
Eu sou o número 4
Capitão América
Bohemian Rhapsody
Linha de frente
O segredo dos animais
Wolverine
Titanic
Coração valente / braveheart
O destino de Júpiter
Jack o caçador de gigantes
Predator
Caça às bruxas
Robin Hood
Guardiões da galáxia
Feito na América
Juntos e misturados
Querido john
Piratas do Caribe
The pianist
Kung fu futebol club
Kong: skull island
The mask
Deadpool
500 dias com ela
Zumbilandia
O date perfeito
Avatar
Guerra mundial Z
Superbad
Sexta feira em apuros
A noite devorou o mundo
Anjos da lei
Minhas adoráveis ex namoradas
Escorpião rei
Eurotrip passaporte para confusão
Eu te amo beth cooper
Sexdrive
As branquelas
Blade runner 2049
Um match supresa
ilha do medo
João e Maria caçadores de bruxas
O besouro verde
Valente
Padre
Van helsing
Atlantis
10 coisas que odeio em você
Ford vs Ferrari
Kung fu panda
Como treinar seu dragão
Stardust
Para sempre
O último boy scout
Projeto Almanaque
Hitman: agente 47
A grande muralha
Táxi Driver
Te amarei para sempre
Tróia
V de Vingança
Gente grande
A múmia
Círculo de fogo
A era do gelo
Sniper americano
Constantine
American pie
Solomon kane caçador de monstros
O livro de eli
Um sonho possível
10.000 A.C
Desconhecido
Sem saída (2011)
O homem nas trevas
Momentum
Alerta vermelho
Máquinas mortais
Need for speed
Django
Fúria de titans
Mad Max
Riddick
Eragon
No coração do mar
Feel the beat
Guerra é guerra
John Wick
Eu, robô
Assassino a preço fixo
Ela dança, eu danço
Hancock
Soldado universal
Coração de tinta o livro mágico
John Carter entre dois mundos
Red light
Amizade colorida
Sexo sem compromisso
Uncharted
Hulk (2008)
Meu namorado é um zumbi
Caminhando com Dinossauro
Coração de cavaleiro
Hellboy
Trovão negro
A lenda de beowulf
Lobisomem: a besta entre nós
2035: dimensão proibida
Independence Day: Resurgence
O dia que a terra parou
The odyssey
As vantagens de ser invisível
Cowboys e aliens
O curioso caso de beijamin button
Mentes sombrias
A órfã
65 - ameaça pré-histórica
Linha de frente
Jogador Nº 1
12 horas de sobrevivência
Hacker: todo crime tem um início
Cloverfield
Bad boys
Como se fosse a primeira vez
Vovozona
Viagem 2: a ilha misteriosa
`;

const bulkHorrorMoviesText = `
Nefarious
A bruxa da casa ao lado
1408
Ecos do além
Assim na terra como no inferno
Aterrorizados (aterrados)
A casa da noite eterna
Espíritos: a morte está ao seu lado
Noroi a lenda de kagotaba
Corrente do mal
Quando as luzes se apagam
A autópsia
A casa que Jack construiu
A nona sessão
O espelho (oculus)
Evocando espíritos
Demoníaca
Alma perdida
Bar luva dourada
A espinha do diabo
O sono da morte
Não feche os olhos
Antrum
Marcas da maldição
Famintos
Verão: 1984
O iluminado
O nevoeiro
Ouija
`;

const streamingLogos = {
  "Max": { short: "MAX", bg: "#2b53ff" },
  "Prime Video": { short: "PV", bg: "#00a8e1" },
  "Apple TV": { short: "TV", bg: "#111111" },
  "Netflix": { short: "N", bg: "#e50914" },
  "Telecine": { short: "TC", bg: "#f59e0b" },
  "Google Play": { short: "GP", bg: "#34a853" },
  "Star+": { short: "S+", bg: "#1f7aff" },
  "Disney+": { short: "D+", bg: "#113ccf" },
  "Não informado": { short: "--", bg: "#334155" }
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

function normalizeTitle(value) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function titleToId(value) {
  const base = normalizeTitle(value).replace(/\s+/g, "-");
  return base || "filme";
}

function createPosterForTitle(title) {
  const words = title.split(" ").filter(Boolean);
  const initials = words.slice(0, 2).map((word) => word[0]).join("").toUpperCase() || "FM";
  return "https://placehold.co/400x600/1f2937/e5e7eb?text=" + encodeURIComponent(initials);
}

function parseMovieLines(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

function buildAutoSynopsis(title, genreText) {
  return title + " é uma indicação de " + genreText.toLowerCase() + ". Sinopse detalhada em atualização.";
}

const manualGenreOverrides = {
  "brilho eterno de uma mente sem lembranca": ["romance", "drama"],
  "diario de uma paixao": ["romance", "drama"],
  "querido john": ["romance", "drama"],
  "sexo sem compromisso": ["romance"],
  "amizade colorida": ["romance"],
  "apenas amigos": ["romance"],
  "de volta ao futuro": ["ficcao-cientifica", "acao"],
  "preco do amanha": ["ficcao-cientifica", "acao"],
  "no limite do amanha": ["ficcao-cientifica", "acao"],
  "jumper": ["ficcao-cientifica", "acao"],
  "eu robo": ["ficcao-cientifica", "acao"],
  "jogador n 1": ["ficcao-cientifica", "acao"],
  "blade runner 2049": ["ficcao-cientifica", "drama"],
  "maze runner": ["ficcao-cientifica", "acao"],
  "a chegada": ["ficcao-cientifica", "drama"],
  "piratas do caribe": ["fantasia", "acao"],
  "as cronicas de narnia": ["fantasia", "acao"],
  "stardust": ["fantasia", "romance"],
  "joao e maria cacadores de bruxas": ["fantasia", "acao"],
  "kung fu panda": ["animacao", "acao"],
  "como treinar seu dragao": ["animacao", "acao"],
  "a era do gelo": ["animacao"],
  "valente": ["animacao", "acao"],
  "o segredo dos animais": ["animacao"],
  "the mask": ["comedia"],
  "as branquelas": ["comedia"],
  "american pie": ["comedia"],
  "superbad": ["comedia"],
  "eurotrip": ["comedia"],
  "projeto x": ["comedia"],
  "guerra mundial z": ["terror", "acao"],
  "o homem nas trevas": ["terror", "suspense"],
  "ilha do medo": ["suspense", "drama"],
  "seven": ["suspense", "drama"],
  "o codigo da vinci": ["suspense", "drama"],
  "a orfa": ["terror", "suspense"],
  "lendas do crime": ["drama", "suspense"],
  "o poderoso chefao 1 2 e 3": ["drama"],
  "for d vs ferrari": ["drama", "acao"],
  "ford vs ferrari": ["drama", "acao"],
  "o jogo da imitacao": ["drama"],
  "diario de um banana": ["comedia"],
  "de volta ao presente": ["comedia"],
  "de volta para o futuro": ["ficcao-cientifica", "acao"],
  "todo mundo quase morto": ["comedia", "terror"],
  "bastardos inglorios": ["drama", "acao"],
  "efeito borboleta": ["ficcao-cientifica", "drama"],
  "era uma vez em hollywood": ["drama", "comedia"],
  "as aventuras do caca feitico": ["fantasia", "acao"],
  "duna": ["ficcao-cientifica", "acao"],
  "a vida secreta de walter mitty": ["drama", "comedia"],
  "rush no limite da emocao": ["drama", "acao"],
  "os cumplices": ["comedia"],
  "faca oq eu digo mas nao faca oq eu faco": ["comedia"],
  "warcraft o primeiro encontro de dois mundos": ["fantasia", "acao"],
  "principe da percia": ["fantasia", "acao"],
  "principe da persia": ["fantasia", "acao"],
  "a origem dos guardioes": ["animacao", "fantasia"],
  "e se fosse verdade": ["romance", "comedia"],
  "dias incriveis old school": ["comedia"],
  "pelas garotas e pela gloria": ["comedia"],
  "pressagio": ["ficcao-cientifica", "suspense"],
  "pequenos guerreiros": ["ficcao-cientifica", "acao"],
  "segundas intencoes": ["drama", "romance"],
  "nova york eu te amo": ["romance", "drama"],
  "o homem que desafiou o diabo": ["comedia", "drama"],
  "a odisseia": ["drama", "acao"],
  "advogado do diabo": ["suspense", "drama"],
  "a torre negra": ["fantasia", "acao"],
  "malevola": ["fantasia", "acao"],
  "o guerreiro silencioso": ["drama", "acao"],
  "ultimo samurai": ["drama", "acao"],
  "entre montanhas": ["drama", "romance"],
  "rocketman elton john": ["drama", "musical"],
  "the town": ["suspense", "drama"],
  "atracao perigosa": ["suspense", "drama"],
  "covil dos ladroes": ["acao", "suspense"],
  "sem saida": ["suspense", "acao"],
  "a cacada ao grande tigre da montanha": ["acao", "drama"],
  "poder sem limites": ["ficcao-cientifica", "drama"],
  "gladiator o desafio": ["drama", "acao"],
  "donnie darko viagem no tempo": ["ficcao-cientifica", "drama"],
  "busca implacavel": ["acao", "suspense"],
  "sucker punch": ["fantasia", "acao"],
  "ninja assassino": ["acao"],
  "dragon blade": ["acao", "drama"],
  "os fabelmans": ["drama"],
  "kingdom of heaven cruzada": ["drama", "acao"],
  "scoby doo": ["comedia", "fantasia"],
  "scooby doo": ["comedia", "fantasia"],
  "show de vizinha": ["comedia", "romance"],
  "capitao harlock": ["animacao", "ficcao-cientifica"],
  "motoqueiro fantasma": ["fantasia", "acao"],
  "corvo branco": ["drama"],
  "onde nasce a esperanca": ["drama"],
  "os 6 ridiculos": ["comedia"],
  "esposa de mentirinha": ["comedia", "romance"],
  "looper assassinos do futuro": ["ficcao-cientifica", "acao"],
  "ritmo quente": ["romance", "drama"],
  "o presente": ["suspense", "drama"],
  "anjos da noite": ["fantasia", "acao"],
  "o norbit": ["comedia"],
  "conan o barbaro": ["fantasia", "acao"],
  "batman": ["acao", "drama"],
  "do que as mulheres gostam": ["comedia", "romance"],
  "homem aranha tm": ["acao", "fantasia"],
  "o regresso": ["drama", "aventura"],
  "e apenas uma fase amor": ["romance", "comedia"],
  "caca fantasmas": ["comedia", "fantasia"],
  "passageiros": ["ficcao-cientifica", "romance"],
  "kingsman": ["acao", "comedia"],
  "o terno de 2 bilhoes de dolares": ["acao", "comedia"],
  "arthur and the invisibles": ["animacao", "fantasia"],
  "amor a toda prova": ["romance", "comedia"],
  "todo poderoso": ["comedia", "fantasia"],
  "a hora do rush": ["acao", "comedia"],
  "9 a salvacao": ["animacao", "ficcao-cientifica"],
  "projeto x uma festa fora de controle": ["comedia"],
  "matraquilhos": ["animacao", "comedia"],
  "a arca de noe": ["animacao", "fantasia"],
  "o exame": ["suspense", "drama"],
  "para sempre minha garota": ["romance", "drama"],
  "alfa": ["drama", "aventura"],
  "ela e demais pra mim": ["romance", "comedia"],
  "eu sou o numero 4": ["ficcao-cientifica", "acao"],
  "capitao america": ["acao", "ficcao-cientifica"],
  "bohemian rhapsody": ["drama", "musical"],
  "wolverine": ["acao", "ficcao-cientifica"],
  "titanic": ["romance", "drama"],
  "coracao valente braveheart": ["drama", "acao"],
  "o destino de jupiter": ["ficcao-cientifica", "acao"],
  "jack o cacador de gigantes": ["fantasia", "acao"],
  "predator": ["ficcao-cientifica", "acao"],
  "caca as bruxas": ["fantasia", "acao"],
  "robin hood": ["acao", "drama"],
  "guardioes da galaxia": ["ficcao-cientifica", "acao"],
  "feito na america": ["drama", "acao"],
  "juntos e misturados": ["romance", "comedia"],
  "the pianist": ["drama"],
  "kung fu futebol club": ["comedia", "acao"],
  "kong skull island": ["acao", "ficcao-cientifica"],
  "deadpool": ["acao", "comedia"],
  "500 dias com ela": ["romance", "drama"],
  "zumbilandia": ["comedia", "terror"],
  "o date perfeito": ["romance", "comedia"],
  "avatar": ["ficcao-cientifica", "acao"],
  "sexta feira em apuros": ["comedia"],
  "a noite devorou o mundo": ["terror", "suspense"],
  "anjos da lei": ["acao", "comedia"],
  "minhas adoraveis ex namoradas": ["romance", "comedia"],
  "escorpiao rei": ["fantasia", "acao"],
  "eurotrip passaporte para confusao": ["comedia"],
  "eu te amo beth cooper": ["romance", "comedia"],
  "sexdrive": ["comedia", "romance"],
  "um match supresa": ["romance", "comedia"],
  "um match surpresa": ["romance", "comedia"],
  "o besouro verde": ["acao", "comedia"],
  "padre": ["acao", "fantasia"],
  "van helsing": ["fantasia", "acao"],
  "atlantis": ["animacao", "fantasia"],
  "10 coisas que odeio em voce": ["romance", "comedia"],
  "para sempre": ["romance", "drama"],
  "o ultimo boy scout": ["acao", "suspense"],
  "projeto almanaque": ["ficcao-cientifica", "suspense"],
  "hitman agente 47": ["acao"],
  "a grande muralha": ["fantasia", "acao"],
  "taxi driver": ["drama"],
  "te amarei para sempre": ["romance", "drama"],
  "troia": ["drama", "acao"],
  "v de vinganca": ["acao", "drama"],
  "gente grande": ["comedia"],
  "a mumia": ["fantasia", "acao"],
  "circulo de fogo": ["ficcao-cientifica", "acao"],
  "sniper americano": ["drama", "acao"],
  "constantine": ["fantasia", "suspense"],
  "solomon kane cacador de monstros": ["fantasia", "acao"],
  "o livro de eli": ["ficcao-cientifica", "acao"],
  "um sonho possivel": ["drama"],
  "10000 a c": ["acao", "aventura"],
  "desconhecido": ["suspense", "acao"],
  "sem saida 2011": ["suspense", "acao"],
  "momentum": ["acao", "suspense"],
  "alerta vermelho": ["acao", "comedia"],
  "maquinas mortais": ["ficcao-cientifica", "acao"],
  "need for speed": ["acao"],
  "django": ["drama", "acao"],
  "furia de titans": ["fantasia", "acao"],
  "mad max": ["acao", "ficcao-cientifica"],
  "riddick": ["ficcao-cientifica", "acao"],
  "eragon": ["fantasia", "acao"],
  "no coracao do mar": ["drama", "acao"],
  "feel the beat": ["comedia", "drama"],
  "guerra e guerra": ["comedia", "romance"],
  "john wick": ["acao", "suspense"],
  "assassino a preco fixo": ["acao", "suspense"],
  "ela danca eu danco": ["romance", "drama"],
  "hancock": ["acao", "comedia"],
  "soldado universal": ["acao", "ficcao-cientifica"],
  "coracao de tinta o livro magico": ["fantasia", "acao"],
  "john carter entre dois mundos": ["ficcao-cientifica", "acao"],
  "red light": ["suspense"],
  "uncharted": ["acao", "aventura"],
  "hulk 2008": ["acao", "ficcao-cientifica"],
  "meu namorado e um zumbi": ["romance", "comedia"],
  "caminhando com dinossauro": ["animacao", "aventura"],
  "coracao de cavaleiro": ["romance", "acao"],
  "hellboy": ["fantasia", "acao"],
  "trovao negro": ["acao"],
  "a lenda de beowulf": ["animacao", "fantasia"],
  "famintos": ["terror", "suspense"],
  "lobisomem a besta entre nos": ["terror", "fantasia"],
  "independence day resurgence": ["ficcao-cientifica", "acao"],
  "o dia que a terra parou": ["ficcao-cientifica", "drama"],
  "the odyssey": ["drama", "acao"],
  "as vantagens de ser invisivel": ["drama", "romance"],
  "cowboys e aliens": ["ficcao-cientifica", "acao"],
  "o curioso caso de beijamin button": ["drama", "romance"],
  "mentes sombrias": ["ficcao-cientifica", "acao"],
  "65 ameaca pre historica": ["ficcao-cientifica", "acao"],
  "12 horas de sobrevivencia": ["terror", "suspense"],
  "hacker todo crime tem um inicio": ["suspense", "drama"],
  "bad boys": ["acao", "comedia"],
  "como se fosse a primeira vez": ["romance", "comedia"],
  "vovozona": ["comedia"],
  "viagem 2 a ilha misteriosa": ["acao", "fantasia"]
};

const genreLabels = {
  "ficcao-cientifica": "Ficção científica",
  "fantasia": "Fantasia",
  "suspense": "Suspense",
  "animacao": "Animação",
  "acao": "Ação",
  "aventura": "Aventura",
  "drama": "Drama",
  "romance": "Romance",
  "musical": "Musical",
  "terror": "Terror",
  "comedia": "Comédia",
  "outros": "Outros"
};

function formatGenreLabel(genres) {
  return genres.map((genre) => genreLabels[genre] || "Outros").join(" / ");
}

function classifyGeneralMovie(title) {
  const normalized = normalizeTitle(title);
  if (manualGenreOverrides[normalized]) {
    return manualGenreOverrides[normalized];
  }

  if (/terror|morte|demoni|diabo|espirito|orc|horror|ouija|bruxa/.test(normalized)) {
    return ["terror"];
  }

  if (/amor|paixao|namorad|casamento|relacao|beijo|amigos/.test(normalized)) {
    return ["romance"];
  }

  if (/futuro|espaco|robot|rob[oô]|alien|dimensao|runner|jupiter|independence/.test(normalized)) {
    return ["ficcao-cientifica", "acao"];
  }

  if (/dragao|narnia|bruxas|feitic|percia|piratas|beowulf|fantasma|mumia/.test(normalized)) {
    return ["fantasia", "acao"];
  }

  if (/guerra|wick|assassino|blade|mad max|predator|hulk|wolverine|capitao|deadpool|speed|sniper/.test(normalized)) {
    return ["acao"];
  }

  if (/clube|chefao|pianist|ford|bohemian|rocketman|drive|fabelmans|braveheart/.test(normalized)) {
    return ["drama"];
  }

  if (/kung fu panda|era do gelo|valente|dragao|animado|matraquilhos|arca de noe/.test(normalized)) {
    return ["animacao"];
  }

  if (/o iluminado|nevoeiro|cloverfield|antrum|maldicao|sombras|escuridao/.test(normalized)) {
    return ["terror", "suspense"];
  }

  if (/codigo|ilha|desconhecido|sete|seven|town|atracao perigosa|ladroes/.test(normalized)) {
    return ["suspense", "drama"];
  }

  return ["outros"];
}

const genreFilter = document.getElementById("genre-filter");
const moviesGrid = document.getElementById("movies-grid");
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

function addBulkMovies() {
  const existingNormalizedTitles = new Set(
    Array.from(document.querySelectorAll(".card .title")).map((titleNode) => normalizeTitle(titleNode.textContent))
  );
  const addedTitles = new Set();
  const usedIds = new Set(Object.keys(movieData));

  const groups = [
    { lines: parseMovieLines(bulkGeneralMoviesText), genreValue: "outros", genreLabel: "Outros" },
    { lines: parseMovieLines(bulkHorrorMoviesText), genreValue: "terror", genreLabel: "Terror" }
  ];

  groups.forEach((group) => {
    group.lines.forEach((title) => {
      const normalized = normalizeTitle(title);
      if (!normalized || existingNormalizedTitles.has(normalized) || addedTitles.has(normalized)) {
        return;
      }

      addedTitles.add(normalized);
      let movieId = titleToId(title);
      let count = 2;
      while (usedIds.has(movieId)) {
        movieId = titleToId(title) + "-" + count;
        count += 1;
      }
      usedIds.add(movieId);

      const genres = group.genreValue === "terror" ? ["terror"] : classifyGeneralMovie(title);
      const genreText = formatGenreLabel(genres);

      const synopsis = buildAutoSynopsis(title, genreText);
      const rating = "N/D";

      movieData[movieId] = {
        synopsis: synopsis,
        rating: rating,
        streaming: ["Não informado"]
      };

      const card = document.createElement("a");
      card.className = "card movie-link";
      card.dataset.movieId = movieId;
      card.dataset.genres = genres.join(",");
      card.href = "#";
      card.setAttribute("aria-label", "Saber mais sobre " + title);

      card.innerHTML =
        '<img class="poster" src="' + createPosterForTitle(title) + '" alt="Cartaz do filme ' + title + '" />' +
        '<div class="content">' +
          '<div class="title-row">' +
            '<h2 class="title">' + title + '</h2>' +
            '<span class="rating">' + rating + '</span>' +
          '</div>' +
          '<p class="genre">' + genreText + '</p>' +
          '<p class="desc">' + synopsis + '</p>' +
        '</div>';

      moviesGrid.appendChild(card);
    });
  });
}

addBulkMovies();

function getMovieCards() {
  return Array.from(document.querySelectorAll(".card"));
}

function applyGenreFilter() {
  const selectedGenre = genreFilter.value;
  let visibleCount = 0;

  getMovieCards().forEach((card) => {
    const genres = (card.dataset.genres || "").split(",");
    const isVisible = selectedGenre === "todos" || genres.includes(selectedGenre);
    card.style.display = isVisible ? "" : "none";
    if (isVisible) visibleCount += 1;
  });

  emptyState.style.display = visibleCount === 0 ? "block" : "none";
}

genreFilter.addEventListener("change", applyGenreFilter);

moviesGrid.addEventListener("click", (event) => {
  const link = event.target.closest(".movie-link");
  if (!link) return;

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

  info.streaming.forEach((service) => {
    const item = document.createElement("li");
    const serviceBaseName = service.split(" (")[0];
    const logoConfig = streamingLogos[serviceBaseName] || streamingLogos["Não informado"];

    const logo = document.createElement("img");
    logo.className = "service-logo";
    logo.src = makeLogoDataUri(logoConfig.short, logoConfig.bg);
    logo.alt = "Logo " + serviceBaseName;
    logo.loading = "lazy";
    item.appendChild(logo);

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

backToListBtn.addEventListener("click", () => {
  pageHeader.style.display = "";
  filterBar.style.display = "";
  moviesNav.style.display = "";
  movieDetail.hidden = true;
  applyGenreFilter();
});

scrollLeftBtn.addEventListener("click", () => {
  moviesGrid.scrollBy({ left: -420, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
  moviesGrid.scrollBy({ left: 420, behavior: "smooth" });
});

applyGenreFilter();
