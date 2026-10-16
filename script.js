const COMMUNITY_LINKS = {
  vrchat: "https://vrchat.com/home/groups",
  discord: "https://discord.gg/3VUYgddZGP",
};

const DEFAULT_NOTICE_FEED = "assets/notices.json";

const translations = {
  en: {
    skip: "Skip to content",
    home: "The Continental, home",
    houseLabel: "A SOCIAL HOUSE",
    navigation: "Main navigation",
    navHome: "The lobby",
    navDispatch: "The Dispatch",
    navGatherings: "The Evenings",
    navAbout: "Our Company",
    navJoin: "Join the company",
    exploreHouse: "Explore the house",
    switchLanguage: "Switch language to Portuguese",
    openWatch: "Open the pocket watch",
    closeWatch: "Close the pocket watch",
    watchLabel: "Pocket watch",
    watchKicker: "THE HOUSE CHRONOMETER",
    watchTitle: "The hour, kept well",
    watchLocal: "YOUR TIME · LOCAL",
    watchHouse: "THE HOUSE · GMT−3",
    watchSky: "A GLIMPSE OF SKY FOR THE NIGHT WATCH",
    watchFooter: "THERE IS YET TIME BEFORE DAWN.",
    rabbitCaption: "FOLLOW THE WHITE RABBIT",
    playMusic: "Play background music",
    pauseMusic: "Pause background music",
    musicOff: "Play house music",
    musicOn: "Music is playing",
    musicUnavailable: "Background music could not be loaded",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    noticeEyebrow: "A WORD FROM THE NOTICEBOARD",
    noticeTitle: "A note from<br><em>the night watch.</em>",
    noticeDescription: "The latest word from the house is set down upon our noticeboard.",
    noticeCta: "Read the house notices",
    noticeQuiet: "The board is quiet for now. Check back after the next late-night gathering.",
    noticeFailed: "The noticeboard is taking a moment. The latest updates are always on Discord.",
    noticePostedBy: "POSTED BY",
    noticeDiscord: "OPEN THE DISCORD NOTICEBOARD",
    noticeUpdated: "LAST CHECKED",
    routeDispatchMeta: "LETTERS FROM THE HOUSE",
    routeDispatchTitle: "What we<br>have made.",
    routeGatheringMeta: "THE EVENING BOOK",
    routeGatheringTitle: "Where the<br>evening leads.",
    routePeopleMeta: "THE HOUSEHOLD",
    routePeopleTitle: "A few good folk<br>to know.",
    routeOpen: "OPEN THE FILE ↗",
    pageDispatchTitle: "Dispatches from the house",
    pageDispatchDeck: "A record of what we make, learn, watch, and share together.",
    pageGatheringTitle: "The house noticeboard",
    pageGatheringDeck: "Plans, local hours, and the latest word from the house.",
    pagePeopleTitle: "Those of the house",
    pagePeopleDeck: "A varied company, and a door left open. Pray, come in.",
    liveNoticeEyebrow: "THE LATEST HOUSE NOTICES",
    liveNoticeTitle: "Fresh word from<br><em>the noticeboard.</em>",
    noticeSource: "This public noticeboard shows recent community announcements. Open Discord to join the conversation.",
    noticeLoading: "Checking the noticeboard…",
    dispatchScheduleLabel: "NO HOUR APPOINTED",
    dispatchScheduleTitle: "Let the evening<br><em>take its course.</em>",
    dispatchScheduleText: "We are most often found together after midnight, GMT−3. There may be avatar lessons, art, a picture show, or simply good talk when the night owls gather.",
    peopleIntroTitle: "A modest company.<br><em>A door left open.</em>",
    currencyTitle: "GOLD · COMMUNITY CURRENCY",
    communityRule: "Be kind, respect the people and the spaces, and make room for another chair.",
    discordLatest: "For the latest word, visit our noticeboard on Discord.",
    heroEyebrow: "THE DOOR STANDS OPEN",
    heroSubEyebrow: "ESTABLISHED IN VR",
    heroTitle: "A little while<br>beyond <em>the hour.</em>",
    heroDescription: "A VRChat house for the curious and the creative. Learn a new art for your avatar, show us what you are making, join a film, or stay awhile for good conversation.",
    heroCta: "Pray, come in",
    heroBrowse: "See the latest dispatches",
    dressCode: "A TOUCH OF FINERY, IF YOU PLEASE.",
    heroArtAlt: "Original illustration of a golden-lit hotel entrance at night",
    signTop: "A HOUSE BETWEEN WORLDS",
    signBottom: "THERE IS ROOM FOR ONE MORE",
    artCaption: "AFTER HOURS · GMT−3",
    artSideLabel: "YOUR WORLD, IN YOUR OWN WAY",
    scrollExplore: "A GLANCE AROUND THE HOUSE",
    tickerLabel: "House motto",
    tickerOne: "DRESS WELL · BE KIND",
    tickerTwo: "AFTER MIDNIGHT · GMT−3",
    tickerThree: "LET US MAKE SOMETHING TOGETHER",
    tickerFour: "THERE IS ALWAYS ROOM FOR ONE MORE",
    dispatchEyebrow: "WORD FROM THE LOBBY",
    dispatchTitle: "The <em>dispatches.</em>",
    moreFromHouse: "Join the company",
    dispatchIntro: "Lessons, art, picture shows, and whatever else the evening brings.",
    filterLabel: "Filter dispatch posts",
    filterAll: "All dispatches",
    filterWorkshop: "Lessons",
    filterArt: "Art",
    filterMovies: "Picture shows",
    filterNotes: "House notes",
    catWorkshop: "A PRACTICAL LESSON",
    metaWorkshop: "AVATAR CUSTOMISATION",
    postWorkshopTitle: "Give your avatar<br><em>its own character.</em>",
    postWorkshopText: "Come along for a friendly lesson in making a VRChat avatar your own. Bring a work in progress, ask away, and learn at a comfortable pace.",
    postWorkshopLink: "Learn in good company",
    catArt: "THE ART ROOM",
    metaArt: "ART & A SHOW OF WORKS",
    artImageText: "LET US<br>MAKE<br>TOGETHER",
    postArtTitle: "Made by hand.<br><em>Shown among friends.</em>",
    postArtText: "Drawing, digital art, 2D, 3D, and works yet unfinished. Bring out your latest piece, make a mark beside us, or simply keep the studio company.",
    postArtLink: "Bring what you are making",
    catMovie: "A PICTURE AFTER HOURS",
    metaMovie: "THE HOUSE PICTURE SHOW",
    movieImageText: "DRAW THE<br>CURTAINS<br>LET THE<br>PICTURE ROLL",
    movieImageTag: "PICTURE SHOW",
    postMovieTitle: "One more picture.<br><em>One more tale.</em>",
    postMovieText: "Take a seat for a film in good company, and stay for the talk after. The Discord noticeboard tells you what is showing and how to join.",
    postMovieLink: "Find the next picture show",
    catCreator: "THE MAKER'S CORNER",
    creatorImageText: "MAKE IT<br>YOUR OWN",
    metaCreator: "LEARN & TRY YOUR HAND",
    postCreatorTitle: "Wondering how<br><em>the work is done?</em>",
    postCreatorText: "Trade a few useful tricks, try a new tool, or ask the question you have been keeping. New hands and old hands alike are welcome.",
    postCreatorLink: "Ask the company",
    catHouse: "A WORD FROM THE HOUSE",
    metaDress: "THE HOUSE DRESS",
    houseImageText: "DRESS<br>WELL<br>BE KIND",
    postDressTitle: "A touch of <em>finery.</em><br>Still yourself.",
    postDressText: "The house favours a smart appearance, should you care for one. Wear what feels like you, show respect, and make yourself at home.",
    postDressLink: "Meet the company",
    catLate: "THE LATE LOBBY",
    metaLate: "ABOUT THE HOUSE",
    postLateTitle: "The hour grows<br><em>late indeed.</em>",
    postLateText: "We are often about after midnight, GMT−3. There is no strict hour; the lobby stirs when the night owls arrive.",
    postLateLink: "Find us after hours",
    gatheringEyebrow: "THE EVENING IS YOURS",
    gatheringTitle: "Let us make<br><em>an evening of it.</em>",
    gatheringText: "Avatar lessons, art in good company, picture shows, and room for a conversation that takes its own sweet time. We gather, make things, and see where the evening leads.",
    gatheringCta: "See the house notices",
    gatheringCardLabel: "THE HOUSE NOTICEBOARD",
    gatheringWhenLabel: "WHEN THE LOBBY STIRS",
    gatheringWhen: "PAST MIDNIGHT",
    gatheringTimezone: "GMT−3 · WHEN THE NIGHT OWLS ARRIVE",
    gatheringCardTitle: "No fixed hour.<br><em>Good company, always.</em>",
    gatheringCardText: "Lessons, shared art, picture shows, and sound reason to keep the lamps lit. The latest arrangements are upon Discord.",
    gatheringCardLink: "Read the noticeboard",
    coinTitle: "The house currency",
    coinText: "Our gold coins are a real thank-you for active members. They're a community perk, earned through participation—not cash, investments, or a promise of financial value.",
    aboutEyebrow: "THE COMPANY BEHIND THE LOBBY",
    aboutTitle: "Uncommon hours.<br><em>Fine company.</em>",
    aboutIntro: "A small company, each with their own pursuits, and a door left on the latch. Speak with us of art, avatars, flying, languages, or whatever else takes your fancy.",
    prickettRole: "ART · CODE · 2D / 3D",
    prickettBio: "Prickett studies Art and IT, and spends his time coding, drawing, and making things in 2D and 3D. He speaks English and Portuguese, is learning Chinese and other languages, and is autistic. Easy-going by nature, he is glad to talk about almost anything.",
    prickettLink: "Find Prickett online",
    nekozuskaRole: "OWNER · VIP",
    nekozuskaBio: "The proprietor: easy-going, somewhat mysterious, and VIP besides. His moods may turn as swiftly as the weather. Pay him a visit; the next chapter is never quite foretold.",
    nekozuskaSignoff: "THE HOUSE HAS ITS MYSTERIES.",
    succubiRole: "FLIGHT DECK · AGENT 007",
    succubiBio: "A self-styled forlorn Agent 007, with nary a failure, no risk, and 7,000 hours in the flight simulator. He plays up the lonely-agent act for laughs; in truth, he has a girlfriend. Flight stories and questionable bravado come as standard.",
    succubiSignoff: "0 FAILURES · 0 RISK · 7K HOURS · NOT ACTUALLY LONELY",
    communityEyebrow: "YOUR COMPANY AWAITS",
    communityTitle: "The doors stand <em>open.</em>",
    communityDescription: "Find us upon VRChat; find the latest plans upon Discord.<br>There is a place for you here.",
    vrchatButton: "Find us on VRChat",
    discordButton: "Join the Discord",
    communityNote: "AFTER MIDNIGHT · GMT−3 · BE YOURSELF",
    disclaimer: "AN UNOFFICIAL FAN COMMUNITY. NOT AFFILIATED WITH THE CONTINENTAL, LIONSGATE, OR JOHN WICK.",
    backToLobby: "BACK TO THE LOBBY",
  },
  pt: {
    skip: "Pular para o conteúdo",
    home: "The Continental, início",
    houseLabel: "CASA DE CONVÍVIO NO VR",
    navigation: "Navegação principal",
    navHome: "O saguão",
    navDispatch: "As cartas",
    navGatherings: "Os serões",
    navAbout: "A companhia",
    navJoin: "Junte-se à companhia",
    exploreHouse: "Conhecei a casa",
    switchLanguage: "Mudar idioma para inglês",
    openWatch: "Abrir o relógio de bolso",
    closeWatch: "Fechar o relógio de bolso",
    watchLabel: "Relógio de bolso",
    watchKicker: "O CRONÔMETRO DA CASA",
    watchTitle: "As horas bem guardadas",
    watchLocal: "SEU HORÁRIO · LOCAL",
    watchHouse: "A CASA · GMT−3",
    watchSky: "UM OLHAR AO CÉU NA VIGÍLIA",
    watchFooter: "AINDA HÁ TEMPO ATÉ ROMPER DA AURORA.",
    rabbitCaption: "SEGUI O COELHO BRANCO",
    playMusic: "Tocar música de fundo",
    pauseMusic: "Pausar música de fundo",
    musicOff: "Tocar música da casa",
    musicOn: "Música tocando",
    musicUnavailable: "Não foi possível carregar a música de fundo",
    openMenu: "Abrir navegação",
    closeMenu: "Fechar navegação",
    noticeEyebrow: "PALAVRA DO MURAL",
    noticeTitle: "Um recado<br><em>da vigília.</em>",
    noticeDescription: "As notícias da casa ficam escritas em nosso mural.",
    noticeCta: "Ler os avisos da casa",
    noticeQuiet: "Por enquanto, o mural está quietinho. Dê uma olhada depois do próximo encontro.",
    noticeFailed: "O mural está demorando um pouquinho. As novidades também estão no Discord.",
    noticePostedBy: "PUBLICADO POR",
    noticeDiscord: "ABRIR O MURAL NO DISCORD",
    noticeUpdated: "ÚLTIMA CONSULTA",
    routeDispatchMeta: "CARTAS DA CASA",
    routeDispatchTitle: "O que fizemos<br>por cá.",
    routeGatheringMeta: "O LIVRO DOS SERÕES",
    routeGatheringTitle: "Por onde segue<br>a noite.",
    routePeopleMeta: "A GENTE DA CASA",
    routePeopleTitle: "Boa gente<br>a conhecer.",
    routeOpen: "ABRIR O REGISTO ↗",
    pageDispatchTitle: "Cartas da casa",
    pageDispatchDeck: "O que fazemos, aprendemos, vemos e partilhamos em boa companhia.",
    pageGatheringTitle: "O mural da casa",
    pageGatheringDeck: "Planos, horas locais e as notícias mais recentes da casa.",
    pagePeopleTitle: "A gente desta casa",
    pagePeopleDeck: "Uma companhia de muitos gostos e a porta sempre no trinco. Vinde, pois.",
    liveNoticeEyebrow: "OS AVISOS MAIS RECENTES",
    liveNoticeTitle: "Novas da casa,<br><em>vindas do mural.</em>",
    noticeSource: "O mural reúne os recados recentes da comunidade. Entre no Discord para participar da conversa.",
    noticeLoading: "Consultando o mural…",
    dispatchScheduleLabel: "SEM HORA APRAZADA",
    dispatchScheduleTitle: "Deixai a noite<br><em>seguir seu curso.</em>",
    dispatchScheduleText: "É depois da meia-noite, no fuso GMT−3, que mais amiúde nos reunimos. Há lições de avatares, arte, filmes ou boa prosa, quando chegam os notívagos.",
    peopleIntroTitle: "Pequena companhia.<br><em>Porta aberta.</em>",
    currencyTitle: "OURO · MOEDA DA COMUNIDADE",
    communityRule: "Gentileza, respeito às pessoas e aos espaços, e sempre mais uma cadeira à mesa.",
    discordLatest: "Para as notícias mais recentes, consultai o mural no Discord.",
    heroEyebrow: "A PORTA FICA ABERTA",
    heroSubEyebrow: "FUNDADA NO VR",
    heroTitle: "Um pouco além<br>da <em>hora.</em>",
    heroDescription: "Uma casa no VRChat para quem tem curiosidade e gosto por criar. Aprendei um novo jeito de cuidar do avatar, mostrai vossas obras, assisti a um filme ou ficai mais um pouco à conversa.",
    heroCta: "Entrai, pois",
    heroBrowse: "Vede as cartas da casa",
    dressCode: "UM TOQUE DE GALA, SE VOS APRUVER.",
    heroArtAlt: "Ilustração original da entrada de um hotel iluminado em dourado à noite",
    signTop: "UMA CASA ENTRE MUNDOS",
    signBottom: "HÁ SEMPRE LUGAR PARA MAIS UM",
    artCaption: "DEPOIS DA MEIA-NOITE · GMT−3",
    artSideLabel: "O VOSSO MUNDO, À VOSSA MANEIRA",
    scrollExplore: "UM OLHAR PELA CASA",
    tickerLabel: "Lema da casa",
    tickerOne: "VESTI-VOS BEM · SEDE GENTIS",
    tickerTwo: "APÓS A MEIA-NOITE · GMT−3",
    tickerThree: "FAÇAMOS ALGO EM BOA COMPANHIA",
    tickerFour: "HÁ SEMPRE LUGAR PARA MAIS UM",
    dispatchEyebrow: "PALAVRA DO SAGUÃO",
    dispatchTitle: "As <em>cartas da casa.</em>",
    moreFromHouse: "Vinde fazer companhia",
    dispatchIntro: "Lições, arte, filmes e o que mais trouxer a noite.",
    filterLabel: "Filtrar novidades",
    filterAll: "Todas as cartas",
    filterWorkshop: "Lições",
    filterArt: "Arte",
    filterMovies: "Filmes",
    filterNotes: "Recados da casa",
    catWorkshop: "LIÇÃO NA PRÁTICA",
    metaWorkshop: "PERSONALIZAÇÃO DE AVATARES",
    postWorkshopTitle: "Dai ao avatar<br><em>vosso próprio feitio.</em>",
    postWorkshopText: "Vinde aprender, sem pressa, a dar ao avatar do VRChat um feitio só seu. Trazei uma obra em curso, perguntai o que quiserdes e aprendei ao vosso passo.",
    postWorkshopLink: "Aprender em boa companhia",
    catArt: "A SALA DAS ARTES",
    metaArt: "ARTE E MOSTRA DE OBRAS",
    artImageText: "CRIEMOS<br>JUNTOS<br>POR CÁ",
    postArtTitle: "Feito à mão.<br><em>Mostrado entre amigos.</em>",
    postArtText: "Desenho, arte digital, 2D, 3D e obras ainda por acabar. Trazei o que tendes feito, dai mais um traço ou fazei somente companhia ao ateliê.",
    postArtLink: "Trazei vossas criações",
    catMovie: "CINEMA PELA NOITE DENTRO",
    metaMovie: "O CINEMA DA CASA",
    movieImageText: "FECHAI<br>AS CORTINAS<br>E DEIXAI<br>O FILME CORRER",
    movieImageTag: "NOITE DE CINEMA",
    postMovieTitle: "Mais um filme.<br><em>Mais uma boa história.</em>",
    postMovieText: "Tomai assento para ver um filme em boa companhia e ficai para a conversa depois. No Discord se anuncia o que passará e como chegar.",
    postMovieLink: "Sabei qual será o próximo",
    catCreator: "O CANTO DE QUEM FAZ",
    creatorImageText: "FAZEI<br>À VOSSA MANEIRA",
    metaCreator: "APRENDER E TENTAR",
    postCreatorTitle: "Quereis saber<br><em>como se faz?</em>",
    postCreatorText: "Trocai umas dicas, experimentai uma ferramenta ou fazei aquela pergunta guardada há tempos. Mãos novas e calejadas serão bem recebidas.",
    postCreatorLink: "Perguntai à companhia",
    catHouse: "PALAVRA DA CASA",
    metaDress: "O TRAJE DA CASA",
    houseImageText: "VESTI-VOS<br>BEM<br>SEDE GENTIS",
    postDressTitle: "Um toque de <em>gala.</em><br>Sem deixar de ser vós.",
    postDressText: "Por aqui apreciamos o traje bem cuidado, se assim vos aprouver. Vesti-vos à vossa maneira, tratai todos com respeito e tomai a casa por vossa.",
    postDressLink: "Conhecei a companhia",
    catLate: "O SAGUÃO DA NOITE",
    metaLate: "PELA CASA",
    postLateTitle: "A hora avança<br><em>pela madrugada.</em>",
    postLateText: "É comum encontrarmo-nos depois da meia-noite, GMT−3. Sem hora marcada: o saguão desperta quando chegam os notívagos.",
    postLateLink: "Encontrai-nos pela noite",
    gatheringEyebrow: "A NOITE É VOSSA",
    gatheringTitle: "Fazemos da noite<br><em>um serão.</em>",
    gatheringText: "Lições de avatar, arte em companhia, filmes e conversa sem relógio. Reunimo-nos, fazemos nossas cousas e vemos aonde a noite nos leva.",
    gatheringCta: "Vede os avisos da casa",
    gatheringCardLabel: "O MURAL DA CASA",
    gatheringWhenLabel: "QUANDO O SAGUÃO DESPERTA",
    gatheringWhen: "DEPOIS DA MEIA-NOITE",
    gatheringTimezone: "GMT−3 · QUANDO CHEGAREM OS NOTÍVAGOS",
    gatheringCardTitle: "Sem hora aprazada.<br><em>Boa companhia, sempre.</em>",
    gatheringCardText: "Lições, arte partilhada, filmes e bom motivo para deixar as luzes acesas. Os planos mais recentes estão no Discord.",
    gatheringCardLink: "Lede o mural",
    coinTitle: "A moeda da casa",
    coinText: "As moedas de ouro são um agradecimento de verdade aos membros ativos. São um benefício da comunidade, conquistado com participação — não são dinheiro, investimento nem promessa de valor financeiro.",
    aboutEyebrow: "A COMPANHIA POR TRÁS DO SAGUÃO",
    aboutTitle: "Horas tardias.<br><em>Boa companhia.</em>",
    aboutIntro: "Somos poucos, cada qual com seus gostos, e deixamos a porta no trinco. Falai conosco de arte, avatares, aviação, idiomas ou de qualquer cousa que vos venha à ideia.",
    prickettRole: "ARTE · CÓDIGO · 2D / 3D",
    prickettBio: "Prickett estuda Artes e TI; ocupa-se de programação, desenho e criação em 2D e 3D. Fala português e inglês, aprende chinês e outras línguas, e é autista. De trato tranquilo, conversa de bom grado sobre quase qualquer assunto.",
    prickettLink: "Encontre Prickett na rede",
    nekuzuskaRole: "PROPRIETÁRIO · VIP",
    nekozuskaRole: "PROPRIETÁRIO · VIP",
    nekozuskaBio: "O dono da casa: tranquilo, um tanto misterioso, VIP, e de humor que muda como o tempo. Passai para cumprimentá-lo; nunca se sabe qual será o próximo capítulo.",
    nekozuskaSignoff: "A CASA TEM SEUS MISTÉRIOS.",
    succubiRole: "CONVÉS DE VOO · AGENTE 007",
    succubiBio: "Agente 007, triste por ofício, sem falhas nem riscos no currículo; conta 7 mil horas no simulador de voo. A pose de agente solitário é só pilhéria: ele namora, sim. Incluem-se causos de aviação e bravatas duvidosas.",
    succubiSignoff: "0 FALHAS · 0 RISCO · 7 MIL HORAS · NÃO É SOLITÁRIO",
    communityEyebrow: "VOSSA COMPANHIA VOS ESPERA",
    communityTitle: "As portas ficam <em>abertas.</em>",
    communityDescription: "Achai-nos no VRChat; consultai os planos no Discord.<br>Há lugar para vós à mesa.",
    vrchatButton: "Encontre a gente no VRChat",
    discordButton: "Entrar no Discord",
    communityNote: "APÓS A MEIA-NOITE · GMT−3 · SEDE VÓS",
    disclaimer: "COMUNIDADE DE FÃS NÃO OFICIAL. SEM VÍNCULO COM THE CONTINENTAL, LIONSGATE OU JOHN WICK.",
    backToLobby: "VOLTAR AO SAGUÃO",
  },
};

