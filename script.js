const COMMUNITY_LINKS = {
  vrchat: "https://vrchat.com/home/group/grp_1046a0f0-f51c-41c5-b09b-319db949587a",
  discord: "https://discord.gg/3VUYgddZGP",
};

const DEFAULT_NOTICE_FEED = "assets/notices.json";
const DEFAULT_DISPATCH_FEED = "assets/dispatch.json";
const DISPATCH_PAGE_SIZE = 3;
const DISPATCH_FEATURE_INTERVAL_MS = 8000;
const DISPATCH_PAGE_INTERVAL_MS = 10000;
let cachedDispatchFeed = null;
let dispatchFeedRequest = null;
let dispatchFeatureInterval = null;
let dispatchPageInterval = null;
let dispatchRotationPaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let selectedDispatchCategory = "all";
let dispatchFeatureIndex = 0;
let dispatchPageIndex = 0;

const translations = {
  en: {
    skip: "Skip to content",
    home: "The Continental, home",
    houseLabel: "A VRCHAT SOCIAL HOUSE",
    navigation: "Main navigation",
    navHome: "The lobby",
    navDispatch: "House Bulletin",
    navGatherings: "Evenings & Events",
    navAbout: "The Registry",
    navJoin: "Request an invitation",
    exploreHouse: "Explore the house",
    switchLanguage: "Switch language to Portuguese",
    openWatch: "Open the pocket watch",
    closeWatch: "Close the pocket watch",
    watchLabel: "Pocket watch",
    watchKicker: "THE HOUSE CHRONOMETER",
    watchTitle: "The house, by the hour",
    watchLocal: "YOUR TIME · LOCAL",
    watchHouse: "THE HOUSE · GMT−3",
    watchSky: "A SMALL SKY FOR THE NIGHT WATCH",
    watchFooter: "THERE IS TIME YET.",
    rabbitCaption: "A QUIET GUIDE THROUGH THE HOUSE",
    playMusic: "Play background music",
    pauseMusic: "Pause background music",
    musicOff: "Play house music",
    musicOn: "Music is playing",
    musicUnavailable: "Background music could not be loaded",
    openVolume: "Open music volume",
    closeVolume: "Close music volume",
    volumeLabel: "HOUSE MUSIC · VOLUME",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    noticeEyebrow: "FROM THE FRONT DESK",
    noticeTitle: "A word from<br><em>the house.</em>",
    noticeDescription: "Notices, plans, and small happenings, entered in the house ledger.",
    noticeCta: "Read the house notices",
    noticeQuiet: "The ledger is quiet for the moment. Pray return after the next gathering.",
    noticeFailed: "The ledger is unavailable just now. The latest notices remain on Discord.",
    noticePostedBy: "POSTED BY",
    noticeDiscord: "OPEN THE DISCORD NOTICEBOARD",
    noticeUpdated: "LAST CHECKED",
    routeDispatchMeta: "THE FRONT-DESK LEDGER",
    routeDispatchTitle: "A word from<br>the house.",
    routeGatheringMeta: "THE HOUSE CALENDAR",
    routeGatheringTitle: "An evening<br>well spent.",
    routePeopleMeta: "THE GUEST REGISTRY",
    routePeopleTitle: "Meet the<br>household.",
    routeOpen: "VIEW THE ENTRY ↗",
    pageDispatchTitle: "The house bulletin",
    pageDispatchDeck: "Notices from the front desk: what the house is making, learning, and watching.",
    pageGatheringTitle: "Evenings at the house",
    pageGatheringDeck: "Gatherings, local hours, and the latest notices from the front desk.",
    pagePeopleTitle: "The house registry",
    pagePeopleDeck: "Meet the residents and keepers of this small VRChat social house.",
    liveNoticeEyebrow: "THE FRONT-DESK LEDGER",
    liveNoticeTitle: "Entered in<br><em>the house book.</em>",
    noticeSource: "Recent public notices from the house. Visit Discord to join the conversation.",
    noticeLoading: "Checking the noticeboard…",
    dispatchScheduleLabel: "BY THE HOUSE CLOCK",
    dispatchScheduleTitle: "The evening is<br><em>yours to keep.</em>",
    dispatchScheduleText: "We gather after midnight, GMT−3: avatar sessions, art, a film, or a conversation with no need to watch the clock.",
    peopleIntroTitle: "A small household.<br><em>A generous welcome.</em>",
    currencyTitle: "GOLD · COMMUNITY CURRENCY",
    communityRule: "No drama or harassment. Be courteous, respect every person and space, and leave room for the next guest.",
    discordLatest: "For the latest notice, consult the front desk on Discord.",
    heroEyebrow: "THE HOUSE IS OPEN",
    heroSubEyebrow: "A VRCHAT SOCIAL HOUSE",
    heroTitle: "Your room<br>for the <em>evening.</em>",
    heroDescription: "A VRChat social house for curious, creative guests. Learn to customise an avatar, share a work in progress, join a film, or stay for another conversation. No drama or harassment; every guest deserves to feel safe and welcome.",
    heroCta: "Check in",
    heroBrowse: "Consult the house bulletin",
    dressCode: "A LITTLE FINERY, IF YOU PLEASE. ALWAYS YOURSELF.",
    heroArtAlt: "Original illustration of the house entrance glowing warmly at night",
    signTop: "A HOUSE BETWEEN WORLDS",
    signBottom: "THE DOOR IS OPEN",
    artCaptionCompany: "✳ GOOD COMPANY, WELL RECEIVED",
    artCaption: "THE LATE SHIFT · GMT−3",
    artSideLabel: "YOUR ROOM, YOUR OWN WAY",
    scrollExplore: "CONTINUE THROUGH THE HOUSE",
    tickerLabel: "House welcome",
    tickerOne: "GOOD MANNERS · GOOD COMPANY",
    tickerTwo: "THE LATE SHIFT · GMT−3",
    tickerThree: "MAKE SOMETHING IN GOOD COMPANY",
    tickerFour: "THERE IS ALWAYS ROOM FOR ONE MORE",
    dispatchEyebrow: "A WORD FROM THE FRONT DESK",
    dispatchTitle: "The house<br><em>bulletin.</em>",
    moreFromHouse: "Join the conversation",
    dispatchIntro: "Workshops, art, films, and other reasons to stay a little longer.",
    filterLabel: "Filter house notices",
    dispatchFeatureLabel: "A NOTICE FROM THE HOUSE",
    dispatchNoItems: "No entries under this heading just yet.",
    dispatchFeedError: "The house bulletin could not be loaded. Please try again later.",
    dispatchPosition: "FEATURE {current} OF {total}",
    dispatchPagePosition: "PAGE {current} OF {total}",
    dispatchActivitiesLabel: "House notices and activities",
    dispatchResultsLabel: "Notices in the selected category",
    previousDispatchItem: "Previous feature",
    nextDispatchItem: "Next feature",
    previousDispatchPage: "Previous posts",
    nextDispatchPage: "More posts",
    pauseDispatchRotation: "Pause automatic rotation",
    resumeDispatchRotation: "Resume automatic rotation",
    gatheringEyebrow: "THE EVENING IS RESERVED",
    gatheringTitle: "An evening<br><em>at the house.</em>",
    gatheringText: "Avatar workshops, art, film nights, and conversation at an unhurried pace. The evening will take its own course; the company is yours to choose.",
    gatheringCta: "View the house calendar",
    gatheringCardLabel: "THE FRONT-DESK LEDGER",
    gatheringWhenLabel: "WHEN THE HOUSE STIRS",
    gatheringWhen: "PAST MIDNIGHT",
    gatheringTimezone: "GMT−3 · WHEN THE NIGHT OWLS ARRIVE",
    gatheringCardTitle: "No rigid itinerary.<br><em>Only good company.</em>",
    gatheringCardText: "Avatar workshops, shared art, film nights, and other good reasons to stay. The latest arrangements are on Discord.",
    gatheringCardLink: "Consult the ledger",
    coinTitle: "Gold coins of the house",
    coinText: "Gold coins thank active members for taking part; they have no cash value. A marker is a friendly promise. Any talk of being barred from the house is only a joke about keeping the rules.",
    aboutEyebrow: "THE HOUSEHOLD & REGISTRY",
    aboutTitle: "Late hours.<br><em>Good company.</em>",
    aboutIntro: "A small household, many interests, and a door kept open. Speak with us of art, avatars, aviation, languages, or whatever takes your fancy.",
    prickettRole: "ART · CODE · 2D / 3D",
    prickettBio: "Prickett is an undergraduate in Art and IT. He codes, draws, and creates in 2D and 3D; speaks English and Portuguese; and is learning Chinese and other languages. He is autistic, easy-going, and glad to talk about almost anything.",
    prickettLink: "Visit Prickett's page",
    nekozuskaRole: "THE MANAGER · VIP",
    nekozuskaBio: "The proprietor: easy-going, mysterious, VIP, and known for changing moods like the weather. Offer a greeting; one never knows which chapter the Manager is in.",
    nekozuskaSignoff: "SOME MATTERS REMAIN IN THE LEDGER.",
    succubiRole: "FLIGHT DECK · AGENT 007",
    succubiBio: "Self-appointed sad-boy Agent 007: zero failures, zero risk, and 7,000 hours in the flight simulator. The lonely-agent act is a joke; he has a girlfriend. Expect flight stories and a touch of secret-agent bravado.",
    succubiSignoff: "0 FAILURES · 0 RISK · 7K HOURS",
    communityEyebrow: "YOUR ROOM IS READY",
    communityTitle: "The house is <em>open.</em>",
    communityDescription: "Check in with us on VRChat. Find the plans on Discord.<br>Your place is at the table.",
    vrchatButton: "Check in on VRChat",
    discordButton: "Request a Discord invitation",
    communityNote: "AFTER MIDNIGHT · GMT−3 · COME AS YOU ARE",
    disclaimer: "An unofficial fan community. Not affiliated with The Continental, Lionsgate, or John Wick.",
    backToLobby: "RETURN TO THE LOBBY",
  },
  pt: {
    skip: "Pular para o conteúdo",
    home: "The Continental, início",
    houseLabel: "ESPAÇO SOCIAL NO VRCHAT",
    navigation: "Navegação principal",
    navHome: "O saguão",
    navDispatch: "Mural da casa",
    navGatherings: "Noites & eventos",
    navAbout: "O registro",
    navJoin: "Peça um convite",
    exploreHouse: "Conheça a casa",
    switchLanguage: "Mudar idioma para inglês",
    openWatch: "Abrir o relógio de bolso",
    closeWatch: "Fechar o relógio de bolso",
    watchLabel: "Relógio de bolso",
    watchKicker: "O CRONÔMETRO DA CASA",
    watchTitle: "A casa, hora a hora",
    watchLocal: "SEU HORÁRIO · LOCAL",
    watchHouse: "A CASA · GMT−3",
    watchSky: "UM PEQUENO CÉU PARA O TURNO DA NOITE",
    watchFooter: "AINDA HÁ TEMPO.",
    rabbitCaption: "UM GUIA DISCRETO PELA CASA",
    playMusic: "Tocar música de fundo",
    pauseMusic: "Pausar música de fundo",
    musicOff: "Tocar música da casa",
    musicOn: "Música tocando",
    musicUnavailable: "Não foi possível carregar a música de fundo",
    openVolume: "Abrir o volume da música",
    closeVolume: "Fechar o volume da música",
    volumeLabel: "MÚSICA DA CASA · VOLUME",
    openMenu: "Abrir navegação",
    closeMenu: "Fechar navegação",
    noticeEyebrow: "RECADOS DA RECEPÇÃO",
    noticeTitle: "Uma palavra<br><em>da casa.</em>",
    noticeDescription: "Avisos, planos e pequenos acontecimentos, registrados no livro da casa.",
    noticeCta: "Ler os avisos da casa",
    noticeQuiet: "O livro está quieto por enquanto. Volte depois do próximo encontro.",
    noticeFailed: "O livro está indisponível agora. Os avisos mais recentes seguem no Discord.",
    noticePostedBy: "PUBLICADO POR",
    noticeDiscord: "ABRIR O MURAL NO DISCORD",
    noticeUpdated: "ÚLTIMA CONSULTA",
    routeDispatchMeta: "LIVRO DA RECEPÇÃO",
    routeDispatchTitle: "Uma palavra<br>da casa.",
    routeGatheringMeta: "A AGENDA DA CASA",
    routeGatheringTitle: "Uma noite<br>bem passada.",
    routePeopleMeta: "REGISTRO DE HÓSPEDES",
    routePeopleTitle: "Conheça a<br>casa.",
    routeOpen: "VER O REGISTRO ↗",
    pageDispatchTitle: "Mural da casa",
    pageDispatchDeck: "Avisos da recepção: o que a casa está criando, aprendendo e assistindo.",
    pageGatheringTitle: "Noites na casa",
    pageGatheringDeck: "Encontros, horário local e os avisos mais recentes da recepção.",
    pagePeopleTitle: "Registro da casa",
    pagePeopleDeck: "Conheça quem vive e cuida deste pequeno espaço social no VRChat.",
    liveNoticeEyebrow: "LIVRO DA RECEPÇÃO",
    liveNoticeTitle: "Registrado no<br><em>livro da casa.</em>",
    noticeSource: "Avisos públicos recentes da casa. Entre no Discord para participar da conversa.",
    noticeLoading: "Consultando o mural…",
    dispatchScheduleLabel: "PELO RELÓGIO DA CASA",
    dispatchScheduleTitle: "A noite é sua<br><em>para aproveitar.</em>",
    dispatchScheduleText: "A gente se encontra depois da meia-noite, no fuso GMT−3: oficinas de avatar, arte, filme ou uma conversa sem pressa.",
    peopleIntroTitle: "Uma pequena casa.<br><em>Boas-vindas de verdade.</em>",
    currencyTitle: "OURO · MOEDA DA COMUNIDADE",
    communityRule: "Sem drama nem assédio. Gentileza e respeito com todas as pessoas e espaços; sempre cabe mais alguém à mesa.",
    discordLatest: "Para o aviso mais recente, consulte a recepção no Discord.",
    heroEyebrow: "A CASA ESTÁ ABERTA",
    heroSubEyebrow: "UM ESPAÇO SOCIAL NO VRCHAT",
    heroTitle: "Seu quarto<br>para a <em>noite.</em>",
    heroDescription: "Uma casa no VRChat para quem gosta de criar e descobrir coisas. Aprenda a personalizar um avatar, compartilhe um projeto, assista a um filme ou fique para mais uma conversa. Sem drama ou assédio: toda pessoa merece se sentir segura e bem-vinda.",
    heroCta: "Faça seu check-in",
    heroBrowse: "Consulte o mural da casa",
    dressCode: "UM TOQUE DE ELEGÂNCIA, SE QUISER. SEMPRE SEJA VOCÊ.",
    heroArtAlt: "Ilustração original da entrada da casa iluminada à noite",
    signTop: "UMA CASA ENTRE MUNDOS",
    signBottom: "A PORTA ESTÁ ABERTA",
    artCaptionCompany: "✳ BOA COMPANHIA, MUITO BEM-VINDA",
    artCaption: "TURNO DA NOITE · GMT−3",
    artSideLabel: "SEU QUARTO, DO SEU JEITO",
    scrollExplore: "SIGA PELA CASA",
    tickerLabel: "Boas-vindas da casa",
    tickerOne: "BOA EDUCAÇÃO · BOA COMPANHIA",
    tickerTwo: "TURNO DA NOITE · GMT−3",
    tickerThree: "CRIAR É MELHOR EM BOA COMPANHIA",
    tickerFour: "SEMPRE CABE MAIS UMA PESSOA",
    dispatchEyebrow: "UM RECADO DA RECEPÇÃO",
    dispatchTitle: "O mural<br><em>da casa.</em>",
    moreFromHouse: "Venha trocar ideia",
    dispatchIntro: "Oficinas, arte, filmes e outros bons motivos para ficar mais um pouco.",
    filterLabel: "Filtrar avisos da casa",
    dispatchFeatureLabel: "UM AVISO DA CASA",
    dispatchNoItems: "Ainda não há registros nesta categoria.",
    dispatchFeedError: "Não foi possível carregar o mural da casa. Tente novamente mais tarde.",
    dispatchPosition: "DESTAQUE {current} DE {total}",
    dispatchPagePosition: "PÁGINA {current} DE {total}",
    dispatchActivitiesLabel: "Avisos e atividades da casa",
    dispatchResultsLabel: "Avisos da categoria selecionada",
    previousDispatchItem: "Destaque anterior",
    nextDispatchItem: "Próximo destaque",
    previousDispatchPage: "Publicações anteriores",
    nextDispatchPage: "Mais publicações",
    pauseDispatchRotation: "Pausar a rotação automática",
    resumeDispatchRotation: "Retomar a rotação automática",
    gatheringEyebrow: "A NOITE ESTÁ RESERVADA",
    gatheringTitle: "Uma noite<br><em>na casa.</em>",
    gatheringText: "Oficinas de avatar, arte, filmes e conversa sem pressa. A noite segue seu próprio caminho; a companhia é por sua conta.",
    gatheringCta: "Ver a agenda da casa",
    gatheringCardLabel: "LIVRO DA RECEPÇÃO",
    gatheringWhenLabel: "QUANDO A CASA DESPERTA",
    gatheringWhen: "DEPOIS DA MEIA-NOITE",
    gatheringTimezone: "GMT−3 · QUANDO A TURMA DA MADRUGADA CHEGAR",
    gatheringCardTitle: "Sem roteiro rígido.<br><em>Só boa companhia.</em>",
    gatheringCardText: "Oficinas de avatar, arte compartilhada, filmes e outros bons motivos para ficar. Os planos mais recentes estão no Discord.",
    gatheringCardLink: "Consulte o livro",
    coinTitle: "Moedas de ouro da casa",
    coinText: "As moedas de ouro agradecem a participação dos membros ativos; não têm valor em dinheiro. Um marcador é uma promessa entre amigos. Falar em ser barrado da casa é só uma brincadeira sobre seguir as regras.",
    aboutEyebrow: "A CASA E SEU REGISTRO",
    aboutTitle: "Madrugada adentro.<br><em>Boa companhia.</em>",
    aboutIntro: "Uma casa pequena, muitos interesses e a porta sempre aberta. Pode puxar papo sobre arte, avatares, aviação, idiomas ou qualquer assunto que der vontade.",
    prickettRole: "ARTE · CÓDIGO · 2D / 3D",
    prickettBio: "Prickett faz graduação em Artes e TI. Programa, desenha e cria em 2D e 3D; fala português e inglês e está aprendendo chinês e outros idiomas. É autista, tranquilo e adora conversar sobre praticamente qualquer assunto.",
    prickettLink: "Visite a página do Prickett",
    nekozuskaRole: "GERENTE · VIP",
    nekozuskaBio: "O proprietário: tranquilo, misterioso, VIP e conhecido por mudar de humor como o tempo. Dê um oi; nunca se sabe em que capítulo o gerente está.",
    nekozuskaSignoff: "ALGUNS ASSUNTOS FICAM NO LIVRO.",
    succubiRole: "CONVÉS DE VOO · AGENTE 007",
    succubiBio: "Agente 007 sad boy por conta própria: zero falhas, zero riscos e 7 mil horas no simulador de voo. O papo de agente solitário é brincadeira — ele tem namorada, sim. Histórias de aviação e pose de agente secreto vêm junto.",
    succubiSignoff: "0 FALHAS · 0 RISCO · 7 MIL HORAS",
    communityEyebrow: "SEU QUARTO ESTÁ PRONTO",
    communityTitle: "A casa está <em>aberta.</em>",
    communityDescription: "Faça seu check-in no VRChat. Confira os planos no Discord.<br>Seu lugar está à mesa.",
    vrchatButton: "Faça check-in no VRChat",
    discordButton: "Peça um convite pelo Discord",
    communityNote: "DEPOIS DA MEIA-NOITE · GMT−3 · SEJA VOCÊ",
    disclaimer: "Comunidade de fãs não oficial. Sem vínculo com The Continental, Lionsgate ou John Wick.",
    backToLobby: "VOLTAR AO SAGUÃO",
  },
};

