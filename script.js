const COMMUNITY_LINKS = {
  vrchat: "https://vrchat.com/home/groups",
  discord: "https://discord.com",
};

document.querySelectorAll("[data-community]").forEach((link) => {
  const destination = COMMUNITY_LINKS[link.dataset.community];
  if (!destination) {
    throw new Error(`Missing community destination for "${link.dataset.community}".`);
  }
  link.href = destination;
});

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

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.querySelector(".sr-only").textContent = isExpanded ? "Open navigation" : "Close navigation";
  siteNavigation.classList.toggle("is-open", !isExpanded);
});

siteNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && siteNavigation.classList.contains("is-open")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector(".sr-only").textContent = "Open navigation";
    siteNavigation.classList.remove("is-open");
  }
});
