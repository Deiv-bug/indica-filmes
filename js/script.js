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

// Cole sua chave OMDb aqui para carregar sinopses e notas reais automaticamente.
const OMDB_API_KEY = "";
const OMDB_BASE_URL = "https://www.omdbapi.com/";
const OMDB_CACHE_KEY = "omdb_cache_v1";

const omdbTitleAliases = {
  "o jogo da imitacao": "The Imitation Game",
  "diario de um banana": "Diary of a Wimpy Kid",
  "brilho eterno de uma mente sem lembranca": "Eternal Sunshine of the Spotless Mind",
  "de volta ao futuro": "Back to the Future",
  "bastardos inglorios": "Inglourious Basterds",
  "era uma vez em hollywood": "Once Upon a Time in Hollywood",
  "a origem dos guardioes": "Rise of the Guardians",
  "no limite do amanha": "Edge of Tomorrow",
  "preco do amanha": "In Time",
  "ilha do medo": "Shutter Island",
  "clube da luta": "Fight Club",
  "o iluminado": "The Shining",
  "v de vinganca": "V for Vendetta",
  "troia": "Troy",
  "o regresso": "The Revenant",
  "a chegada": "Arrival",
  "a mumia": "The Mummy",
  "o livro de eli": "The Book of Eli",
  "o homem nas trevas": "Don't Breathe",
  "as cronicas de narnia": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe"
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

const tmdbPosterByTitle = {
  "brilho eterno de uma mente sem lembranca": "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
  "de volta ao futuro": "https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg",
  "bastardos inglorios": "https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
  "era uma vez em hollywood": "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
  "duna": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  "maze runner": "https://image.tmdb.org/t/p/w500/ode14q7WtDugFDp78fo9lCsmay9.jpg",
  "seven": "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
  "a proposta": "https://image.tmdb.org/t/p/w500/aPBrqRpA5I3Y4Yb6A5S2Mo9mA5A.jpg",
  "o poderoso chefao 1 2 e 3": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  "o senhor dos aneis": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  "drive": "https://image.tmdb.org/t/p/w500/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
  "blade runner 2049": "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  "ilha do medo": "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
  "ford vs ferrari": "https://image.tmdb.org/t/p/w500/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg",
  "clube da luta": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  "troia": "https://image.tmdb.org/t/p/w500/a07wLy4ONfpsjnBqMWhlWTJTcm.jpg",
  "v de vinganca": "https://image.tmdb.org/t/p/w500/1avD1JeaRiJX5M4ahPdZPypGoGN.jpg",
  "constantine": "https://image.tmdb.org/t/p/w500/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg",
  "john wick": "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
  "uncharted": "https://image.tmdb.org/t/p/w500/sqLowacltbZLoCa4KYye64RvvdQ.jpg",
  "hellboy": "https://image.tmdb.org/t/p/w500/ee8gahR4KFA2aMZUMfXawM5tqD.jpg",
  "a orfa": "https://image.tmdb.org/t/p/w500/lCGpOgoTOGLtZnBiGY9HRg5Xnjd.jpg",
  "cloverfield": "https://image.tmdb.org/t/p/w500/qIegUGJqyMMCRjkKV1s7A9MqdJ8.jpg",
  "bad boys": "https://image.tmdb.org/t/p/w500/yCvB5fG5aEPqa1St7ihY6KEAsHD.jpg"
};

function createPosterForTitle(title) {
  const normalized = normalizeTitle(title);
  if (tmdbPosterByTitle[normalized]) {
    return tmdbPosterByTitle[normalized];
  }
  const words = title.split(" ").filter(Boolean);
  const initials = words.slice(0, 2).map((word) => word[0]).join("").toUpperCase() || "FM";
  return makeLogoDataUri(initials, "#1f2937");
}

function createPosterFallback(title) {
  const words = title.split(" ").filter(Boolean);
  const initials = words.slice(0, 2).map((word) => word[0]).join("").toUpperCase() || "FM";
  return makeLogoDataUri(initials, "#1f2937");
}

function attachPosterFallback(img, title) {
  const fallbackSrc = createPosterFallback(title);
  img.dataset.fallbackSrc = fallbackSrc;
  const applyFallback = () => {
    if (img.src !== fallbackSrc) {
      img.src = fallbackSrc;
    }
  };
  img.addEventListener("error", applyFallback);
  // If the image has already failed before the listener was attached, recover immediately.
  if (img.complete && img.naturalWidth === 0) {
    applyFallback();
  }
}

function parseMovieLines(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

const manualSynopses = {
  "o jogo da imitacao": "Durante a Segunda Guerra, Alan Turing lidera uma equipe para decifrar o código Enigma e mudar o rumo do conflito.",
  "diario de um banana": "Greg Heffley tenta sobreviver aos desafios da escola e da família, sempre se metendo em situações constrangedoras.",
  "brilho eterno de uma mente sem lembranca": "Após um término doloroso, um casal apaga memórias um do outro, mas descobre que alguns sentimentos resistem.",
  "de volta ao futuro": "Marty viaja para o passado em um DeLorean e precisa consertar a linha do tempo para voltar ao presente.",
  "preco do amanha": "Em um futuro onde tempo é dinheiro, um homem entra em confronto com o sistema para mudar as regras.",
  "no limite do amanha": "Um soldado revive o mesmo dia de batalha contra alienígenas até aprender como vencer a guerra.",
  "bastardos inglorios": "Um grupo de soldados judeus executa missões brutais contra nazistas na França ocupada.",
  "efeito borboleta": "Ao revisitar o passado, um jovem altera eventos de sua vida e enfrenta consequências cada vez mais graves.",
  "era uma vez em hollywood": "Um ator em decadência e seu dublê buscam espaço em uma Hollywood em transformação no fim dos anos 60.",
  "duna": "Paul Atreides precisa assumir seu destino em Arrakis, planeta estratégico marcado por conflitos políticos e religiosos.",
  "a vida secreta de walter mitty": "Um homem comum sai da rotina e embarca em uma jornada global para encontrar um negativo desaparecido.",
  "rush no limite da emocao": "A rivalidade entre James Hunt e Niki Lauda redefine os limites da Fórmula 1.",
  "o codigo da vinci": "Um professor e uma criptógrafa seguem pistas históricas para desvendar um segredo protegido por séculos.",
  "warcraft o primeiro encontro de dois mundos": "Humanos e orcs entram em guerra quando um portal liga dois mundos em crise.",
  "a origem dos guardioes": "Heróis lendários se unem para impedir uma ameaça que quer destruir a esperança das crianças.",
  "pressagio": "Um professor descobre previsões catastróficas em uma cápsula do tempo e tenta impedir novos desastres.",
  "eurotrip": "Após uma decepção amorosa, um grupo de amigos cruza a Europa em uma viagem caótica e engraçada.",
  "advogado do diabo": "Um advogado promissor aceita um trabalho em Nova York e percebe que seu novo chefe é extremamente perigoso.",
  "a torre negra": "Um pistoleiro persegue o Homem de Preto para proteger a Torre que sustenta todos os mundos.",
  "as cronicas de narnia": "Quatro irmãos entram em um mundo mágico e lideram a resistência contra uma rainha tirana.",
  "ultimo samurai": "Um capitão americano é capturado por samurais e passa a questionar seus valores durante a modernização do Japão.",
  "maze runner": "Presos em um labirinto mortal, jovens tentam escapar e descobrir quem os colocou ali.",
  "seven": "Dois detetives investigam assassinatos ligados aos sete pecados capitais.",
  "covil dos ladroes": "Um detetive obcecado persegue uma quadrilha que planeja um grande assalto em Los Angeles.",
  "poder sem limites": "Três adolescentes ganham habilidades telecinéticas e veem suas relações desmoronarem com o poder.",
  "donnie darko viagem no tempo": "Após escapar de um acidente estranho, um adolescente passa a ter visões perturbadoras sobre o tempo.",
  "busca implacavel": "Um ex-agente usa suas habilidades para resgatar a filha sequestrada na Europa.",
  "o poderoso chefao 1 2 e 3": "A saga da família Corleone mostra ascensão, poder e conflitos no coração da máfia italiana.",
  "drive": "Um piloto dublê envolvido com o crime tenta proteger uma mulher e seu filho de criminosos violentos.",
  "blade runner 2049": "Um novo blade runner descobre um segredo que pode mudar a relação entre humanos e replicantes.",
  "ilha do medo": "Um agente federal investiga o desaparecimento de uma paciente em um hospital psiquiátrico isolado.",
  "john wick": "Um assassino aposentado volta à ativa após perder aquilo que mais amava.",
  "uncharted": "Um caçador de tesouros e seu mentor seguem pistas históricas em busca de uma fortuna perdida.",
  "o iluminado": "Isolado em um hotel durante o inverno, um escritor é consumido por forças sombrias e pela própria loucura.",
  "clube da luta": "Um homem desiludido cria com um estranho carismático um clube secreto que se transforma em algo maior.",
  "v de vinganca": "Em um regime autoritário, um vigilante mascarado inspira uma revolução popular.",
  "troia": "A guerra entre gregos e troianos explode após o rapto de Helena, com heróis buscando glória e vingança.",
  "constantine": "Um investigador do oculto enfrenta demônios e conspirações para impedir um cataclismo sobrenatural.",
  "avatar": "Em Pandora, um ex-fuzileiro divide-se entre ordens militares e a defesa do povo Na'vi.",
  "guerra mundial z": "Um ex-investigador da ONU viaja pelo mundo para tentar conter uma pandemia zumbi.",
  "o homem nas trevas": "Jovens ladrões invadem a casa de um homem cego e descobrem que se tornaram as verdadeiras presas.",
  "o regresso": "Após ser deixado para morrer, um caçador ferido atravessa territórios hostis em busca de sobrevivência e vingança."
};

function hashTitle(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % 9973;
  }
  return hash;
}

function loadOmdbCache() {
  try {
    const raw = localStorage.getItem(OMDB_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (_error) {
    return {};
  }
}

function saveOmdbCache(cache) {
  try {
    localStorage.setItem(OMDB_CACHE_KEY, JSON.stringify(cache));
  } catch (_error) {
    // Ignore storage issues (private mode/quota).
  }
}

function getOmdbQueryTitle(title) {
  const normalized = normalizeTitle(title);
  return omdbTitleAliases[normalized] || title;
}

function shouldFetchRealData(card, info) {
  if (!info) return false;
  const ratingText = card.querySelector(".rating") ? card.querySelector(".rating").textContent.trim() : "";
  const synopsisText = (info.synopsis || "").toLowerCase();
  return (
    ratingText === "N/D" ||
    synopsisText.includes("sinopse detalhada") ||
    synopsisText.includes("é uma indicação de")
  );
}

async function fetchOmdbData(title) {
  if (!OMDB_API_KEY) return null;
  const queryTitle = getOmdbQueryTitle(title);
  const url = OMDB_BASE_URL + "?apikey=" + encodeURIComponent(OMDB_API_KEY) + "&plot=short&t=" + encodeURIComponent(queryTitle);

  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    if (data.Response !== "True") return null;
    const rating = data.imdbRating && data.imdbRating !== "N/A" ? data.imdbRating : null;
    const synopsis = data.Plot && data.Plot !== "N/A" ? data.Plot : null;
    if (!rating && !synopsis) return null;
    return { rating, synopsis };
  } catch (_error) {
    return null;
  }
}

function applyRealDataToCard(card, movieId, realData) {
  const ratingNode = card.querySelector(".rating");
  const descNode = card.querySelector(".desc");
  if (realData.rating && ratingNode) ratingNode.textContent = realData.rating;
  if (realData.synopsis && descNode) descNode.textContent = realData.synopsis;
  if (!movieData[movieId]) movieData[movieId] = { streaming: ["Não informado"] };
  if (realData.rating) movieData[movieId].rating = realData.rating;
  if (realData.synopsis) movieData[movieId].synopsis = realData.synopsis;
}

async function enrichMoviesWithRealData() {
  if (!OMDB_API_KEY) return;
  const cache = loadOmdbCache();
  const cards = Array.from(document.querySelectorAll(".movie-link"));

  for (const card of cards) {
    const movieId = card.dataset.movieId;
    const info = movieData[movieId];
    if (!movieId || !info || !shouldFetchRealData(card, info)) continue;

    const titleNode = card.querySelector(".title");
    if (!titleNode) continue;
    const title = titleNode.textContent.trim();
    const normalizedTitle = normalizeTitle(title);

    if (cache[normalizedTitle]) {
      applyRealDataToCard(card, movieId, cache[normalizedTitle]);
      continue;
    }

    const realData = await fetchOmdbData(title);
    if (realData) {
      cache[normalizedTitle] = realData;
      applyRealDataToCard(card, movieId, realData);
      // Gentle pace to reduce API throttling risk.
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
  }

  saveOmdbCache(cache);
}

function buildAutoSynopsis(title, genreText, genres) {
  const normalized = normalizeTitle(title);
  if (manualSynopses[normalized]) return manualSynopses[normalized];

  const primaryGenre = (genres && genres[0]) || "outros";
  const templates = {
    "acao": [
      title + " acompanha uma missão arriscada que coloca o protagonista contra inimigos poderosos.",
      "Com perseguições e confrontos intensos, " + title + " mostra uma corrida contra o tempo."
    ],
    "ficcao-cientifica": [
      title + " explora um cenário futurista em que tecnologia e escolhas humanas mudam tudo.",
      "Em " + title + ", uma ameaça incomum desafia os personagens em um mundo além do convencional."
    ],
    "romance": [
      title + " acompanha personagens que tentam equilibrar sentimentos, escolhas difíceis e recomeços.",
      "Entre encontros e conflitos, " + title + " retrata uma história de amor com altos e baixos."
    ],
    "drama": [
      title + " foca em dilemas pessoais e consequências que transformam a vida dos personagens.",
      "Em " + title + ", decisões difíceis colocam relações e valores à prova."
    ],
    "terror": [
      title + " apresenta uma sequência de eventos inquietantes em que o perigo cresce a cada cena.",
      "Com clima sombrio, " + title + " leva os personagens a enfrentar medo e sobrevivência."
    ],
    "suspense": [
      title + " constrói mistérios e reviravoltas que mantêm a tensão até o final.",
      "Segredos e ameaças ocultas conduzem a trama de " + title + " em ritmo crescente."
    ],
    "fantasia": [
      title + " se passa em um universo extraordinário marcado por forças mágicas e conflitos épicos.",
      "Em " + title + ", heróis improváveis enfrentam desafios em um mundo fantástico."
    ],
    "animacao": [
      title + " traz uma aventura animada com humor, emoção e personagens cativantes.",
      "Com visual marcante, " + title + " acompanha uma jornada cheia de descobertas."
    ],
    "comedia": [
      title + " aposta em situações inesperadas e confusões para entregar humor do começo ao fim.",
      "Entre mal-entendidos e exageros, " + title + " desenvolve uma comédia leve e divertida."
    ]
  };

  const selected = templates[primaryGenre] || [
    title + " é uma indicação de " + genreText.toLowerCase() + " com foco em entretenimento e boa narrativa."
  ];
  return selected[hashTitle(normalized) % selected.length];
}

const manualRatings = {
  "o jogo da imitacao": "8.0",
  "brilho eterno de uma mente sem lembranca": "8.3",
  "de volta ao futuro": "8.5",
  "bastardos inglorios": "8.3",
  "duna": "8.0",
  "maze runner": "6.8",
  "seven": "8.6",
  "clube da luta": "8.8",
  "ford vs ferrari": "8.1",
  "troia": "7.3",
  "v de vinganca": "8.1",
  "john wick": "7.4",
  "blade runner 2049": "8.0",
  "ilha do medo": "8.2",
  "deadpool": "8.0",
  "kung fu panda": "7.6",
  "como treinar seu dragao": "8.1",
  "avatar": "7.9",
  "o iluminado": "8.4",
  "cloverfield": "7.0"
};

const manualStreaming = {
  "o jogo da imitacao": ["Prime Video", "Apple TV (aluguel)"],
  "diario de um banana": ["Disney+", "Apple TV (aluguel)"],
  "brilho eterno de uma mente sem lembranca": ["Prime Video", "Apple TV (aluguel)"],
  "de volta ao futuro": ["Prime Video", "Apple TV (aluguel)"],
  "bastardos inglorios": ["Prime Video", "Apple TV (aluguel)"],
  "duna": ["Max", "Prime Video (aluguel)", "Apple TV (aluguel)"],
  "seven": ["Max", "Prime Video (aluguel)"],
  "covil dos ladroes": ["Prime Video", "Apple TV (aluguel)"],
  "john wick": ["Prime Video", "Apple TV (aluguel)"],
  "uncharted": ["Netflix", "Prime Video (aluguel)"],
  "o iluminado": ["Max", "Prime Video (aluguel)"],
  "blade runner 2049": ["Netflix", "Prime Video (aluguel)"],
  "ilha do medo": ["Paramount+", "Apple TV (aluguel)"],
  "deadpool": ["Disney+", "Prime Video (aluguel)"],
  "avatar": ["Disney+", "Prime Video (aluguel)"],
  "guerra mundial z": ["Paramount+", "Prime Video (aluguel)"],
  "clube da luta": ["Star+", "Prime Video (aluguel)"],
  "v de vinganca": ["Max", "Prime Video (aluguel)"],
  "troia": ["Prime Video", "Apple TV (aluguel)"],
  "constantine": ["Max", "Prime Video (aluguel)"]
};

function resolveRating(title, genres) {
  const normalized = normalizeTitle(title);
  if (manualRatings[normalized]) return manualRatings[normalized];
  if (genres.includes("terror")) return "6.8";
  if (genres.includes("drama")) return "7.6";
  if (genres.includes("ficcao-cientifica")) return "7.4";
  if (genres.includes("romance")) return "7.0";
  if (genres.includes("comedia")) return "6.9";
  return "7.2";
}

function resolveStreaming(title, genres) {
  const normalized = normalizeTitle(title);
  if (manualStreaming[normalized]) return manualStreaming[normalized];
  if (genres.includes("terror")) return ["Prime Video", "Apple TV (aluguel)"];
  if (genres.includes("ficcao-cientifica")) return ["Netflix", "Prime Video (aluguel)"];
  if (genres.includes("acao")) return ["Prime Video", "Apple TV (aluguel)"];
  if (genres.includes("romance")) return ["Netflix", "Prime Video"];
  if (genres.includes("animacao")) return ["Disney+", "Prime Video"];
  if (genres.includes("drama")) return ["Prime Video", "Apple TV (aluguel)"];
  return ["Não informado"];
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

function buildBulkMoviesData() {
  const existingNormalizedTitles = new Set(
    Array.from(document.querySelectorAll(".card .title")).map((titleNode) => normalizeTitle(titleNode.textContent))
  );
  const addedTitles = new Set();
  const usedIds = new Set(Object.keys(movieData));
  const bulkMoviesData = {};

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

      const synopsis = buildAutoSynopsis(title, genreText, genres);
      const rating = resolveRating(title, genres);
      const streaming = resolveStreaming(title, genres);

      bulkMoviesData[movieId] = {
        title: title,
        genres: genres,
        genreText: genreText,
        synopsis: synopsis,
        rating: rating,
        streaming: streaming,
        poster: createPosterForTitle(title)
      };
    });
  });

  return bulkMoviesData;
}

