const productTemplate = document.getElementById("product-card-template");
const updateTemplate = document.getElementById("update-card-template");
const productsGrid = document.getElementById("products-grid");
const updatesGrid = document.getElementById("updates-grid");
const filterButtons = document.querySelectorAll(".platform-filter");

function createPill(label, className) {
  const pill = document.createElement("span");
  pill.className = className;
  pill.textContent = label;
  return pill;
}

function createAction(action) {
  const link = document.createElement("a");
  const isDisabled = action.href === "#";
  const isExternal = /^https?:\/\//.test(action.href);

  link.className = `product-link${action.primary ? " product-link--primary" : ""}${
    isDisabled ? " product-link--disabled" : ""
  }`;
  link.href = action.href;
  link.textContent = action.label;

  if (isDisabled) {
    link.setAttribute("aria-disabled", "true");
  } else if (isExternal) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  return link;
}

function createNoteContent(parts) {
  const fragment = document.createDocumentFragment();

  parts.forEach((part) => {
    if (part.type === "link") {
      const link = document.createElement("a");
      link.href = part.href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = part.text;
      fragment.appendChild(link);
    } else {
      fragment.appendChild(document.createTextNode(part.text));
    }
  });

  return fragment;
}

function renderProducts() {
  const fragment = document.createDocumentFragment();

  rdUtilitiesData.products.forEach((product) => {
    const node = productTemplate.content.firstElementChild.cloneNode(true);

    node.dataset.filters = product.filterTags.join(" ");
    node.querySelector(".product-card__logo").src = product.logo;
    node.querySelector(".product-card__logo").alt = `${product.name} logo`;
    if (product.logoClass) {
      node.querySelector(".product-card__logo").classList.add(product.logoClass);
    }
    node.querySelector(".product-card__title").textContent = product.name;
    node.querySelector(".product-card__summary").textContent = product.summary;

    const note = node.querySelector(".product-card__note");
    if (product.noteParts) {
      note.appendChild(createNoteContent(product.noteParts));
      note.classList.add("is-visible");
    } else if (product.note) {
      note.textContent = product.note;
      note.classList.add("is-visible");
    }

    const meta = node.querySelector(".product-card__meta");
    meta.appendChild(createPill(product.category, "product-chip"));
    product.platforms.forEach((platform) => {
      meta.appendChild(createPill(platform, "platform-pill"));
    });

    const features = node.querySelector(".product-card__features");
    product.features.forEach((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      features.appendChild(item);
    });

    const tags = node.querySelector(".product-card__tags");
    product.filterTags.forEach((tag) => {
      tags.appendChild(createPill(tag.replace("-", " "), "product-chip"));
    });

    const actions = node.querySelector(".product-card__actions");
    product.actions.forEach((action, index) => {
      actions.appendChild(
        createAction({
          ...action,
          primary: index === 0
        })
      );
    });

    fragment.appendChild(node);
  });

  productsGrid.appendChild(fragment);
}

function renderUpdates() {
  const fragment = document.createDocumentFragment();

  rdUtilitiesData.updates.forEach((update) => {
    const node = updateTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".update-card__type").textContent = update.type;
    node.querySelector(".update-card__title").textContent = update.title;
    node.querySelector(".update-card__body").textContent = update.body;
    fragment.appendChild(node);
  });

  updatesGrid.appendChild(fragment);
}

function setFilter(activeFilter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === activeFilter);
  });

  document.querySelectorAll(".product-card").forEach((card) => {
    const filters = card.dataset.filters.split(" ");
    const showCard = activeFilter === "all" || filters.includes(activeFilter);
    card.classList.toggle("is-hidden", !showCard);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

renderProducts();
renderUpdates();
