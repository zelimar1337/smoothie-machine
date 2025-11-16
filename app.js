// form + output elements
const form = document.getElementById("smoothie-form");
const resetBtn = document.getElementById("btn-reset");

const summaryEl = document.getElementById("order-summary");
const priceEl = document.getElementById("order-price");
const descEl = document.getElementById("smoothie-description");
const specsEl = document.getElementById("smoothie-specs");
const imgEl = document.getElementById("smoothie-image");

// helper to get checked values
function getCheckedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(
    (n) => n.value
  );
}

// render smoothie to UI
function renderSmoothie(smoothie) {
  const key = smoothie.getProfileKey();
  const profile = SMOOTHIE_PROFILES[key];

  summaryEl.textContent = profile.name + ": " + smoothie.getSummary();
  priceEl.textContent = "Total: $" + smoothie.getPrice().toFixed(2);
  descEl.textContent = profile.description;

  // specs list
  specsEl.innerHTML = "";
  for (const label in profile.specs) {
    const dt = document.createElement("dt");
    dt.textContent = label;
    const dd = document.createElement("dd");
    dd.textContent = profile.specs[label];
    specsEl.appendChild(dt);
    specsEl.appendChild(dd);
  }

  // image
  imgEl.src = profile.image;
  imgEl.alt = profile.name;
  imgEl.hidden = false;
}

// form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // get form fields
  const smoothie = new Smoothie({
    size: form.elements["size"].value,
    base: form.elements["base"].value,
    ingredients: getCheckedValues("ingredients"),
    addons: getCheckedValues("addons"),
    sweetness: form.elements["sweetness"].value
  });

  renderSmoothie(smoothie);
});

// reset UI
resetBtn.addEventListener("click", () => {
  summaryEl.textContent = 'Fill the form and press "Order Smoothie".';
  priceEl.textContent = "";
  descEl.textContent = "";
  specsEl.innerHTML = "";
  imgEl.hidden = true;
});