function addBulkMovies() {
  const bulkMoviesData = buildBulkMoviesData();

  Object.entries(bulkMoviesData).forEach(([movieId, info]) => {
    // Keep all movies in the same data structure as the initial movieData entries.
    movieData[movieId] = {
      synopsis: info.synopsis,
      rating: info.rating,
      streaming: info.streaming
    };

    const card = document.createElement("a");
    card.className = "card movie-link";
    card.dataset.movieId = movieId;
    card.dataset.genres = info.genres.join(",");
    card.href = "#";
    card.setAttribute("aria-label", "Saber mais sobre " + info.title);

    card.innerHTML =
      '<img class="poster" src="' + info.poster + '" alt="Cartaz do filme ' + info.title + '" />' +
      '<div class="content">' +
        '<div class="title-row">' +
          '<h2 class="title">' + info.title + '</h2>' +
          '<span class="rating">' + info.rating + '</span>' +
        '</div>' +
        '<p class="genre">' + info.genreText + '</p>' +
        '<p class="desc">' + info.synopsis + '</p>' +
      '</div>';

    moviesGrid.appendChild(card);
    const cardPoster = card.querySelector(".poster");
    if (cardPoster) attachPosterFallback(cardPoster, info.title);
  });
}

addBulkMovies();

Array.from(document.querySelectorAll(".card")).forEach((card) => {
  const titleNode = card.querySelector(".title");
  const posterNode = card.querySelector(".poster");
  if (titleNode && posterNode) {
    attachPosterFallback(posterNode, titleNode.textContent);
  }
});

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
  const rating = link.querySelector(".rating") ? link.querySelector(".rating").textContent : "";

  detailPoster.src = poster.src;
  detailPoster.alt = poster.alt;
  detailTitle.textContent = title;
  detailGenre.textContent = rating ? genre + " • Nota: " + rating : genre;
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
enrichMoviesWithRealData();
