 Features

Interactive smoothie builder

Smoothie constructor written in plain JavaScript

Dynamic rendering of smoothie details

Price calculation based on user selections

Clean, pastel UI design

Reset functionality

Fully responsive layout

Smoothie images (PNG format)

 Technologies Used

HTML5 — structure

CSS3 — layout and visual styling

JavaScript (ES6) — logic, constructor, rendering

Git & GitHub — version control and hosting

GitHub Pages — live deployment

 Smoothie Constructor

The project uses a dedicated JavaScript constructor:

class Smoothie {
  constructor(options) {
    this.size = options.size;
    this.base = options.base;
    this.ingredients = options.ingredients;
    this.addons = options.addons;
    this.sweetness = Number(options.sweetness);
  }
}


Additional methods handle:

total price calculation

summary generation

choosing between smoothie profiles

rendering smoothie details to the page

Project Structure
smoothie-machine/
  index.html
  styles.css
  smoothie.js
  app.js
  assets/
    green-detox.png
    tomato-detox.png

🚀 Live Demo (GitHub Pages)

https://zelimar1337.github.io/smoothie-machine/



How to Run Locally

Clone the repository:

git clone https://github.com/zelimar1337/smoothie-machine.git


Open index.html in any browser.

No dependencies — pure HTML/CSS/JS.
Progressive Git Commits

To match assignment requirements:

Added HTML layout

Added CSS theme

Created Smoothie constructor

Implemented form logic

Added rendering

Added PNG images

Final fixes

You can see the commit history in the repository.

👨‍🎓 Author

Arsen M.
Student, Georgian College — COMP1073