function updateCommunityLinks() {
  for (const link of document.querySelectorAll("[data-community]")) {
    const destination = COMMUNITY_LINKS[link.dataset.community];
    if (!destination) {
      throw new Error(`Missing community destination for "${link.dataset.community}".`);
    }
    link.href = destination;
  }
}
updateCommunityLinks();

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
let noticesRefreshInterval = null;
let scrollObserver = null;
const pageTitles = {
  en: {
    home: "The Continental — VRChat Social House",
    dispatch: "House Bulletin — The Continental",
    gatherings: "Evenings at the House — The Continental",
    people: "The House Registry — The Continental",
  },
  pt: {
    home: "The Continental — Casa social no VRChat",
    dispatch: "Mural da casa — The Continental",
    gatherings: "Noites na casa — The Continental",
    people: "Registro da casa — The Continental",
  },
};
const pageDescriptions = {
  en: {
    home: "A welcoming VRChat social house for avatar workshops, art, film nights, and good company.",
    dispatch: "House notices from the front desk: workshops, art, film nights, and community news.",
    gatherings: "Gatherings, local hours, and public notices from The Continental VRChat social house.",
    people: "Meet the residents and keepers of The Continental, a welcoming VRChat social house.",
  },
  pt: {
    home: "Uma casa social acolhedora no VRChat, com oficinas de avatares, arte, filmes e boa companhia.",
    dispatch: "Avisos da recepção: oficinas, arte, noites de filme e notícias da comunidade.",
    gatherings: "Encontros, horário local e avisos públicos da casa social The Continental no VRChat.",
    people: "Conheça quem vive e cuida da The Continental, uma casa social acolhedora no VRChat.",
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
  pageDescription.content = pageDescriptions[language][page];

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
  window.history.replaceState(window.history.state, "", url);
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
  updateCommunityLinks();
  updateMusicLabel();
  updateMenuLabel();
  updateWatchLabel();
  updateVolumeLabel();
  updateDispatchRotationControl();
  if (cachedDispatchFeed && dispatchPageIsActive()) {
    const activities = document.querySelector(".dispatch");
    activities?.setAttribute("aria-label", translations[currentLanguage].dispatchActivitiesLabel);
    renderDispatchFilters();
    renderDispatchFeature(dispatchFeatureIndex);
    renderDispatchResults();
  }
  if (cachedNotices !== null) renderNotices(cachedNotices);
}

function dispatchPageIsActive() {
  return Boolean(document.querySelector(".dispatch-page") && document.querySelector("#dispatch-feature"));
}

function validateDispatchFeed(feed) {
  if (
    !feed
    || !Array.isArray(feed.categories)
    || !Array.isArray(feed.items)
    || feed.categories.length > 20
    || feed.items.length > 300
  ) {
    throw new TypeError("The dispatch feed has an invalid shape or exceeds its size limits.");
  }

  const categoryIds = new Set();
  const hasLocalizedText = (value, limit) => value && ["en", "pt"].every((language) => (
    typeof value[language] === "string" && value[language].trim() && value[language].length <= limit
  ));
  for (const category of feed.categories) {
    if (
      !category
      || typeof category.id !== "string"
      || !/^[a-z0-9-]{1,40}$/.test(category.id)
      || category.id === "all"
      || categoryIds.has(category.id)
      || !hasLocalizedText(category.label, 80)
    ) {
      throw new TypeError("The dispatch feed contains an invalid or duplicate category.");
    }
    categoryIds.add(category.id);
  }

  const itemIds = new Set();
  for (const item of feed.items) {
    const href = typeof item?.href === "string" ? new URL(item.href, window.location.href) : null;
    const siteDirectory = new URL(".", window.location.href).pathname;
    const localPage = href && href.origin === window.location.origin
      && href.pathname.startsWith(siteDirectory)
      && ["index.html", "dispatch.html", "gatherings.html", "people.html"].includes(href.pathname.split("/").pop());
    const discordLink = href && href.protocol === "https:" && href.hostname === "discord.gg"
      && !href.username && !href.password && !href.port;
    const validImage = item?.image === undefined || (
      typeof item.image?.src === "string"
      && /^assets\/dispatch\/[a-z0-9._-]+\.(?:avif|gif|jpe?g|png|webp)$/i.test(item.image.src)
      && hasLocalizedText(item.image.alt, 300)
    );
    if (
      !item
      || typeof item.id !== "string"
      || !/^[a-z0-9-]{1,60}$/.test(item.id)
      || itemIds.has(item.id)
      || !categoryIds.has(item.category)
      || typeof item.icon !== "string"
      || item.icon.length > 8
      || !hasLocalizedText(item.meta, 100)
      || !hasLocalizedText(item.body, 3000)
      || !hasLocalizedText(item.linkLabel, 120)
      || !["en", "pt"].every((language) => (
        typeof item.title?.[language]?.lead === "string"
        && item.title[language].lead.length <= 200
        && typeof item.title[language]?.accent === "string"
        && item.title[language].accent.length <= 200
      ))
      || !href
      || (!localPage && !discordLink)
      || !validImage
    ) {
      throw new TypeError("The dispatch feed contains an invalid or unsafe post.");
    }
    itemIds.add(item.id);
  }

  return feed;
}

async function loadDispatchFeed() {
  if (!cachedDispatchFeed) {
    if (!dispatchFeedRequest) {
      dispatchFeedRequest = fetch(DEFAULT_DISPATCH_FEED, {
        cache: "no-cache",
        headers: { Accept: "application/json" },
      }).then((response) => {
        if (!response.ok) throw new Error(`Dispatch feed returned HTTP ${response.status}.`);
        return response.json();
      }).then(validateDispatchFeed).finally(() => {
        dispatchFeedRequest = null;
      });
    }
    cachedDispatchFeed = await dispatchFeedRequest;
  }

  if (dispatchPageIsActive()) {
    document.querySelector(".dispatch")?.setAttribute("aria-label", translations[currentLanguage].dispatchActivitiesLabel);
    document.querySelector("#dispatch-results")?.setAttribute("aria-label", translations[currentLanguage].dispatchResultsLabel);
    const status = document.querySelector("#dispatch-feed-status");
    if (status) status.hidden = true;
    renderDispatchFilters();
    renderDispatchFeature(dispatchFeatureIndex);
    renderDispatchResults();
    startDispatchRotation();
    if (!cachedDispatchFeed.items.length) {
      const status = document.querySelector("#dispatch-feed-status");
      if (status) {
        status.textContent = translations[currentLanguage].dispatchNoItems;
        status.hidden = false;
      }
    }
  }
}

function dispatchText(value) {
  return value[currentLanguage];
}

function safeDispatchHref(href) {
  const destination = new URL(href, window.location.href);
  return destination.href;
}

function createDispatchCard(item, featured = false) {
  const category = cachedDispatchFeed.categories.find((entry) => entry.id === item.category);
  const card = document.createElement("article");
  card.className = `dispatch-card${featured ? " dispatch-feature-card" : ""}`;
  card.dataset.category = item.category;
  card.dataset.itemId = item.id;

  const visual = document.createElement("div");
  visual.className = featured ? "dispatch-feature-visual" : "dispatch-icon";
  if (!item.image) visual.setAttribute("aria-hidden", "true");
  if (item.image) {
    const image = document.createElement("img");
    image.src = item.image.src;
    image.alt = dispatchText(item.image.alt);
    image.loading = featured ? "eager" : "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => image.remove(), { once: true });
    visual.append(image);
  } else {
    const icon = document.createElement("span");
    icon.className = featured ? "dispatch-feature-icon" : "";
    icon.textContent = item.icon;
    visual.append(icon);
  }
  if (featured) {
    const stamp = document.createElement("span");
    stamp.className = "dispatch-feature-stamp";
    stamp.textContent = dispatchText(category.label);
    visual.append(stamp);
  }

  const body = document.createElement("div");
  body.className = "card-body";
  const meta = document.createElement("div");
  meta.className = "card-meta";
  const categoryLabel = document.createElement("span");
  categoryLabel.textContent = dispatchText(item.meta);
  const postNumber = document.createElement("span");
  postNumber.textContent = `${String(cachedDispatchFeed.items.indexOf(item) + 1).padStart(2, "0")} / ${String(cachedDispatchFeed.items.length).padStart(2, "0")}`;
  meta.append(categoryLabel, postNumber);

  const title = document.createElement("h2");
  const localizedTitle = item.title[currentLanguage];
  title.append(document.createTextNode(localizedTitle.lead));
  if (localizedTitle.accent) {
    title.append(document.createTextNode(" "));
    const accent = document.createElement("em");
    accent.textContent = localizedTitle.accent;
    title.append(accent);
  }

  const description = document.createElement("p");
  description.textContent = dispatchText(item.body);
  const link = document.createElement("a");
  link.className = "card-link";
  link.href = safeDispatchHref(item.href);
  const linkLabel = document.createElement("span");
  linkLabel.textContent = dispatchText(item.linkLabel);
  const linkArrow = document.createElement("span");
  linkArrow.setAttribute("aria-hidden", "true");
  linkArrow.textContent = "↗";
  link.append(linkLabel, linkArrow);
  if (new URL(link.href).origin !== window.location.origin) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  body.append(meta, title, description, link);
  card.append(visual, body);
  return card;
}

function renderDispatchFilters() {
  const filters = document.querySelector("#dispatch-filters");
  if (!filters || !cachedDispatchFeed) return;
  const buttons = [];
  const allButton = document.createElement("button");
  allButton.className = "filter-button";
  allButton.type = "button";
  allButton.dataset.filter = "all";
  allButton.setAttribute("aria-pressed", "false");
  allButton.textContent = currentLanguage === "pt" ? "Tudo" : "Everything";
  buttons.push(allButton);

  for (const category of cachedDispatchFeed.categories) {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.type = "button";
    button.dataset.filter = category.id;
    button.setAttribute("aria-pressed", "false");
    button.textContent = dispatchText(category.label);
    buttons.push(button);
  }

  filters.replaceChildren(...buttons);
  updateDispatchFilterButtons();
  filters.setAttribute("aria-label", translations[currentLanguage].filterLabel);
}

function updateDispatchFilterButtons() {
  for (const button of document.querySelectorAll(".filter-button")) {
    const active = button.dataset.filter === selectedDispatchCategory;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  }
}

function formatDispatchPosition(key, current, total) {
  return translations[currentLanguage][key]
    .replace("{current}", String(current).padStart(2, "0"))
    .replace("{total}", String(total).padStart(2, "0"));
}

function renderDispatchFeature(index, direction = 1) {
  const feature = document.querySelector("#dispatch-feature");
  if (!feature || !cachedDispatchFeed?.items.length) return;
  dispatchFeatureIndex = (index + cachedDispatchFeed.items.length) % cachedDispatchFeed.items.length;
  const item = cachedDispatchFeed.items[dispatchFeatureIndex];
  const card = createDispatchCard(item, true);
  card.classList.add("is-entering");
  card.style.setProperty("--dispatch-entry-offset", direction < 0 ? "-24px" : "24px");
  feature.replaceChildren(card);
  window.requestAnimationFrame(() => card.classList.remove("is-entering"));

  const position = document.querySelector("#dispatch-feature-position");
  if (position) {
    position.textContent = formatDispatchPosition("dispatchPosition", dispatchFeatureIndex + 1, cachedDispatchFeed.items.length);
  }
}

function visibleDispatchItems() {
  if (!cachedDispatchFeed) return [];
  return selectedDispatchCategory === "all"
    ? []
    : cachedDispatchFeed.items.filter((item) => item.category === selectedDispatchCategory);
}

function renderDispatchResults(direction = 1) {
  const results = document.querySelector("#dispatch-results");
  const grid = document.querySelector("#dispatch-grid");
  const label = document.querySelector("#dispatch-results-label");
  const controls = document.querySelector("#dispatch-page-controls");
  if (!results || !grid || !cachedDispatchFeed) return;

  const filteredItems = visibleDispatchItems();
  if (selectedDispatchCategory === "all") {
    results.hidden = true;
    grid.replaceChildren();
    return;
  }

  results.hidden = false;
  const category = cachedDispatchFeed.categories.find((entry) => entry.id === selectedDispatchCategory);
  if (label) label.textContent = dispatchText(category.label);
  if (!filteredItems.length) {
    const empty = document.createElement("p");
    empty.className = "dispatch-feed-status";
    empty.textContent = translations[currentLanguage].dispatchNoItems;
    grid.replaceChildren(empty);
    controls.hidden = true;
    return;
  }

  const pageCount = Math.ceil(filteredItems.length / DISPATCH_PAGE_SIZE);
  dispatchPageIndex = ((dispatchPageIndex % pageCount) + pageCount) % pageCount;
  const pageItems = filteredItems.slice(
    dispatchPageIndex * DISPATCH_PAGE_SIZE,
    (dispatchPageIndex + 1) * DISPATCH_PAGE_SIZE,
  );
  const cards = pageItems.map((item) => createDispatchCard(item));
  for (const card of cards) {
    card.classList.add("is-entering");
    card.style.setProperty("--dispatch-entry-offset", direction < 0 ? "-20px" : "20px");
  }
  grid.replaceChildren(...cards);
  window.requestAnimationFrame(() => {
    for (const card of cards) card.classList.remove("is-entering");
  });

  controls.hidden = pageCount <= 1;
  const position = document.querySelector("#dispatch-page-position");
  if (position) position.textContent = formatDispatchPosition("dispatchPagePosition", dispatchPageIndex + 1, pageCount);
}

function setDispatchFilter(categoryId) {
  if (
    !cachedDispatchFeed
    || (categoryId !== "all" && !cachedDispatchFeed.categories.some((category) => category.id === categoryId))
  ) return;
  selectedDispatchCategory = categoryId;
  dispatchPageIndex = 0;
  updateDispatchFilterButtons();
  renderDispatchResults();
  if (categoryId !== "all") {
    const match = cachedDispatchFeed.items.findIndex((item) => item.category === categoryId);
    if (match >= 0) renderDispatchFeature(match);
  }
  startDispatchRotation();
}

function updateDispatchRotationControl() {
  const button = document.querySelector('[data-dispatch-action="toggle-rotation"]');
  if (!button) return;
  const label = translations[currentLanguage][dispatchRotationPaused ? "resumeDispatchRotation" : "pauseDispatchRotation"];
  button.setAttribute("aria-pressed", String(dispatchRotationPaused));
  button.setAttribute("aria-label", label);
  button.title = label;
  button.querySelector(".dispatch-rotation-icon").textContent = dispatchRotationPaused ? "▶" : "Ⅱ";
}

function startDispatchRotation() {
  window.clearInterval(dispatchFeatureInterval);
  window.clearInterval(dispatchPageInterval);
  dispatchFeatureInterval = null;
  dispatchPageInterval = null;
  if (!dispatchPageIsActive() || dispatchRotationPaused || !cachedDispatchFeed?.items.length) return;

  dispatchFeatureInterval = window.setInterval(() => {
    if (document.hidden || dispatchRotationHasActiveInteraction()) return;
    renderDispatchFeature(dispatchFeatureIndex + 1);
  }, DISPATCH_FEATURE_INTERVAL_MS);

  dispatchPageInterval = window.setInterval(() => {
    const pageCount = Math.ceil(visibleDispatchItems().length / DISPATCH_PAGE_SIZE);
    if (
      selectedDispatchCategory === "all"
      || pageCount < 2
      || document.hidden
      || dispatchRotationHasActiveInteraction()
    ) return;
    dispatchPageIndex = (dispatchPageIndex + 1) % pageCount;
    renderDispatchResults();
  }, DISPATCH_PAGE_INTERVAL_MS);
}

function setDispatchRotationPaused(isPaused) {
  dispatchRotationPaused = isPaused;
  updateDispatchRotationControl();
  startDispatchRotation();
}

function dispatchRotationHasActiveInteraction() {
  return Boolean(document.querySelector(
    "#dispatch-feature:hover, #dispatch-feature:focus-within, #dispatch-grid:hover, #dispatch-grid:focus-within, "
    + "[data-dispatch-action='previous-feature']:hover, [data-dispatch-action='previous-feature']:focus, "
    + "[data-dispatch-action='next-feature']:hover, [data-dispatch-action='next-feature']:focus, "
    + "[data-dispatch-action='previous-page']:hover, [data-dispatch-action='previous-page']:focus, "
    + "[data-dispatch-action='next-page']:hover, [data-dispatch-action='next-page']:focus",
  ));
}

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const filterButton = event.target.closest(".filter-button");
  if (filterButton) {
    setDispatchFilter(filterButton.dataset.filter);
    return;
  }

  const action = event.target.closest("[data-dispatch-action]")?.dataset.dispatchAction;
  if (action === "toggle-rotation") {
    setDispatchRotationPaused(!dispatchRotationPaused);
  } else if (action === "previous-feature" && cachedDispatchFeed?.items.length) {
    renderDispatchFeature(dispatchFeatureIndex - 1, -1);
  } else if (action === "next-feature" && cachedDispatchFeed?.items.length) {
    renderDispatchFeature(dispatchFeatureIndex + 1, 1);
  } else if (action === "previous-page") {
    dispatchPageIndex -= 1;
    renderDispatchResults(-1);
  } else if (action === "next-page") {
    dispatchPageIndex += 1;
    renderDispatchResults(1);
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");
const watchToggle = document.querySelector(".watch-toggle");
const watchPanel = document.querySelector("#watch-panel");
const watchHour = document.querySelector(".watch-hour");
const watchMinute = document.querySelector(".watch-minute");
const watchSecond = document.querySelector(".watch-second");
let watchClockInterval = null;
const watchNumberMarks = watchPanel.querySelectorAll(".watch-tick");
const watchRabbit = watchPanel.querySelector(".watch-rabbit");
const watchSky = watchPanel.querySelector(".watch-sky");

if (watchRabbit && watchSky) {
  watchSky.insertBefore(watchRabbit, watchSky.querySelector('[data-i18n="watchSky"]'));
}

watchNumberMarks.forEach((mark, index) => {
  const angle = index * 30;
  mark.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-70px)`;
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
  if (isOpen) {
    updateClock();
    if (watchClockInterval === null) watchClockInterval = window.setInterval(updateClock, 1000);
  } else if (watchClockInterval !== null) {
    window.clearInterval(watchClockInterval);
    watchClockInterval = null;
  }
}

function updateWatchLabel() {
  const isOpen = watchToggle.getAttribute("aria-expanded") === "true";
  watchToggle.setAttribute("aria-label", translations[currentLanguage][isOpen ? "closeWatch" : "openWatch"]);
}

watchToggle.addEventListener("click", () => {
  const isOpening = watchToggle.getAttribute("aria-expanded") !== "true";
  if (isOpening && !volumePanel.hidden) setVolumeOpen(false);
  if (isOpening && menuToggle.getAttribute("aria-expanded") === "true") setMenuOpen(false);
  setWatchOpen(isOpening);
});

document.addEventListener("click", (event) => {
  if (!watchPanel.hidden && !watchPanel.contains(event.target) && !watchToggle.contains(event.target)) {
    setWatchOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !volumePanel.hidden) {
    setVolumeOpen(false);
    volumeToggle.focus();
    return;
  }
  if (event.key === "Escape" && !watchPanel.hidden) {
    setWatchOpen(false);
    watchToggle.focus();
    return;
  }
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

window.addEventListener("scroll", () => {
  if (!watchPanel.hidden) {
    setWatchOpen(false);
  }
}, { passive: true });

function updateMenuLabel() {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-label", translations[currentLanguage][isExpanded ? "closeMenu" : "openMenu"]);
}

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  siteNavigation.classList.toggle("is-open", isOpen);
  updateMenuLabel();
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  const isOpening = !isExpanded;
  if (isOpening && !watchPanel.hidden) setWatchOpen(false);
  if (isOpening && !volumePanel.hidden) setVolumeOpen(false);
  setMenuOpen(isOpening);
});

siteNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && siteNavigation.classList.contains("is-open")) {
    setMenuOpen(false);
  }
});

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "pt" : "en");
});

const houseAudio = document.querySelector("#house-audio");
const soundToggle = document.querySelector(".sound-toggle");
houseAudio.volume = 0.1;
const volumeControl = document.createElement("div");
volumeControl.className = "volume-control";
const volumeToggle = document.createElement("button");
volumeToggle.className = "tool-button volume-toggle";
volumeToggle.type = "button";
volumeToggle.setAttribute("aria-expanded", "false");
volumeToggle.setAttribute("aria-controls", "volume-panel");
const comet = document.createElement("span");
comet.className = "volume-comet";
comet.setAttribute("aria-hidden", "true");
comet.textContent = "✦";
volumeToggle.append(comet);
const volumePanel = document.createElement("div");
volumePanel.className = "volume-panel";
volumePanel.id = "volume-panel";
volumePanel.hidden = true;
volumePanel.setAttribute("role", "group");
const volumeLabel = document.createElement("label");
volumeLabel.htmlFor = "music-volume";
const volumeRow = document.createElement("div");
volumeRow.className = "volume-slider-row";
const volumeSlider = document.createElement("input");
volumeSlider.className = "volume-slider";
volumeSlider.id = "music-volume";
volumeSlider.type = "range";
volumeSlider.min = "0";
volumeSlider.max = "1";
volumeSlider.step = "0.01";
const volumeLevel = document.createElement("output");
volumeLevel.className = "volume-level";
volumeLevel.htmlFor = volumeSlider.id;
volumeLevel.setAttribute("aria-hidden", "true");
volumeRow.append(volumeSlider, volumeLevel);
volumePanel.append(volumeLabel, volumeRow);
volumeControl.append(volumeToggle, volumePanel);
document.querySelector(".header-tools").insertBefore(volumeControl, menuToggle);

try {
  const savedVolume = window.localStorage.getItem("continental-music-volume");
  if (savedVolume !== null && savedVolume.trim() !== "") {
    const parsedVolume = Number(savedVolume);
    if (Number.isFinite(parsedVolume) && parsedVolume >= 0 && parsedVolume <= 1) {
      houseAudio.volume = parsedVolume;
    }
  }
} catch (error) {
  console.warn("Music volume preference could not be read from local storage.", error);
}
volumeSlider.value = String(houseAudio.volume);

function updateVolumeLabel() {
  volumeLabel.textContent = translations[currentLanguage].volumeLabel;
  volumeSlider.setAttribute("aria-label", translations[currentLanguage].volumeLabel);
  volumeLevel.value = `${Math.round(houseAudio.volume * 100)}%`;
  volumeLevel.textContent = volumeLevel.value;
  volumeSlider.setAttribute("aria-valuetext", volumeLevel.value);
  const isExpanded = volumeToggle.getAttribute("aria-expanded") === "true";
  volumeToggle.setAttribute("aria-label", translations[currentLanguage][isExpanded ? "closeVolume" : "openVolume"]);
}

function setVolumeOpen(isOpen) {
  volumeToggle.setAttribute("aria-expanded", String(isOpen));
  volumePanel.hidden = !isOpen;
  updateVolumeLabel();
  if (isOpen) volumeSlider.focus();
}

volumeToggle.addEventListener("click", () => {
  const isOpening = volumePanel.hidden;
  if (isOpening && !watchPanel.hidden) setWatchOpen(false);
  if (isOpening && menuToggle.getAttribute("aria-expanded") === "true") setMenuOpen(false);
  setVolumeOpen(isOpening);
});

volumeSlider.addEventListener("input", () => {
  houseAudio.volume = Number(volumeSlider.value);
  updateVolumeLabel();
  try {
    window.localStorage.setItem("continental-music-volume", volumeSlider.value);
  } catch (error) {
    console.warn("Music volume preference could not be saved to local storage.", error);
  }
});

document.addEventListener("click", (event) => {
  if (!volumePanel.hidden && !volumeControl.contains(event.target)) {
    setVolumeOpen(false);
  }
});

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
updateVolumeLabel();

async function loadNotices() {
  const noticeFeed = document.querySelector("#notice-feed");
  const noticePreview = document.querySelector("#notice-preview-message");
  if (!noticeFeed && !noticePreview) return;
  const noticeUrl = noticeFeed?.dataset.feedUrl || noticePreview?.dataset.feedUrl || DEFAULT_NOTICE_FEED;

  try {
    const response = await fetch(noticeUrl, { cache: "no-store", headers: { Accept: "application/json" } });
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
    const currentFeed = document.querySelector("#notice-feed");
    const currentPreview = document.querySelector("#notice-preview-message");
    if (currentFeed) {
      const failed = document.createElement("p");
      failed.className = "notice-status";
      failed.textContent = translations[currentLanguage].noticeFailed;
      currentFeed.replaceChildren(failed);
    }
    if (currentPreview) currentPreview.textContent = translations[currentLanguage].noticeFailed;
  }
}

renderNotices = (notices) => {
  const noticePreview = document.querySelector("#notice-preview-message");
  const noticeFeed = document.querySelector("#notice-feed");
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

function initializeMainContent() {
  if (dispatchPageIsActive()) {
    void loadDispatchFeed().catch((error) => {
      console.error("Dispatch content could not be loaded.", error);
      const status = document.querySelector("#dispatch-feed-status");
      if (status) {
        status.textContent = translations[currentLanguage].dispatchFeedError;
        status.hidden = false;
      }
    });
  } else {
    startDispatchRotation();
  }
  if (document.querySelector("#notice-feed") || document.querySelector("#notice-preview-message")) {
    if (cachedNotices !== null) renderNotices(cachedNotices);
    else loadNotices();
    if (noticesRefreshInterval === null) {
      noticesRefreshInterval = window.setInterval(() => {
        if (!document.hidden) loadNotices();
      }, 60_000);
    }
  }
  for (const section of document.querySelectorAll(".reveal-on-scroll")) {
    scrollObserver?.observe(section);
  }
}

const pageRoutes = new Map([
  ["index.html", "home-page"],
  ["dispatch.html", "dispatch-page"],
  ["gatherings.html", "gatherings-page"],
  ["people.html", "people-page"],
]);
const routeBodyClasses = ["home-page", "inner-page", "dispatch-page", "gatherings-page", "people-page"];
let routeRequestController = null;
let scrollStateFrame = null;

async function navigateWithinSite(destination, { addHistory = true, restoreScroll = false } = {}) {
  routeRequestController?.abort();
  const controller = new AbortController();
  routeRequestController = controller;

  try {
    const response = await fetch(destination.href, {
      headers: { Accept: "text/html" },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Page navigation returned HTTP ${response.status}.`);
    const responseUrl = new URL(response.url);
    const directory = new URL(".", window.location.href);
    const destinationName = responseUrl.pathname.split("/").pop();
    if (
      responseUrl.origin !== window.location.origin
      || !responseUrl.pathname.startsWith(directory.pathname)
      || !pageRoutes.has(destinationName)
    ) {
      throw new TypeError("Page navigation resolved outside the site's page routes.");
    }

    const incomingDocument = new DOMParser().parseFromString(await response.text(), "text/html");
    const incomingMain = incomingDocument.querySelector("#main");
    const currentMain = document.querySelector("#main");
    if (!incomingMain || !currentMain || !incomingDocument.title) {
      throw new TypeError("The requested page is missing its main content or title.");
    }

    if (addHistory) {
      window.history.replaceState(
        Object.assign({}, window.history.state || {}, { scrollY: window.scrollY }),
        "",
        window.location.href,
      );
    }
    for (const section of currentMain.querySelectorAll(".reveal-on-scroll")) {
      scrollObserver?.unobserve(section);
    }
    currentMain.replaceWith(incomingMain);
    document.body.classList.remove(...routeBodyClasses);
    const bodyClass = pageRoutes.get(destinationName);
    document.body.classList.add(bodyClass);
    if (bodyClass !== "home-page") document.body.classList.add("inner-page");
    document.title = incomingDocument.title;

    for (const link of siteNavigation.querySelectorAll("a[href]")) {
      const linkUrl = new URL(link.href, window.location.href);
      if (linkUrl.pathname === responseUrl.pathname && !link.classList.contains("nav-join")) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    }

    if (menuToggle.getAttribute("aria-expanded") === "true") setMenuOpen(false);
    if (!watchPanel.hidden) setWatchOpen(false);

    const language = destination.searchParams.get("lang");
    setLanguage(language === "pt" || language === "en" ? language : currentLanguage);
    initializeMainContent();

    const pageHeading = incomingMain.querySelector("h1");
    if (pageHeading) {
      pageHeading.setAttribute("tabindex", "-1");
      pageHeading.focus({ preventScroll: true });
      pageHeading.addEventListener("blur", () => pageHeading.removeAttribute("tabindex"), { once: true });
    }

    if (addHistory) {
      window.history.pushState({ scrollY: 0 }, "", destination.href);
    }
    const hashTarget = destination.hash
      ? document.getElementById(decodeURIComponent(destination.hash.slice(1)))
      : null;
    if (hashTarget) hashTarget.scrollIntoView();
    else if (restoreScroll) window.scrollTo(0, Number(window.history.state?.scrollY) || 0);
    else window.scrollTo(0, 0);
  } catch (error) {
    if (error.name === "AbortError") return;
    console.error("In-page navigation failed; loading the requested page normally.", error);
    window.location.assign(destination.href);
  }
}