for (const link of document.querySelectorAll("[data-community]")) {
  const destination = COMMUNITY_LINKS[link.dataset.community];
  if (!destination) {
    throw new Error(`Missing community destination for "${link.dataset.community}".`);
  }
  link.href = destination;
}

let currentLanguage = new URLSearchParams(window.location.search).get("lang");
if (currentLanguage !== "pt" && currentLanguage !== "en") {
  try {
    currentLanguage = window.localStorage.getItem("continental-language") || "en";
  } catch (error) {
    console.warn("Language preference could not be read from local storage.", error);
    currentLanguage = "en";
  }
}
if (currentLanguage !== "pt" && currentLanguage !== "en") currentLanguage = "en";
const requestedLanguage = currentLanguage;
currentLanguage = "en";
const languageToggle = document.querySelector(".language-toggle");
const pageDescription = document.querySelector('meta[name="description"]');
let cachedNotices = null;
let renderNotices = () => {};
const pageTitles = {
  en: {
    home: "The Continental — After-hours Social House",
    dispatch: "Dispatch — The Continental",
    gatherings: "Gatherings — The Continental",
    people: "The People — The Continental",
  },
  pt: {
    home: "The Continental — Espaço Social de Madrugada",
    dispatch: "Novidades — The Continental",
    gatherings: "Encontros — The Continental",
    people: "A Galera — The Continental",
  },
};

