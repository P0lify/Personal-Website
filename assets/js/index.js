// Darkmod
var htmlTag = document.documentElement;
var toggleBtn = document.getElementById("theme-toggle-button");

var savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  htmlTag.classList.add("dark");
} else if (savedTheme === "light") {
  htmlTag.classList.remove("dark");
} else {
  htmlTag.classList.add("dark");
}

toggleBtn.addEventListener("click", function () {
  htmlTag.classList.toggle("dark");

  if (htmlTag.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
// Setting Toggle
var settingsToggle = document.getElementById("settings-toggle");
var settingsSidebar = document.getElementById("settings-sidebar");
var closeSettings = document.getElementById("close-settings");

settingsToggle.addEventListener("click", function () {
  if (settingsToggle.style.right === "20rem") {
    settingsToggle.style.right = "";
  } else {
    settingsToggle.style.right = "20rem";
  }
  settingsSidebar.classList.toggle("translate-x-full");
});

closeSettings.addEventListener("click", function () {
  settingsToggle.style.right = "";
  settingsSidebar.classList.add("translate-x-full");
});
//  Fonts
var fontAlex = document.querySelector('[data-font="alexandria"]');
var fontTajawal = document.querySelector('[data-font="tajawal"]');
var fontCairo = document.querySelector('[data-font="cairo"]');

function resetButtons() {
  fontAlex.classList.remove("active", "border-primary");
  fontAlex.classList.add("border-slate-200", "dark:border-slate-700");

  fontTajawal.classList.remove("active", "border-primary");
  fontTajawal.classList.add("border-slate-200", "dark:border-slate-700");

  fontCairo.classList.remove("active", "border-primary");
  fontCairo.classList.add("border-slate-200", "dark:border-slate-700");

  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo",
  );
}

var savedFont = localStorage.getItem("selectedFont");

function setFont(fontName, buttonElement) {
  resetButtons();

  buttonElement.classList.add("active", "border-primary");
  buttonElement.classList.remove("border-slate-200", "dark:border-slate-700");
  document.body.classList.add("font-" + fontName);

  localStorage.setItem("selectedFont", fontName);
}

fontAlex.addEventListener("click", function () {
  setFont("alexandria", fontAlex);
});

fontTajawal.addEventListener("click", function () {
  setFont("tajawal", fontTajawal);
});

fontCairo.addEventListener("click", function () {
  setFont("cairo", fontCairo);
});

if (savedFont === "alexandria") {
  setFont("alexandria", fontAlex);
} else if (savedFont === "tajawal") {
  setFont("tajawal", fontTajawal);
} else if (savedFont === "cairo") {
  setFont("cairo", fontCairo);
} else {
  setFont("tajawal", fontTajawal);
}
// Colors
var purpleBlue = document.querySelector('[title="Purple Blue"]');
var pinkOrange = document.querySelector('[title="Pink Orange"]');
var greenEmerald = document.querySelector('[title="Green Emerald"]');
var blueCyan = document.querySelector('[title="Blue Cyan"]');
var redRose = document.querySelector('[title="Red Rose"]');
var amberOrange = document.querySelector('[title="Amber Orange"]');

function resetColors() {
  [
    purpleBlue,
    pinkOrange,
    greenEmerald,
    blueCyan,
    redRose,
    amberOrange,
  ].forEach(function (colorBtn) {
    if (colorBtn) {
      colorBtn.classList.remove(
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900",
      );
    }
  });
  htmlTag.style = "";
}

var savedColor = localStorage.getItem("selectedColor");

function setColor(color, colorElement, colorName) {
  resetColors();
  colorElement.classList.add(
    "ring-2",
    "ring-primary",
    "ring-offset-2",
    "ring-offset-white",
    "dark:ring-offset-slate-900",
  );
  htmlTag.style = color;

  localStorage.setItem("selectedColor", colorName);
}

purpleBlue.addEventListener("click", function () {
  setColor(
    "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;",
    purpleBlue,
    "purpleBlue",
  );
});

pinkOrange.addEventListener("click", function () {
  setColor(
    "--color-primary: #ec4899; --color-secondary: #f97316; --color-accent: #fb923c;",
    pinkOrange,
    "pinkOrange",
  );
});

greenEmerald.addEventListener("click", function () {
  setColor(
    "--color-primary: #10b981; --color-secondary: #059669; --color-accent: #34d399;",
    greenEmerald,
    "greenEmerald",
  );
});

blueCyan.addEventListener("click", function () {
  setColor(
    "--color-primary: #06b6d4; --color-secondary: #0284c7; --color-accent: #38bdf8;",
    blueCyan,
    "blueCyan",
  );
});

redRose.addEventListener("click", function () {
  setColor(
    "--color-primary: #f43f5e; --color-secondary: #e11d48; --color-accent: #fb7185;",
    redRose,
    "redRose",
  );
});

amberOrange.addEventListener("click", function () {
  setColor(
    "--color-primary: #f59e0b; --color-secondary: #d97706; --color-accent: #fbbf24;",
    amberOrange,
    "amberOrange",
  );
});

if (savedColor === "purpleBlue") {
  setColor(
    "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;",
    purpleBlue,
    "purpleBlue",
  );
} else if (savedColor === "pinkOrange") {
  setColor(
    "--color-primary: #ec4899; --color-secondary: #f97316; --color-accent: #fb923c;",
    pinkOrange,
    "pinkOrange",
  );
} else if (savedColor === "greenEmerald") {
  setColor(
    "--color-primary: #10b981; --color-secondary: #059669; --color-accent: #34d399;",
    greenEmerald,
    "greenEmerald",
  );
} else if (savedColor === "blueCyan") {
  setColor(
    "--color-primary: #06b6d4; --color-secondary: #0284c7; --color-accent: #38bdf8;",
    blueCyan,
    "blueCyan",
  );
} else if (savedColor === "redRose") {
  setColor(
    "--color-primary: #f43f5e; --color-secondary: #e11d48; --color-accent: #fb7185;",
    redRose,
    "redRose",
  );
} else if (savedColor === "amberOrange") {
  setColor(
    "--color-primary: #f59e0b; --color-secondary: #d97706; --color-accent: #fbbf24;",
    amberOrange,
    "amberOrange",
  );
} else {
  setColor(
    "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;",
    purpleBlue,
    "purpleBlue",
  );
}
// reset Settings
var resetSettings = document.getElementById("reset-settings");

resetSettings.addEventListener("click", function () {
  setFont("tajawal", fontTajawal);
  setColor(
    "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;",
    purpleBlue,
    "purpleBlue",
  );
});
// portfolio Filters
var filterButtons = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");

var filterAll = document.querySelector('[data-filter="all"]');
var filterWeb = document.querySelector('[data-filter="web"]');
var filterApp = document.querySelector('[data-filter="app"]');
var filterDesign = document.querySelector('[data-filter="design"]');
var filterEcommerce = document.querySelector('[data-filter="ecommerce"]');

var categoryWeb = document.querySelectorAll('[data-category="web"]');
var categoryApp = document.querySelectorAll('[data-category="app"]');
var categoryDesign = document.querySelectorAll('[data-category="design"]');
var categoryEcommerce = document.querySelectorAll(
  '[data-category="ecommerce"]',
);

function resetFilter() {
  filterButtons.forEach((button) => {
    button.classList.add(
      "hover:bg-slate-100",
      "dark:hover:bg-slate-700",
      "bg-white",
      "dark:bg-slate-800",
      "text-slate-600",
      "dark:text-slate-300",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );
    button.classList.remove(
      "active",
      "hover:shadow-lg",
      "hover:shadow-primary/50",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
      "shadow-lg",
      "shadow-primary/50",
    );
    button.setAttribute("aria-pressed", "false");
  });
  portfolioItems.forEach((item) => {
    item.classList.remove("block");
    item.classList.add("hidden");
  });
}

function setFilter(filter, category) {
  resetFilter();
  filter.classList.add(
    "active",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
    "bg-linear-to-r",
    "from-primary",
    "to-secondary",
    "text-white",
    "shadow-lg",
    "shadow-primary/50",
  );
  filter.classList.remove(
    "hover:bg-slate-100",
    "dark:hover:bg-slate-700",
    "bg-white",
    "dark:bg-slate-800",
    "text-slate-600",
    "dark:text-slate-300",
    "border",
    "border-slate-300",
    "dark:border-slate-700",
  );
  filter.setAttribute("aria-pressed", "true");

  category.forEach((item) => {
    item.classList.add("block");
    item.classList.remove("hidden");
  });
}

filterAll.addEventListener("click", function () {
  setFilter(filterAll, portfolioItems);
});
filterWeb.addEventListener("click", function () {
  setFilter(filterWeb, categoryWeb);
});
filterApp.addEventListener("click", function () {
  setFilter(filterApp, categoryApp);
});
filterDesign.addEventListener("click", function () {
  setFilter(filterDesign, categoryDesign);
});
filterEcommerce.addEventListener("click", function () {
  setFilter(filterEcommerce, categoryEcommerce);
});
// testimonials Carousel
var testimonialsCarousel = document.getElementById("testimonials-carousel");

var carouselIndicator = document.querySelectorAll(".carousel-indicator");
var firstIndicator = document.querySelector('[data-index="0"]');
var secondIndicator = document.querySelector('[data-index="1"]');
var thirdIndicator = document.querySelector('[data-index="2"]');
var fouredIndicator = document.querySelector('[data-index="3"]');

function resetIndicators() {
  carouselIndicator.forEach((button) => {
    button.classList.add("bg-slate-400", "dark:bg-slate-600");
    button.classList.remove("active", "bg-accent", "scale-125");
  });
}
function setIndicator(indexIndicator) {
  resetIndicators();
  indexIndicator.classList.add("active", "bg-accent", "scale-125");
  indexIndicator.classList.remove("bg-slate-400", "dark:bg-slate-600");
}

firstIndicator.addEventListener("click", function () {
  setIndicator(firstIndicator);
  testimonialsCarousel.style === "transform: translateX(0%);";
});
secondIndicator.addEventListener("click", function () {
  setIndicator(secondIndicator);
  testimonialsCarousel.style === "transform: translateX(33.3333%);";
});
thirdIndicator.addEventListener("click", function () {
  setIndicator(thirdIndicator);
  testimonialsCarousel.style === "transform: translateX(66.6667%);";
});
fouredIndicator.addEventListener("click", function () {
  setIndicator(fouredIndicator);
  testimonialsCarousel.style === "transform: translateX(100%);";
});
// Next & Prev
var nextTestimonial = document.getElementById("next-testimonial");
var prevTestimonial = document.getElementById("prev-testimonial");

var currentIndex = 0;
var percentages = ["0%", "33.3333%", "66.6667%", "100%"];
var indicators = [
  firstIndicator,
  secondIndicator,
  thirdIndicator,
  fouredIndicator,
];

function goToSlide(index) {
  currentIndex = index;
  setIndicator(indicators[currentIndex]);
  testimonialsCarousel.style.transform =
    "translateX(" + percentages[currentIndex] + ")";
}

nextTestimonial.addEventListener("click", function () {
  if (currentIndex < percentages.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  goToSlide(currentIndex);
});

prevTestimonial.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = percentages.length - 1;
  }
  goToSlide(currentIndex);
});
// Form
var form = document.querySelector("form");

