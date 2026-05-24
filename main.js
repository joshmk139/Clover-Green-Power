/** Clover Green Power — Main JavaScript */

(function () {
  "use strict";

  const currentPage = document.body.dataset.page || "home";

  function showFieldError(el, message) {
    if (!el) return;
    if (message) el.textContent = message;
    el.classList.add("is-visible");
  }

  function hideFieldError(el) {
    if (!el) return;
    el.classList.remove("is-visible");
  }

  function setRevealDelay(el, ms) {
    el.style.setProperty("--reveal-delay", String(ms));
  }

  function renderNavbar() {
    const header = document.getElementById("site-header");
    if (!header) return;

    const links = NAV_LINKS.map(
      (l) =>
        `<li><a href="${l.href}" class="${l.page === currentPage ? "active" : ""}">${l.label}</a></li>`
    ).join("");

    const mobileLinks = NAV_LINKS.map(
      (l) =>
        `<li><a href="${l.href}" class="${l.page === currentPage ? "active" : ""}">${l.label}</a></li>`
    ).join("");

    header.innerHTML = `
      <div class="container nav-inner">
        <a href="index.html" class="logo">
          <span class="logo-icon"><i data-lucide="leaf"></i></span>
          <span class="logo-text">${SITE.name}</span>
        </a>
        <ul class="nav-links">${links}</ul>
        <div class="nav-cta"><a href="investment.html" class="btn-primary">Invest With Us</a></div>
        <button type="button" class="menu-toggle" aria-label="Open menu" aria-expanded="false" id="menu-toggle">
          <i data-lucide="menu" id="menu-icon"></i>
        </button>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        <ul>${mobileLinks}
          <li class="mobile-menu-cta"><a href="investment.html" class="btn-primary">Invest With Us</a></li>
        </ul>
      </div>`;

  }

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;

    const quickLinks = NAV_LINKS.map(
      (l) =>
        `<li><a href="${l.href}">${l.label}</a></li>`
    ).join("");

    el.innerHTML = `
      <div class="energy-grid-bg footer-ambient" aria-hidden="true"></div>
      <div class="container section-padding footer-inner">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="logo">
              <span class="logo-icon"><i data-lucide="leaf"></i></span>
              <span class="logo-text">${SITE.name}</span>
            </a>
            <p class="mt-4 footer-desc">
              Building Nigeria's renewable energy future through solar, hydro, wind, biodegradable energy, and smart grid innovation.
            </p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i data-lucide="twitter"></i></a>
              <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
            </div>
          </div>
          <div>
            <h3 class="font-display footer-title">Quick Links</h3>
            <ul class="mt-4 footer-links">${quickLinks}</ul>
          </div>
          <div>
            <h3 class="font-display footer-title">Contact</h3>
            <ul class="mt-4 footer-contact">
              <li class="flex items-start gap-2"><i data-lucide="map-pin" class="footer-icon footer-icon--offset" aria-hidden="true"></i>${SITE.address}</li>
              <li class="flex items-center gap-2"><i data-lucide="phone" class="footer-icon" aria-hidden="true"></i>${SITE.phone}</li>
              <li class="flex items-center gap-2"><i data-lucide="mail" class="footer-icon" aria-hidden="true"></i><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-display footer-title">Newsletter</h3>
            <p class="mt-4 footer-newsletter-text">Stay updated on projects, impact, and investment opportunities.</p>
            <form id="newsletter-form" class="mt-4 footer-newsletter-form">
              <input type="email" class="input-field" placeholder="Your email" aria-label="Email for newsletter" required />
              <button type="submit" class="btn-primary footer-newsletter-btn">Subscribe</button>
            </form>
            <p id="newsletter-msg" role="status" aria-live="polite"></p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p>
          <p>Powering Nigeria sustainably.</p>
        </div>
      </div>`;

  }

  function initNavbar() {
    const header = document.getElementById("site-header");
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }, { passive: true });

    if (toggle && menu) {
      const closeMenu = () => {
        menu.classList.remove("open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        const icon = toggle.querySelector("i");
        if (icon) icon.setAttribute("data-lucide", "menu");
        if (typeof lucide !== "undefined") lucide.createIcons();
      };

      toggle.addEventListener("click", () => {
        const open = !menu.classList.contains("open");
        menu.classList.toggle("open", open);
        document.body.classList.toggle("nav-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        const icon = toggle.querySelector("i");
        if (icon) icon.setAttribute("data-lucide", open ? "x" : "menu");
        if (typeof lucide !== "undefined") lucide.createIcons();
      });

      menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) closeMenu();
      });
    }
  }

  function initNewsletter() {
    const form = document.getElementById("newsletter-form");
    const msg = document.getElementById("newsletter-msg");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      msg.classList.remove("is-success", "is-error");
      msg.classList.add("is-visible", valid ? "is-success" : "is-error");
      msg.textContent = valid
        ? "Thank you for subscribing!"
        : "Please enter a valid email.";
      if (valid) form.reset();
      setTimeout(() => {
        msg.classList.remove("is-visible", "is-success", "is-error");
      }, 4000);
    });
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function initPageLoad() {
    requestAnimationFrame(() => {
      document.body.classList.add("is-ready");
    });
  }

  function applyStaggerDelays() {
    const groups = [
      { parent: ".hero-content", child: ":scope > .reveal", step: 100 },
      { parent: ".stats-grid", child: ".stat-card", step: 90 },
      { parent: ".grid-2", child: ".reveal", step: 80 },
      { parent: ".grid-3", child: ".reveal", step: 80 },
      { parent: ".grid-4", child: ".reveal", step: 70 },
      { parent: ".grid-5", child: ".reveal", step: 65 },
      { parent: ".tech-grid", child: ".tech-card", step: 70 },
      { parent: ".tiers-grid", child: ".tier-card", step: 100 },
      { parent: ".timeline", child: ".timeline-item", step: 120 },
    ];

    groups.forEach(({ parent, child, step }) => {
      document.querySelectorAll(parent).forEach((container) => {
        container.querySelectorAll(child).forEach((el, index) => {
          if (!el.classList.contains("reveal")) el.classList.add("reveal");
          const custom = el.dataset.delay;
          const delay = custom ? parseInt(custom, 10) : index * step;
          setRevealDelay(el, delay);
        });
      });
    });
  }

  function enhanceRevealTargets() {
    document.querySelectorAll(".section-heading").forEach((el) => {
      if (!el.classList.contains("reveal")) {
        el.classList.add("reveal", "reveal-fade");
      }
    });

    document.querySelectorAll(".founders-story > .reveal:first-child").forEach((el) => {
      el.classList.add("reveal-left");
    });

    document.querySelectorAll(".founders-story .story-image").forEach((el) => {
      if (!el.classList.contains("reveal")) el.classList.add("reveal", "reveal-right");
    });

    document.querySelectorAll(".investor-teaser").forEach((el) => {
      if (!el.classList.contains("reveal")) el.classList.add("reveal", "reveal-scale");
    });
  }

  function initHeroEntrance() {
    const hero = document.querySelector(".hero");
    if (!hero || prefersReducedMotion()) return;

    hero.querySelectorAll(".hero-content > .reveal").forEach((el, index) => {
      setTimeout(() => el.classList.add("visible"), 120 + index * 110);
    });

    const hint = hero.querySelector(".scroll-hint");
    if (hint) setTimeout(() => hint.classList.add("is-visible"), 700);

    const wave = hero.querySelector(".section-wave-top");
    if (wave) setTimeout(() => wave.classList.add("is-visible"), 500);
  }

  function initReveal() {
    enhanceRevealTargets();
    applyStaggerDelays();

    if (prefersReducedMotion()) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      document.querySelectorAll(".scroll-hint").forEach((el) => el.classList.add("is-visible"));
      document.querySelectorAll(".section-wave-top").forEach((el) => el.classList.add("is-visible"));
      return;
    }

    initHeroEntrance();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      if (el.parentElement?.classList.contains("hero-content")) return;
      observer.observe(el);
    });

    document.querySelectorAll(".section-wave-top").forEach((el) => {
      observer.observe(el);
    });
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.value);
    const suffix = el.dataset.suffix || "";
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const duration = 2000;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent =
        (decimals ? current.toFixed(decimals) : Math.floor(current).toLocaleString()) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("[data-counter]").forEach((el) => observer.observe(el));
  }

  function initCharts() {
    const reduced = prefersReducedMotion();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;

          if (el.classList.contains("chart-bar")) {
            const height = el.dataset.height || "8px";
            if (reduced) {
              el.style.setProperty("--bar-height", height);
            } else {
              requestAnimationFrame(() => {
                el.style.setProperty("--bar-height", height);
              });
            }
          }
          if (el.classList.contains("progress-bar-fill") || el.classList.contains("esg-bar-fill")) {
            const width = el.dataset.width || "0%";
            if (reduced) {
              el.style.setProperty("--fill-width", width);
            } else {
              requestAnimationFrame(() => {
                el.style.setProperty("--fill-width", width);
              });
            }
          }
          observer.unobserve(el);
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".chart-bar, .progress-bar-fill, .esg-bar-fill").forEach((el, i) => {
      if (!reduced && el.classList.contains("chart-bar")) {
        el.style.setProperty("--anim-delay", String(i * 80));
      }
      observer.observe(el);
    });
  }

  function initFAQ() {
    document.querySelectorAll(".faq-item").forEach((item) => {
      const btn = item.querySelector(".faq-question");
      btn.addEventListener("click", () => {
        const wasOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
        if (!wasOpen) item.classList.add("open");
      });
    });
    const first = document.querySelector(".faq-item");
    if (first) first.classList.add("open");
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fields = ["name", "email", "phone", "subject", "message"];
      let valid = true;

      fields.forEach((key) => {
        const input = form.querySelector(`[name="${key}"]`);
        const err = form.querySelector(`#${key}-error`);
        const val = input.value.trim();
        let msg = "";

        if (!val) msg = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        else if (key === "email" && !validateEmail(val)) msg = "Invalid email";
        else if (key === "message" && val.length < 10) msg = "Message must be at least 10 characters";

        if (msg) {
          valid = false;
          input.classList.add("error");
          showFieldError(err, msg);
        } else {
          input.classList.remove("error");
          hideFieldError(err);
        }
      });

      if (!valid) return;

      const btn = form.querySelector('button[type="submit"]');
      const success = document.getElementById("contact-success");
      btn.disabled = true;
      btn.textContent = "Sending...";

      await new Promise((r) => setTimeout(r, 1500));

      form.reset();
      btn.disabled = false;
      btn.innerHTML = 'Send Message <i data-lucide="send"></i>';
      if (success) {
        success.classList.add("show");
        setTimeout(() => success.classList.remove("show"), 5000);
      }
      if (typeof lucide !== "undefined") lucide.createIcons();
    });
  }

  function initInvestorForm() {
    const form = document.getElementById("investor-form-el");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const range = form.querySelector('[name="range"]');
      let valid = true;

      [[name, "Name is required"], [email, "Email is required"], [range, "Please select an investment range"]].forEach(
        ([input, reqMsg]) => {
          const err = form.querySelector(`#${input.name}-error`);
          if (!input.value.trim()) {
            valid = false;
            input.classList.add("error");
            showFieldError(err, reqMsg);
          } else if (input === email && !validateEmail(input.value)) {
            valid = false;
            input.classList.add("error");
            showFieldError(err, "Invalid email");
          } else {
            input.classList.remove("error");
            hideFieldError(err);
          }
        }
      );

      if (!valid) return;

      const btn = form.querySelector('button[type="submit"]');
      const success = document.getElementById("investor-success");
      btn.disabled = true;
      btn.textContent = "Submitting...";

      await new Promise((r) => setTimeout(r, 1500));

      form.reset();
      btn.disabled = false;
      btn.innerHTML = 'Submit Inquiry <i data-lucide="send"></i>';
      if (success) {
        success.classList.add("show");
        setTimeout(() => success.classList.remove("show"), 5000);
      }
      if (typeof lucide !== "undefined") lucide.createIcons();
    });
  }

  function initParticles() {
    document.querySelectorAll(".particles-canvas").forEach((canvas) => {
      const ctx = canvas.getContext("2d");
      const parent = canvas.parentElement;
      let particles = [];
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const defaultCount = isMobile ? 12 : 30;
      let count = parseInt(canvas.dataset.count || String(defaultCount), 10);
      if (isMobile) count = Math.min(count, 12);

      function resize() {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }

      function create() {
        particles = Array.from({ length: count }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          o: Math.random() * 0.5 + 0.2,
        }));
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.o * 0.85})`;
          ctx.fill();
          p.x += p.dx;
          p.y += p.dy;
          if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });
        requestAnimationFrame(draw);
      }

      resize();
      create();
      draw();
      window.addEventListener("resize", () => { resize(); create(); });
    });
  }

  function syncSiteContact() {
    const addr = document.querySelector("[data-site-address]");
    if (addr) addr.textContent = SITE.address;

    const phone = document.querySelector("[data-site-phone]");
    if (phone) phone.textContent = SITE.phone;

    const phoneAlt = document.querySelector("[data-site-phone-alt]");
    if (phoneAlt) phoneAlt.textContent = SITE.phoneAlt;

    const email = document.querySelector("[data-site-email]");
    if (email) {
      email.textContent = SITE.email;
      email.setAttribute("href", `mailto:${SITE.email}`);
    }
  }

  function init() {
    initPageLoad();
    renderNavbar();
    renderFooter();
    syncSiteContact();
    initNavbar();
    initNewsletter();
    initReveal();
    initCounters();
    initCharts();
    initFAQ();
    initContactForm();
    initInvestorForm();
    initParticles();

    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