window.history.replaceState(
  Object.assign({}, window.history.state || {}, { scrollY: window.scrollY }),
  "",
  window.location.href,
);

document.addEventListener("click", (event) => {
  if (
    event.defaultPrevented
    || event.button !== 0
    || event.metaKey
    || event.ctrlKey
    || event.shiftKey
    || event.altKey
  ) return;
  const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
  if (!anchor || anchor.target && anchor.target !== "_self" || anchor.hasAttribute("download")) return;

  const destination = new URL(anchor.href, window.location.href);
  const directory = new URL(".", window.location.href);
  const name = destination.pathname.split("/").pop();
  if (
    destination.origin !== window.location.origin
    || !destination.pathname.startsWith(directory.pathname)
    || !pageRoutes.has(name)
    || destination.pathname === window.location.pathname
  ) return;

  event.preventDefault();
  void navigateWithinSite(destination);
});

window.addEventListener("popstate", () => {
  void navigateWithinSite(new URL(window.location.href), { addHistory: false, restoreScroll: true });
});

window.addEventListener("scroll", () => {
  if (scrollStateFrame !== null) return;
  scrollStateFrame = window.requestAnimationFrame(() => {
    window.history.replaceState(
      Object.assign({}, window.history.state || {}, { scrollY: window.scrollY }),
      "",
      window.location.href,
    );
    scrollStateFrame = null;
  });
}, { passive: true });

setLanguage(requestedLanguage);
initializeMainContent();
houseAudio.play().catch((error) => {
  if (error.name !== "NotAllowedError") {
    console.error("Background music could not be started automatically.", error);
    soundToggle.querySelector(".sound-label").textContent = translations[currentLanguage].musicUnavailable;
  }
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  scrollObserver = new IntersectionObserver((entries, observer) => {
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
