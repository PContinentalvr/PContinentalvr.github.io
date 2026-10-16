const COMMUNITY_LINKS = {
  vrchat: "https://vrchat.com/home/groups",
  discord: "https://discord.gg/3VUYgddZGP",
};

const DEFAULT_NOTICE_FEED = "assets/notices.json";

const translations = {
  en: {
    skip: "Skip to content",
    home: "The Continental, home",
    houseLabel: "VR SOCIAL HOUSE",
    navigation: "Main navigation",
    navHome: "The lobby",
    navDispatch: "Dispatch",
    navGatherings: "Gatherings",
    navAbout: "The people",
    navJoin: "Find your people",
    exploreHouse: "Explore the house",
    switchLanguage: "Switch language to Portuguese",
    openWatch: "Open the pocket watch",
    closeWatch: "Close the pocket watch",
    watchLabel: "Pocket watch",
    watchKicker: "THE HOUSE CHRONOMETER",
    watchTitle: "Two sides of midnight",
    watchLocal: "YOUR TIME · LOCAL",
    watchHouse: "THE HOUSE · GMT−3",
    watchSky: "A LITTLE SKY FOR THE LATE SHIFT",
    watchFooter: "A SMALL REMINDER: THE NIGHT IS YOUNG.",
    rabbitCaption: "FOLLOW THE LATE-NIGHT RABBIT",
    playMusic: "Play background music",
    pauseMusic: "Pause background music",
    musicOff: "Play house music",
    musicOn: "Music is playing",
    musicUnavailable: "Background music could not be loaded",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    noticeEyebrow: "LATEST FROM THE NOTICEBOARD",
    noticeTitle: "Letters from<br><em>the late shift.</em>",
    noticeDescription: "The newest gathering notes, member news, and little dispatches live on our noticeboard.",
    noticeCta: "Read the latest notices",
    noticeQuiet: "The board is quiet for now. Check back after the next late-night gathering.",
    noticeFailed: "The noticeboard is taking a moment. The latest updates are always on Discord.",
    noticePostedBy: "POSTED BY",
    noticeDiscord: "OPEN THE DISCORD NOTICEBOARD",
    noticeUpdated: "LAST CHECKED",
    routeDispatchMeta: "THE WEEKLY DISPATCH",
    routeDispatchTitle: "What we're<br>making.",
    routeGatheringMeta: "THE HOUSE CALENDAR",
    routeGatheringTitle: "Where the<br>night goes.",
    routePeopleMeta: "THE HOUSE ROSTER",
    routePeopleTitle: "A few people<br>to meet.",
    routeOpen: "OPEN THE FILE ↗",
    pageDispatchTitle: "Dispatch & happenings",
    pageDispatchDeck: "A little of everything we're making, learning, watching, and sharing.",
    pageGatheringTitle: "The after-hours noticeboard",
    pageGatheringDeck: "Plans, time zones, member notes, and current house dispatches.",
    pagePeopleTitle: "The people behind the lobby",
    pagePeopleDeck: "Different interests; same open door. Here's the little crew that keeps the lights on.",
    liveNoticeEyebrow: "LATEST HOUSE NOTICES",
    liveNoticeTitle: "Straight from<br><em>the noticeboard.</em>",
    noticeSource: "This public noticeboard shows recent community announcements. Open Discord to join the conversation.",
    noticeLoading: "Checking the noticeboard…",
    dispatchScheduleLabel: "NO FIXED SCHEDULE",
    dispatchScheduleTitle: "The evening has<br><em>room to wander.</em>",
    dispatchScheduleText: "We usually gather past midnight in GMT−3. Workshops, art sessions, film nights, and spontaneous lobby chats come together when the night owls arrive.",
    peopleIntroTitle: "A small crew.<br><em>An open door.</em>",
    currencyTitle: "GOLD · COMMUNITY CURRENCY",
    communityRule: "Be kind, respect the people and the spaces, and make room for another chair.",
    discordLatest: "For the newest posts, join our Discord noticeboard.",
    heroEyebrow: "AN OPEN INVITATION",
    heroSubEyebrow: "EST. IN VR",
    heroTitle: "A little more<br>after <em>hours.</em>",
    heroDescription: "A VRChat social house for the creatively curious. Learn a new avatar trick, share what you're making, catch a movie, or simply stay for one more conversation.",
    heroCta: "Come on in",
    heroBrowse: "See what's happening",
    dressCode: "DRESS SHARP. BE YOURSELF.",
    heroArtAlt: "Original illustration of a golden-lit hotel entrance at night",
    signTop: "A HOUSE BETWEEN WORLDS",
    signBottom: "ROOM FOR ONE MORE",
    artCaption: "AFTER HOURS · GMT−3",
    artSideLabel: "YOUR WORLD, YOUR WAY",
    scrollExplore: "SCROLL TO EXPLORE",
    tickerLabel: "Community motto",
    tickerOne: "DRESS SHARP · BE KIND",
    tickerTwo: "PAST MIDNIGHT · GMT−3",
    tickerThree: "MAKE SOMETHING TOGETHER",
    tickerFour: "THERE'S ROOM FOR ONE MORE",
    dispatchEyebrow: "FRESH FROM THE LOBBY",
    dispatchTitle: "The <em>dispatch.</em>",
    moreFromHouse: "Join the conversation",
    dispatchIntro: "Workshops, art, films, and whatever else the night brings.",
    filterLabel: "Filter dispatch posts",
    filterAll: "Everything",
    filterWorkshop: "Workshops",
    filterArt: "Art",
    filterMovies: "Movie nights",
    filterNotes: "House notes",
    catWorkshop: "HANDS-ON WORKSHOP",
    metaWorkshop: "AVATAR WORKSHOP",
    postWorkshopTitle: "Make your avatar<br><em>more you.</em>",
    postWorkshopText: "Friendly, hands-on sessions for customizing VRChat avis. Bring a work in progress, ask questions, and learn at your own pace.",
    postWorkshopLink: "Learn together",
    catArt: "THE ART ROOM",
    metaArt: "ART & SHOW-AND-TELL",
    artImageText: "MAKE<br>THINGS<br>TOGETHER",
    postArtTitle: "Made by hand.<br><em>Shared with friends.</em>",
    postArtText: "Drawing, digital art, 2D, 3D, and works in progress. Pull up a chair, share what you're making, or just enjoy the studio company.",
    postArtLink: "Bring your creativity",
    catMovie: "AFTER-HOURS SCREENING",
    metaMovie: "MOVIE NIGHT",
    movieImageText: "LIGHTS<br>LOW<br>FILM<br>ON",
    movieImageTag: "MOVIE NIGHT",
    postMovieTitle: "One more film.<br><em>One more friend.</em>",
    postMovieText: "Settle in for a shared screening and the conversation that follows. Check Discord for what's on and how to join.",
    postMovieLink: "Find the next screening",
    catCreator: "CREATOR'S CORNER",
    creatorImageText: "MAKE<br>IT YOURS",
    metaCreator: "LEARN & EXPERIMENT",
    postCreatorTitle: "Curious how<br><em>it's made?</em>",
    postCreatorText: "Swap creative tips, explore tools, and ask the questions you've been sitting on. Beginners, hobbyists, and pros all welcome.",
    postCreatorLink: "Ask the community",
    catHouse: "A NOTE FROM THE HOUSE",
    metaDress: "THE DRESS CODE",
    houseImageText: "DRESS<br>SHARP<br>BE KIND",
    postDressTitle: "A little <em>fancy.</em><br>Entirely yourself.",
    postDressText: "Dress sharp if you feel like it: our house leans fancy. Come in your own style, respect one another, and make yourself at home.",
    postDressLink: "Meet the house",
    catLate: "LATE-NIGHT LOBBY",
    metaLate: "AROUND THE HOUSE",
    postLateTitle: "The hour gets<br><em>a little later.</em>",
    postLateText: "Most of our hangouts happen past midnight, GMT−3. No strict start time: the lobby wakes up when the night owls arrive.",
    postLateLink: "Find us after hours",
    gatheringEyebrow: "THE NIGHT IS YOURS",
    gatheringTitle: "Make a night<br>of <em>it.</em>",
    gatheringText: "Avatar workshops, art sessions, movie nights, and plenty of room for unplanned conversation. We make things together, then see where the evening goes.",
    gatheringCta: "See what's happening",
    gatheringCardLabel: "THE AFTER-HOURS NOTICEBOARD",
    gatheringWhenLabel: "WHEN THE LOBBY COMES ALIVE",
    gatheringWhen: "PAST MIDNIGHT",
    gatheringTimezone: "GMT−3 · WHENEVER THE NIGHT OWLS ARRIVE",
    gatheringCardTitle: "No stiff schedule.<br><em>Just good company.</em>",
    gatheringCardText: "Workshops, shared art, movie nights, and other good excuses to stay up. Drop into Discord for the latest plan.",
    gatheringCardLink: "Check the noticeboard",
    coinTitle: "The house currency",
    coinText: "Our gold coins are a real thank-you for active members. They're a community perk, earned through participation—not cash, investments, or a promise of financial value.",
    aboutEyebrow: "THE PEOPLE BEHIND THE LOBBY",
    aboutTitle: "Odd hours.<br><em>Good people.</em>",
    aboutIntro: "We're a small crew with different interests and the same open-door policy. Say hello about art, avatars, aviation, languages, or absolutely anything else.",
    prickettRole: "ART · CODE · 2D / 3D",
    prickettBio: "Art and IT undergraduate: I code, draw, and make things in 2D and 3D. I speak English and Portuguese, and I'm learning Chinese and other languages. I'm autistic, easygoing, and always happy to chat about pretty much anything.",
    prickettLink: "Find Prickett online",
    nekozuskaRole: "OWNER · VIP",
    nekozuskaBio: "The owner. Easygoing, a little mysterious, VIP energy, and known to change moods like the weather. Come say hi; you might catch a different chapter.",
    nekozuskaSignoff: "THE HOUSE HAS ITS MYSTERIES.",
    succubiRole: "FLIGHT DECK · AGENT 007",
    succubiBio: "Self-appointed sad-boy Agent 007: zero failures, zero risk, and 7,000 hours in flight simulator. Flight stories, questionable bravado, and good company come standard.",
    succubiSignoff: "0 FAILURES · 0 RISK · 7K HOURS",
    communityEyebrow: "YOUR PEOPLE ARE HERE",
    communityTitle: "The doors are <em>open.</em>",
    communityDescription: "Find the group on VRChat. Find the plan on Discord.<br>We'll save you a seat.",
    vrchatButton: "Find us on VRChat",
    discordButton: "Join the Discord",
    communityNote: "PAST MIDNIGHT · GMT−3 · COME AS YOU ARE",
    disclaimer: "AN UNOFFICIAL FAN COMMUNITY. NOT AFFILIATED WITH THE CONTINENTAL, LIONSGATE, OR JOHN WICK.",
    backToLobby: "BACK TO THE LOBBY",
  },
  pt: {
    skip: "Pular para o conteúdo",
    home: "The Continental, início",
    houseLabel: "ESPAÇO SOCIAL NO VR",
    navigation: "Navegação principal",
    navHome: "O saguão",
    navDispatch: "Novidades",
    navGatherings: "Encontros",
    navAbout: "A galera",
    navJoin: "Encontre sua turma",
    exploreHouse: "Conheça a casa",
    switchLanguage: "Mudar idioma para inglês",
    openWatch: "Abrir o relógio de bolso",
    closeWatch: "Fechar o relógio de bolso",
    watchLabel: "Relógio de bolso",
    watchKicker: "O CRONÔMETRO DA CASA",
    watchTitle: "Dois lados da meia-noite",
    watchLocal: "SEU HORÁRIO · LOCAL",
    watchHouse: "A CASA · GMT−3",
    watchSky: "UM PEDAÇO DO CÉU PARA A MADRUGADA",
    watchFooter: "UM LEMBRETE: A NOITE SÓ ESTÁ COMEÇANDO.",
    rabbitCaption: "SIGA O COELHO DA MADRUGADA",
    playMusic: "Tocar música de fundo",
    pauseMusic: "Pausar música de fundo",
    musicOff: "Tocar música da casa",
    musicOn: "Música tocando",
    musicUnavailable: "Não foi possível carregar a música de fundo",
    openMenu: "Abrir navegação",
    closeMenu: "Fechar navegação",
    noticeEyebrow: "RECADO FRESQUINHO DO MURAL",
    noticeTitle: "Cartas de<br><em>quem vira a noite.</em>",
    noticeDescription: "Os próximos encontros, novidades da turma e recados da madrugada estão no mural.",
    noticeCta: "Ver os recados mais recentes",
    noticeQuiet: "Por enquanto, o mural está quietinho. Dê uma olhada depois do próximo encontro.",
    noticeFailed: "O mural está demorando um pouquinho. As novidades também estão no Discord.",
    noticePostedBy: "PUBLICADO POR",
    noticeDiscord: "ABRIR O MURAL NO DISCORD",
    noticeUpdated: "ÚLTIMA CONSULTA",
    routeDispatchMeta: "AS NOVIDADES DA CASA",
    routeDispatchTitle: "O que a<br>gente cria.",
    routeGatheringMeta: "A AGENDA DA CASA",
    routeGatheringTitle: "Pra onde a<br>noite vai.",
    routePeopleMeta: "QUEM É DA CASA",
    routePeopleTitle: "Gente boa<br>pra conhecer.",
    routeOpen: "ABRIR ESTE ARQUIVO ↗",
    pageDispatchTitle: "Novidades & criações",
    pageDispatchDeck: "Um pouco do que estamos criando, aprendendo, assistindo e compartilhando.",
    pageGatheringTitle: "O mural da madrugada",
    pageGatheringDeck: "Planos, horários, recados da galera e as novidades mais recentes.",
    pagePeopleTitle: "A galera por trás do saguão",
    pagePeopleDeck: "Interesses diferentes, portas abertas. Prazer — somos a turma que deixa a luz acesa.",
    liveNoticeEyebrow: "RECADOS MAIS RECENTES",
    liveNoticeTitle: "Direto do<br><em>mural da casa.</em>",
    noticeSource: "O mural reúne os recados recentes da comunidade. Entre no Discord para participar da conversa.",
    noticeLoading: "Consultando o mural…",
    dispatchScheduleLabel: "SEM HORA MARCADA",
    dispatchScheduleTitle: "A noite tem<br><em>seu próprio ritmo.</em>",
    dispatchScheduleText: "Nossos encontros costumam rolar depois da meia-noite, no horário de Brasília. Oficinas, arte, filmes e conversas aparecem quando a turma da madrugada chega.",
    peopleIntroTitle: "Uma turma pequena.<br><em>Casa aberta.</em>",
    currencyTitle: "OURO · MOEDA DA COMUNIDADE",
    communityRule: "Gentileza, respeito às pessoas e aos espaços, e sempre mais uma cadeira à mesa.",
    discordLatest: "Para ver os recados mais recentes, entre no mural do Discord.",
    heroEyebrow: "AS PORTAS ESTÃO ABERTAS",
    heroSubEyebrow: "DESDE QUE O VR EXISTE",
    heroTitle: "Quando a noite<br>fica <em>boa.</em>",
    heroDescription: "Uma casa no VRChat para criar, aprender e fazer amizade. Troque ideias sobre avatares, mostre seus projetos, assista a um filme com a gente ou fique só para conversar.",
    heroCta: "Chega mais",
    heroBrowse: "Veja o que acontece por aqui",
    dressCode: "UM TOQUE DE ELEGÂNCIA. SEJA VOCÊ.",
    heroArtAlt: "Ilustração original da entrada de um hotel iluminado em dourado à noite",
    signTop: "UMA CASA ENTRE MUNDOS",
    signBottom: "SEMPRE CABE MAIS UM",
    artCaption: "DEPOIS DA MEIA-NOITE · GMT−3",
    artSideLabel: "SEU MUNDO, DO SEU JEITO",
    scrollExplore: "EXPLORE A CASA",
    tickerLabel: "Lema da comunidade",
    tickerOne: "UM TOQUE DE ELEGÂNCIA · GENTE BOA",
    tickerTwo: "DEPOIS DA MEIA-NOITE · GMT−3",
    tickerThree: "CRIAR É MELHOR JUNTO",
    tickerFour: "SEMPRE CABE MAIS UM",
    dispatchEyebrow: "DIRETO DO SAGUÃO",
    dispatchTitle: "As <em>novidades.</em>",
    moreFromHouse: "Venha trocar ideia",
    dispatchIntro: "Oficinas, arte, filmes e tudo mais que pintar.",
    filterLabel: "Filtrar novidades",
    filterAll: "Tudo",
    filterWorkshop: "Oficinas",
    filterArt: "Arte",
    filterMovies: "Sessões de filme",
    filterNotes: "Recados da casa",
    catWorkshop: "OFICINA MÃO NA MASSA",
    metaWorkshop: "CUSTOMIZAÇÃO DE AVATARES",
    postWorkshopTitle: "Deixe seu avatar<br><em>com a sua cara.</em>",
    postWorkshopText: "Encontros tranquilos para aprender a dar personalidade aos avatares do VRChat. Traga o que está criando, tire dúvidas e aprenda no seu tempo.",
    postWorkshopLink: "Aprender em grupo",
    catArt: "SALA DE ARTE",
    metaArt: "ARTE E MOSTRA DE TRABALHOS",
    artImageText: "CRIAR<br>JUNTOS<br>É MELHOR",
    postArtTitle: "Feito à mão.<br><em>Compartilhado com a galera.</em>",
    postArtText: "Desenho, arte digital, 2D, 3D e ideias ainda em andamento. Mostre seu trabalho, rabisque junto ou só aproveite a companhia do ateliê.",
    postArtLink: "Traga sua criatividade",
    catMovie: "SESSÃO DA MADRUGADA",
    metaMovie: "CINEMA NO VR",
    movieImageText: "LUZES<br>BAIXAS<br>FILME<br>ROLANDO",
    movieImageTag: "CINEMA NO VR",
    postMovieTitle: "Mais um filme.<br><em>Mais uma amizade.</em>",
    postMovieText: "Puxe uma poltrona para ver um filme com a gente — e fique para o papo depois. Confira no Discord o que vai passar e como chegar.",
    postMovieLink: "Ver a próxima sessão",
    catCreator: "ESQUINA DA CRIAÇÃO",
    creatorImageText: "FAÇA<br>DO SEU JEITO",
    metaCreator: "APRENDER E EXPERIMENTAR",
    postCreatorTitle: "Quer saber<br><em>como se faz?</em>",
    postCreatorText: "Troque dicas criativas, explore ferramentas e pergunte o que sempre quis saber. Iniciantes, curiosos e profissionais são bem-vindos.",
    postCreatorLink: "Pergunte à comunidade",
    catHouse: "UM RECADO DA CASA",
    metaDress: "O CÓDIGO DE VESTIMENTA",
    houseImageText: "BEM<br>VESTIDO<br>SEJA GENTE BOA",
    postDressTitle: "Um pouco de <em>elegância.</em><br>Do seu jeito.",
    postDressText: "A casa tem um clima elegante, então capriche no visual se estiver a fim. Venha no seu estilo, respeite a galera e fique à vontade.",
    postDressLink: "Conheça a casa",
    catLate: "SAGUÃO NOTURNO",
    metaLate: "PELA CASA",
    postLateTitle: "A noite vai<br><em>mais longe.</em>",
    postLateText: "A maioria dos encontros começa depois da meia-noite, no fuso GMT−3. Sem horário rígido: o saguão ganha vida quando chegam os notívagos.",
    postLateLink: "Encontre a gente de madrugada",
    gatheringEyebrow: "A NOITE É SUA",
    gatheringTitle: "A noite é<br>nossa. <em>Vamos?</em>",
    gatheringText: "Oficinas de avatar, encontros de arte, sessões de cinema e papo sem pressa. A gente se reúne, faz coisas junto e deixa a noite seguir seu rumo.",
    gatheringCta: "Confira os encontros",
    gatheringCardLabel: "O MURAL DA MADRUGADA",
    gatheringWhenLabel: "QUANDO O SAGUÃO GANHA VIDA",
    gatheringWhen: "DEPOIS DA MEIA-NOITE",
    gatheringTimezone: "GMT−3 · QUANDO OS NOTÍVAGOS CHEGAREM",
    gatheringCardTitle: "Sem agenda engessada.<br><em>Só gente boa.</em>",
    gatheringCardText: "Oficinas, arte compartilhada, filmes e bons motivos para ficar acordado. No Discord você encontra os planos mais recentes.",
    gatheringCardLink: "Confira o mural",
    coinTitle: "A moeda da casa",
    coinText: "As moedas de ouro são um agradecimento de verdade aos membros ativos. São um benefício da comunidade, conquistado com participação — não são dinheiro, investimento nem promessa de valor financeiro.",
    aboutEyebrow: "A GALERA POR TRÁS DO SAGUÃO",
    aboutTitle: "Madrugada longa.<br><em>Boa companhia.</em>",
    aboutIntro: "Cada pessoa aqui curte uma coisa diferente, mas a porta está sempre aberta. Vale puxar papo sobre arte, avatares, aviação, idiomas — ou qualquer assunto que vier à cabeça.",
    prickettRole: "ARTE · CÓDIGO · 2D / 3D",
    prickettBio: "Faço graduação em Artes e TI: programo, desenho e crio em 2D e 3D. Falo português e inglês e estou aprendendo chinês e outros idiomas. Sou autista, de boa e adoro conversar sobre praticamente qualquer assunto.",
    prickettLink: "Encontre o Prickett online",
    nekuzuskaRole: "PROPRIETÁRIO · VIP",
    nekozuskaRole: "PROPRIETÁRIO · VIP",
    nekozuskaBio: "Dono da casa: tranquilo, meio misterioso, VIP e com um humor que muda de repente. Vem dar um oi — nunca se sabe qual capítulo vai encontrar.",
    nekozuskaSignoff: "A CASA TEM SEUS MISTÉRIOS.",
    succubiRole: "CONVÉS DE VOO · AGENTE 007",
    succubiBio: "Agente 007 sad boy por conta própria: zero falhas, zero riscos e 7 mil horas no simulador de voo. Histórias de aviação, pose de agente secreto e boa companhia inclusas.",
    succubiSignoff: "0 FALHAS · 0 RISCO · 7 MIL HORAS",
    communityEyebrow: "SUA GALERA ESTÁ AQUI",
    communityTitle: "As portas estão <em>abertas.</em>",
    communityDescription: "Encontre o grupo no VRChat. Veja os planos no Discord.<br>Tem lugar para você na mesa.",
    vrchatButton: "Encontre a gente no VRChat",
    discordButton: "Chegue no nosso Discord",
    communityNote: "DEPOIS DA MEIA-NOITE · GMT−3 · SEJA VOCÊ",
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

  watchHour.style.transform = `translateX(-50%) rotate(${hour * 30}deg)`;
  watchMinute.style.transform = `translateX(-50%) rotate(${minute * 6}deg)`;
  watchSecond.style.transform = `translateX(-50%) rotate(${second * 6}deg)`;

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
if (noticeFeed) {
  const noticeUrl = noticeFeed.dataset.feedUrl || DEFAULT_NOTICE_FEED;

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

      noticeFeed.replaceChildren();
      for (const notice of notices.slice(0, 10)) {
        if (!notice || typeof notice.title !== "string" || typeof notice.body !== "string") {
          throw new TypeError("Each notice must include string title and body fields.");
        }
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
    } catch (error) {
      console.error("The noticeboard could not be loaded.", error);
      noticeFeed.replaceChildren();
      const failed = document.createElement("p");
      failed.className = "notice-status";
      failed.textContent = translations[currentLanguage].noticeFailed;
      noticeFeed.append(failed);
    }
  }
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
