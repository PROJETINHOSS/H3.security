const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const counters = document.querySelectorAll("[data-counter]");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;
      const target = Number(element.dataset.counter);
      const duration = 1400;
      const start = performance.now();

      const updateCounter = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.round(progress * target);
        element.textContent = value;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
      counterObserver.unobserve(element);
    });
  },
  { threshold: 0.65 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const metricCards = document.querySelectorAll(".summary-metric-card");

if (metricCards.length > 0) {
  const closeMetricCards = (exceptCard) => {
    metricCards.forEach((card) => {
      if (card !== exceptCard) {
        card.classList.remove("is-open");
      }
    });
  };

  metricCards.forEach((card) => {
    const button = card.querySelector(".summary-help");

    if (!button) {
      return;
    }

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const willOpen = !card.classList.contains("is-open");
      closeMetricCards(card);
      card.classList.toggle("is-open", willOpen);
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".summary-metric-card")) {
      closeMetricCards();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMetricCards();
    }
  });
}

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const nav = document.querySelector(".nav");

console.log('Menu elements:', { mobileMenuToggle, mobileMenuClose, nav });

if (mobileMenuToggle && nav) {
  mobileMenuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('Toggle clicked');
    nav.classList.toggle("active");
  });

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", (e) => {
      e.preventDefault();
      console.log('Close clicked');
      nav.classList.remove("active");
    });
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav") && nav.classList.contains("active")) {
      console.log('Outside click');
      nav.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("active")) {
      console.log('Escape pressed');
      nav.classList.remove("active");
    }
  });
}