function setLanguage(language) {
  const dictionary = translations[language];
  if (!dictionary) {
    throw new Error(`Unsupported language "${language}".`);
  }

  currentLanguage = language;
  document.documentElement.lang = language;
  const page = document.body.classList.contains("dispatch-page")
    ? "dispatch"
    : document.body.classList.contains("gatherings-page")
      ? "gatherings"
      : document.body.classList.contains("people-page") ? "people" : "home";
  document.title = pageTitles[language][page];
  pageDescription.content = language === "pt"
    ? "Um ponto de encontro no VRChat para oficinas de avatares, arte, noites de filme e boa companhia."
    : "An after-hours VRChat social house for avatar workshops, art, movie nights, and good company.";

  for (const element of document.querySelectorAll("[data-i18n]")) {
    const translation = dictionary[element.dataset.i18n];
    if (translation === undefined) {
      throw new Error(`Missing ${language} translation for "${element.dataset.i18n}".`);
    }
    element.textContent = translation;
  }

  for (const element of document.querySelectorAll("[data-i18n-html]")) {
    const translation = dictionary[element.dataset.i18nHtml];
    if (translation === undefined) {
      throw new Error(`Missing ${language} translation for "${element.dataset.i18nHtml}".`);
    }
    element.innerHTML = translation;
  }

  for (const element of document.querySelectorAll("[data-i18n-aria]")) {
    const translation = dictionary[element.dataset.i18nAria];
    if (translation === undefined) {
      throw new Error(`Missing ${language} accessibility label for "${element.dataset.i18nAria}".`);
    }
    element.setAttribute("aria-label", translation);
  }

  languageToggle.textContent = language === "en" ? "PT" : "EN";
  languageToggle.lang = language === "en" ? "pt" : "en";
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  window.history.replaceState(null, "", url);
  try {
    window.localStorage.setItem("continental-language", language);
  } catch (error) {
    console.warn("Language preference could not be saved to local storage.", error);
  }
  for (const link of document.querySelectorAll("a[href]")) {
    const target = new URL(link.href, window.location.href);
    if (target.origin === window.location.origin && /\.html$/.test(target.pathname)) {
      target.searchParams.set("lang", language);
      link.href = `${target.pathname}${target.search}${target.hash}`;
    }
  }
  updateMusicLabel();
  updateMenuLabel();
  updateWatchLabel();
  if (cachedNotices !== null) renderNotices(cachedNotices);
}

