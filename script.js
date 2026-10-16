const COMMUNITY_LINKS = {
  vrchat: "https://vrchat.com/home/groups",
  discord: "https://discord.com",
};

const translations = {
  en: {
    skip: "Skip to content",
    home: "The Continental, home",
    houseLabel: "VR SOCIAL HOUSE",
    navigation: "Main navigation",
    navDispatch: "Dispatch",
    navGatherings: "Gatherings",
    navAbout: "The people",
    navJoin: "Find your people",
    switchLanguage: "Switch language to Portuguese",
    playMusic: "Play background music",
    pauseMusic: "Pause background music",
    musicOff: "Play house music",
    musicOn: "Music is playing",
    musicUnavailable: "Background music could not be loaded",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
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
    coinTitle: "A little house coin lore",
    coinText: "A nod to the golden coin: around here, good company is the currency. No dues, no points — just a seat at the table.",
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
    navDispatch: "Novidades",
    navGatherings: "Encontros",
    navAbout: "A galera",
    navJoin: "Encontre sua turma",
    switchLanguage: "Mudar idioma para inglês",
    playMusic: "Tocar música de fundo",
    pauseMusic: "Pausar música de fundo",
    musicOff: "Tocar música da casa",
    musicOn: "Música tocando",
    musicUnavailable: "Não foi possível carregar a música de fundo",
    openMenu: "Abrir navegação",
    closeMenu: "Fechar navegação",
    heroEyebrow: "UM CONVITE DE PORTAS ABERTAS",
    heroSubEyebrow: "DESDE QUE O VR EXISTE",
    heroTitle: "Mais um pouco<br>depois <em>da hora.</em>",
    heroDescription: "Um ponto de encontro no VRChat para quem curte criar. Aprenda a personalizar avatares, compartilhe o que está fazendo, veja um filme ou fique para mais uma conversa.",
    heroCta: "Pode entrar",
    heroBrowse: "Veja o que está rolando",
    dressCode: "SE ARRUME. SEJA VOCÊ.",
    heroArtAlt: "Ilustração original da entrada de um hotel iluminado em dourado à noite",
    signTop: "UMA CASA ENTRE MUNDOS",
    signBottom: "SEMPRE CABE MAIS UM",
    artCaption: "DEPOIS DA HORA · GMT−3",
    artSideLabel: "SEU MUNDO, DO SEU JEITO",
    scrollExplore: "ROLE PARA EXPLORAR",
    tickerLabel: "Lema da comunidade",
    tickerOne: "BEM VESTIDO · GENTE BOA",
    tickerTwo: "DEPOIS DA MEIA-NOITE · GMT−3",
    tickerThree: "CRIAR É MELHOR EM GRUPO",
    tickerFour: "SEMPRE CABE MAIS UM",
    dispatchEyebrow: "DIRETO DO SAGUÃO",
    dispatchTitle: "O <em>boletim.</em>",
    moreFromHouse: "Entre na conversa",
    dispatchIntro: "Oficinas, arte, filmes e o que mais a noite trouxer.",
    filterLabel: "Filtrar novidades",
    filterAll: "Tudo",
    filterWorkshop: "Oficinas",
    filterArt: "Arte",
    filterMovies: "Noites de filme",
    filterNotes: "Recados da casa",
    catWorkshop: "OFICINA NA PRÁTICA",
    metaWorkshop: "OFICINA DE AVATARES",
    postWorkshopTitle: "Deixe seu avatar<br><em>com a sua cara.</em>",
    postWorkshopText: "Encontros descontraídos para aprender a personalizar avatares no VRChat. Traga seu projeto, tire dúvidas e aprenda no seu ritmo.",
    postWorkshopLink: "Aprender em grupo",
    catArt: "SALA DE ARTE",
    metaArt: "ARTE E MOSTRA DE TRABALHOS",
    artImageText: "CRIAR<br>JUNTOS<br>É MELHOR",
    postArtTitle: "Feito à mão.<br><em>Compartilhado com a galera.</em>",
    postArtText: "Desenho, arte digital, 2D, 3D e projetos em andamento. Puxe uma cadeira, mostre o que está fazendo ou curta a companhia no ateliê.",
    postArtLink: "Traga sua criatividade",
    catMovie: "SESSÃO DEPOIS DA HORA",
    metaMovie: "NOITE DE FILME",
    movieImageText: "LUZES<br>BAIXAS<br>FILME<br>ROLANDO",
    movieImageTag: "NOITE DE FILME",
    postMovieTitle: "Mais um filme.<br><em>Mais uma amizade.</em>",
    postMovieText: "Sente com a gente para assistir a um filme e ficar para o papo depois. Veja no Discord o que vai passar e como participar.",
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
    postDressText: "Se quiser, venha elegante: a nossa casa tem um toque sofisticado. Traga seu estilo, respeite todo mundo e sinta-se em casa.",
    postDressLink: "Conheça a casa",
    catLate: "SAGUÃO NOTURNO",
    metaLate: "PELA CASA",
    postLateTitle: "A noite vai<br><em>mais longe.</em>",
    postLateText: "A maioria dos encontros começa depois da meia-noite, no fuso GMT−3. Sem horário rígido: o saguão ganha vida quando chegam os notívagos.",
    postLateLink: "Encontre a gente de madrugada",
    gatheringEyebrow: "A NOITE É SUA",
    gatheringTitle: "Vamos fazer<br>da noite <em>um evento.</em>",
    gatheringText: "Oficinas de avatar, sessões de arte, noites de filme e espaço de sobra para uma conversa espontânea. Criamos juntos e vemos aonde a noite nos leva.",
    gatheringCta: "Veja o que está rolando",
    gatheringCardLabel: "O MURAL DA MADRUGADA",
    gatheringWhenLabel: "QUANDO O SAGUÃO GANHA VIDA",
    gatheringWhen: "DEPOIS DA MEIA-NOITE",
    gatheringTimezone: "GMT−3 · QUANDO OS NOTÍVAGOS CHEGAREM",
    gatheringCardTitle: "Sem agenda engessada.<br><em>Só gente boa.</em>",
    gatheringCardText: "Oficinas, arte compartilhada, filmes e boas desculpas para ficar acordado. Entre no Discord para saber os planos.",
    gatheringCardLink: "Confira o mural",
    coinTitle: "Uma história de moeda da casa",
    coinText: "Uma piscadinha para a moeda dourada: por aqui, boa companhia é a verdadeira moeda. Sem taxas ou pontos — só um lugar à mesa.",
    aboutEyebrow: "A GALERA POR TRÁS DO SAGUÃO",
    aboutTitle: "Horários estranhos.<br><em>Gente boa.</em>",
    aboutIntro: "Somos uma equipe pequena, cheia de interesses diferentes e com as portas sempre abertas. Pode puxar assunto sobre arte, avatares, aviação, idiomas ou qualquer outra coisa.",
    prickettRole: "ARTE · CÓDIGO · 2D / 3D",
    prickettBio: "Estudo graduação em Artes e TI: programo, desenho e crio em 2D e 3D. Falo inglês e português e estou aprendendo chinês e outros idiomas. Sou autista, tranquilo e adoro conversar sobre praticamente qualquer assunto.",
    prickettLink: "Encontre o Prickett online",
    nekuzuskaRole: "PROPRIETÁRIO · VIP",
    nekozuskaRole: "PROPRIETÁRIO · VIP",
    nekozuskaBio: "O dono da casa. Tranquilo, um pouco misterioso, VIP e conhecido por mudar de humor como o tempo. Vem dar oi; talvez encontre um capítulo diferente.",
    nekozuskaSignoff: "A CASA TEM SEUS MISTÉRIOS.",
    succubiRole: "CONVÉS DE VOO · AGENTE 007",
    succubiBio: "Agente 007 sad boy autoproclamado: zero falhas, zero risco e 7 mil horas no simulador de voo. Histórias de aviação, confiança questionável e boa companhia inclusas.",
    succubiSignoff: "0 FALHAS · 0 RISCO · 7 MIL HORAS",
    communityEyebrow: "SUA GALERA ESTÁ AQUI",
    communityTitle: "As portas estão <em>abertas.</em>",
    communityDescription: "Encontre o grupo no VRChat. Veja os planos no Discord.<br>Tem lugar para você na mesa.",
    vrchatButton: "Encontre a gente no VRChat",
    discordButton: "Entre no Discord",
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

let currentLanguage = "en";
const languageToggle = document.querySelector(".language-toggle");
const pageDescription = document.querySelector('meta[name="description"]');

function setLanguage(language) {
  const dictionary = translations[language];
  if (!dictionary) {
    throw new Error(`Unsupported language "${language}".`);
  }

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = language === "pt"
    ? "The Continental — Espaço Social de Madrugada"
    : "The Continental — After-hours Social House";
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
  updateMusicLabel();
  updateMenuLabel();
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

setLanguage(currentLanguage);
houseAudio.play().catch((error) => {
  if (error.name !== "NotAllowedError") {
    console.error("Background music could not be started automatically.", error);
    soundToggle.querySelector(".sound-label").textContent = translations[currentLanguage].musicUnavailable;
  }
});