var fnameInput = document.getElementById("full-name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("project-details");
var errorMessage = document.querySelectorAll(".error-message");

var fname = fnameInput ? fnameInput.value.trim() : "";
var email = emailInput ? emailInput.value.trim() : "";
var message = messageInput ? messageInput.value.trim() : "";

form.addEventListener("submit", function (event) {
  if (fname === "" || email === "" || message === "") {
    event.preventDefault();

    errorMessage.forEach(function (msg) {
      msg.classList.remove("hidden");
      msg.classList.add("block");
    });
  }
});

var inputs = [fnameInput, emailInput, messageInput];

inputs.forEach(function (input) {
  if (input) {
    input.addEventListener("input", function () {
      errorMessage.forEach(function (msg) {
        msg.classList.add("hidden");
        msg.classList.remove("block");
      });
    });
  }
});
// Form Selectors
var customSelect = document.querySelectorAll(".custom-select");
var customOptions = document.querySelectorAll(".custom-options");

customSelect.forEach((select) => {
  select.addEventListener("click", function () {
    var currentOptions =
      select.querySelector(".custom-options") || select.nextElementSibling;

    customOptions.forEach((options) => {
      if (options !== currentOptions) {
        options.classList.add("hidden");
      }
    });

    if (currentOptions) {
      currentOptions.classList.toggle("hidden");
    }
  });
});
// Scroll To Top
var scrollTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove("invisible", "opacity-0");
    scrollTopBtn.classList.add("visible", "opacity-100");
  } else {
    scrollTopBtn.classList.remove("visible", "opacity-100");
    scrollTopBtn.classList.add("invisible", "opacity-0");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// Scroll Spy
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  sections.forEach(function (section) {
    if (scrollPosition >= section.offsetTop - 100) {
      var currentId = section.getAttribute("id");

      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      var activeLink = document.querySelector(
        'nav a[href="#' + currentId + '"]',
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});