const filterButtons = document.querySelectorAll(".filter-button");
const dispatchCards = document.querySelectorAll(".dispatch-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    dispatchCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");
const watchToggle = document.querySelector(".watch-toggle");
const watchPanel = document.querySelector("#watch-panel");
const watchHour = document.querySelector(".watch-hour");
const watchMinute = document.querySelector(".watch-minute");
const watchSecond = document.querySelector(".watch-second");
const watchNumberMarks = watchPanel.querySelectorAll(".watch-tick");

watchNumberMarks.forEach((mark, index) => {
  const angle = index * 30;
  mark.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-61px)`;
});

function updateClock() {
  const now = new Date();
  const second = now.getSeconds() + now.getMilliseconds() / 1000;
  const minute = now.getMinutes() + second / 60;
  const hour = (now.getHours() % 12) + minute / 60;

  watchHour.style.transform = `rotate(${hour * 30}deg)`;
  watchMinute.style.transform = `rotate(${minute * 6}deg)`;
  watchSecond.style.transform = `rotate(${second * 6}deg)`;

  const locale = currentLanguage === "pt" ? "pt-BR" : "en-GB";
  for (const time of watchPanel.querySelectorAll(".clock-time")) {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    };
    if (time.dataset.timezone !== "local") options.timeZone = time.dataset.timezone;
    time.textContent = new Intl.DateTimeFormat(locale, options).format(now);
  }
  for (const date of watchPanel.querySelectorAll(".clock-date")) {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    if (date.dataset.timezone !== "local") options.timeZone = date.dataset.timezone;
    date.textContent = new Intl.DateTimeFormat(locale, options).format(now);
  }
}

function setWatchOpen(isOpen) {
  watchToggle.setAttribute("aria-expanded", String(isOpen));
  updateWatchLabel();
  watchPanel.hidden = !isOpen;
}

function updateWatchLabel() {
  const isOpen = watchToggle.getAttribute("aria-expanded") === "true";
  watchToggle.setAttribute("aria-label", translations[currentLanguage][isOpen ? "closeWatch" : "openWatch"]);
}

watchToggle.addEventListener("click", () => {
  setWatchOpen(watchToggle.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("click", (event) => {
  if (!watchPanel.hidden && !watchPanel.contains(event.target) && !watchToggle.contains(event.target)) {
    setWatchOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !watchPanel.hidden) {
    setWatchOpen(false);
    watchToggle.focus();
    return;
  }
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNavigation.classList.remove("is-open");
    updateMenuLabel();
    menuToggle.focus();
  }
});

window.addEventListener("scroll", () => {
  if (!watchPanel.hidden) {
    setWatchOpen(false);
  }
}, { passive: true });

updateClock();
window.setInterval(updateClock, 1000);

function updateMenuLabel() {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-label", translations[currentLanguage][isExpanded ? "closeMenu" : "openMenu"]);
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  siteNavigation.classList.toggle("is-open", !isExpanded);
  updateMenuLabel();
});

siteNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && siteNavigation.classList.contains("is-open")) {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNavigation.classList.remove("is-open");
    updateMenuLabel();
  }
});

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "pt" : "en");
});

const houseAudio = document.querySelector("#house-audio");
const soundToggle = document.querySelector(".sound-toggle");

function updateMusicLabel() {
  const isPlaying = !houseAudio.paused;
  soundToggle.classList.toggle("is-playing", isPlaying);
  soundToggle.setAttribute("aria-pressed", String(isPlaying));
  soundToggle.setAttribute("aria-label", translations[currentLanguage][isPlaying ? "pauseMusic" : "playMusic"]);
  soundToggle.querySelector(".sound-label").textContent = translations[currentLanguage][isPlaying ? "musicOn" : "musicOff"];
}

soundToggle.addEventListener("click", async () => {
  if (!houseAudio.paused) {
    houseAudio.pause();
    return;
  }

  try {
    await houseAudio.play();
  } catch (error) {
    if (error.name === "NotAllowedError") {
      soundToggle.querySelector(".sound-label").textContent = translations[currentLanguage].musicOff;
      return;
    }
    console.error("Background music could not be played.", error);
    soundToggle.querySelector(".sound-label").textContent = translations[currentLanguage].musicUnavailable;
  }
});

houseAudio.addEventListener("play", updateMusicLabel);
houseAudio.addEventListener("pause", updateMusicLabel);
houseAudio.addEventListener("ended", updateMusicLabel);
houseAudio.addEventListener("error", () => {
  console.error("The supplied background music could not be loaded.", houseAudio.error);
  soundToggle.querySelector(".sound-label").textContent = translations[currentLanguage].musicUnavailable;
});

const noticeFeed = document.querySelector("#notice-feed");
const noticePreview = document.querySelector("#notice-preview-message");
if (noticeFeed || noticePreview) {
  const noticeUrl = noticeFeed?.dataset.feedUrl || noticePreview?.dataset.feedUrl || DEFAULT_NOTICE_FEED;

  async function loadNotices() {
    try {
      const response = await fetch(noticeUrl, { headers: { Accept: "application/json" } });
      if (!response.ok) {
        throw new Error(`Notice feed returned HTTP ${response.status}.`);
      }
      const notices = await response.json();
      if (!Array.isArray(notices)) {
        throw new TypeError("Notice feed must return a JSON array.");
      }

      if (notices.some((notice) => !notice || typeof notice.title !== "string" || typeof notice.body !== "string")) {
        throw new TypeError("Each notice must include string title and body fields.");
      }
      cachedNotices = notices.slice(0, 10);
      renderNotices(cachedNotices);
    } catch (error) {
      console.error("The noticeboard could not be loaded.", error);
      if (noticeFeed) {
        const failed = document.createElement("p");
        failed.className = "notice-status";
        failed.textContent = translations[currentLanguage].noticeFailed;
        noticeFeed.replaceChildren(failed);
      }
      if (noticePreview) noticePreview.textContent = translations[currentLanguage].noticeFailed;
    }
  }

  renderNotices = (notices) => {
    if (noticePreview) {
      const latest = notices[0];
      noticePreview.textContent = latest
        ? `${latest.title.slice(0, 160)} — ${latest.body.replace(/\s+/g, " ").slice(0, 180)}`
        : translations[currentLanguage].noticeDescription;
    }
    if (noticeFeed) {
      noticeFeed.replaceChildren();
      for (const notice of notices) {
        const item = document.createElement("article");
        item.className = "notice-item";
        const heading = document.createElement("h3");
        heading.textContent = notice.title.slice(0, 160);
        const body = document.createElement("p");
        body.textContent = notice.body.slice(0, 2000);
        item.append(heading, body);
        if (typeof notice.author === "string" && notice.author.length) {
          const author = document.createElement("span");
          author.className = "notice-author";
          author.textContent = `${translations[currentLanguage].noticePostedBy} ${notice.author.slice(0, 80)}`;
          item.append(author);
        }
        if (typeof notice.createdAt === "string" && !Number.isNaN(Date.parse(notice.createdAt))) {
          const timestamp = document.createElement("time");
          timestamp.dateTime = notice.createdAt;
          timestamp.textContent = new Intl.DateTimeFormat(currentLanguage === "pt" ? "pt-BR" : "en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(new Date(notice.createdAt));
          item.append(timestamp);
        }
        noticeFeed.append(item);
      }
      if (notices.length === 0) {
        const quiet = document.createElement("p");
        quiet.className = "notice-status";
        quiet.textContent = translations[currentLanguage].noticeQuiet;
        noticeFeed.append(quiet);
      }
      const checkedAt = document.querySelector("#notice-checked");
      if (checkedAt) checkedAt.textContent = new Intl.DateTimeFormat(currentLanguage === "pt" ? "pt-BR" : "en-GB", { timeStyle: "short" }).format(new Date());
    }
  };

  loadNotices();
  window.setInterval(() => {
    if (!document.hidden) loadNotices();
  }, 60_000);
}

setLanguage(requestedLanguage);
houseAudio.play().catch((error) => {
  if (error.name !== "NotAllowedError") {
    console.error("Background music could not be started automatically.", error);
    soundToggle.querySelector(".sound-label").textContent = translations[currentLanguage].musicUnavailable;
  }
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  const scrollObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  for (const section of document.querySelectorAll(".reveal-on-scroll")) {
    scrollObserver.observe(section);
  }
  document.documentElement.classList.add("motion-ready");
}
