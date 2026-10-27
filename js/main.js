(() => {
  const firstGroup = document.querySelector(".skills-marquee__group");

  if (!firstGroup) return;

  const skills = Array.from(firstGroup.children, (item) => item.textContent);

  for (let index = skills.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [skills[index], skills[randomIndex]] = [skills[randomIndex], skills[index]];
  }

  document.querySelectorAll(".skills-marquee__group").forEach((group) => {
    group.querySelectorAll(".skills-marquee__item").forEach((item, index) => {
      item.textContent = skills[index];
    });
  });
})();

(() => {
  const dialog = document.querySelector(".project-dialog");
  const title = document.querySelector("#project-dialog-title");
  const closeButton = document.querySelector(".project-dialog__close");
  const cardButtons = document.querySelectorAll(".project-card__trigger");

  if (
    typeof HTMLDialogElement === "undefined" ||
    !(dialog instanceof HTMLDialogElement) ||
    !title ||
    !closeButton
  ) {
    return;
  }

  cardButtons.forEach((button) => {
    button.disabled = false;
    button.addEventListener("click", () => {
      title.textContent = button.dataset.projectTitle || "Project details";
      document.documentElement.classList.add("project-dialog-open");
      dialog.showModal();
    });
  });

  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("project-dialog-open");
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("cancel", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();

(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  if (!toggle) return;

  const getTheme = () => {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const updateToggle = () => {
    const isDark = getTheme() === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");

    if (themeColor) {
      themeColor.setAttribute("content", isDark ? "#181d1a" : "#f5f3ee");
    }
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The theme still applies for the current session when storage is unavailable.
    }

    updateToggle();
  };

  toggle.addEventListener("click", () => {
    const nextTheme = getTheme() === "dark" ? "light" : "dark";

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      applyTheme(nextTheme);
      return;
    }

    const bounds = toggle.getBoundingClientRect();
    root.style.setProperty("--theme-transition-x", `${bounds.left + bounds.width / 2}px`);
    root.style.setProperty("--theme-transition-y", `${bounds.top + bounds.height / 2}px`);

    const transition = document.startViewTransition(() => applyTheme(nextTheme));
    const clearTransitionOrigin = () => {
      root.style.removeProperty("--theme-transition-x");
      root.style.removeProperty("--theme-transition-y");
    };

    transition.finished.then(clearTransitionOrigin, clearTransitionOrigin);
  });

  updateToggle();
})();

(() => {
  const timeElement = document.querySelector(".site-footer__time");

  if (!timeElement) return;

  const updateDhakaTime = () => {
    try {
      timeElement.textContent = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
    } catch {
      timeElement.textContent = "--:--";
    }
  };

  updateDhakaTime();
  window.setInterval(updateDhakaTime, 60_000);
})();

if ("serviceWorker" in navigator && window.isSecureContext) {
  const checkForUpdates = (registration) => {
    if (!navigator.onLine) return;

    registration.update().catch((error) => {
      if (navigator.onLine) {
        console.error("Offline support could not be updated:", error);
      }
    });
  };

  navigator.serviceWorker
    .register("./sw.js", { updateViaCache: "none" })
    .then((registration) => {
      checkForUpdates(registration);
      window.addEventListener("online", () => checkForUpdates(registration));
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          checkForUpdates(registration);
        }
      });
    })
    .catch((error) => {
      console.error("Offline support could not be enabled:", error);
    });
}
