// Smoothie class used to build smoothie objects
class Smoothie {
  constructor(options) {
    // basic fields from the form
    this.size = options.size;
    this.base = options.base;
    this.ingredients = options.ingredients;
    this.addons = options.addons;
    this.sweetness = Number(options.sweetness);
  }

  // simple price calculation
  getPrice() {
    let total = 0;

    // size price
    if (this.size === "Small") total += 4;
    else if (this.size === "Medium") total += 4.75;
    else if (this.size === "Large") total += 5.5;

    // each ingredient adds cost
    total += this.ingredients.length * 0.7;

    // each addon adds cost
    total += this.addons.length * 0.5;

    // small sweetness boost
    if (this.sweetness >= 2) total += 0.25;

    return total;
  }

  // short summary for UI
  getSummary() {
    const ing = this.ingredients.length ? this.ingredients.join(", ") : "no ingredients";
    const add = this.addons.length ? this.addons.join(", ") : "no add-ons";

    return `${this.size} smoothie on ${this.base}. Ingredients: ${ing}. Add-ons: ${add}. Sweetness: ${this.sweetness}/3.`;
  }

  // choose which profile image + description to use
  getProfileKey() {
    const list = this.ingredients.map(i => i.toLowerCase());
    const extra = this.addons.map(a => a.toLowerCase());

    const tomatoStyle =
      list.includes("tomato") ||
      list.includes("bell pepper") ||
      extra.includes("garlic") ||
      extra.includes("cilantro") ||
      this.base === "Tomato juice";

    return tomatoStyle ? "tomatoDetox" : "greenDetox";
  }
}

// profiles with images + description
const SMOOTHIE_PROFILES = {
  greenDetox: {
    name: "Green Detox Smoothie",
    image: "assets/green-detox.jpg",
    description:
      "A light detox smoothie made with apple, cucumber, and celery. Refreshing and clean.",
    specs: {
      Category: "Detox / Green smoothie",
      "Main taste": "Apple, cucumber, celery",
      Texture: "Light",
      Calories: "≈ 48 kcal",
      "Best for": "Morning, post-workout, detox"
    }
  },

  tomatoDetox: {
    name: "Tomato Energy Smoothie",
    image: "assets/tomato-detox.jpg",
    description:
      "A savory vegetable-based smoothie with tomato, pepper, garlic, and herbs. Strong and energizing.",
    specs: {
      Category: "Detox / Savory smoothie",
      "Main taste": "Tomato, pepper, garlic, herbs",
      Texture: "Thick",
      Calories: "≈ 60 kcal",
      "Best for": "Salty drink lovers, snacks"
    }
  }
};
