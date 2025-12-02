
class Translator {
  constructor() {
    this._lang = this.getLanguage();
    this._elements = document.querySelectorAll("[data-i18n]");
  }

  getLanguage() {
    var storedLang = localStorage.getItem("language");
    if (storedLang) {
      return storedLang;
    } else {
      var lang = navigator.language || navigator.userLanguage;
      if (lang.startsWith("fr")) {
        return "fr";
      } else if (lang.startsWith("es")) {
        return "es";
      } else {
        return "en";
      }
    }
  }

  setLanguage(lang) {
    this._lang = lang;
    localStorage.setItem("language", lang);
    this.translate();
    this.updateActiveLanguage(lang);
  }

  async translate() {
    try {
      const response = await fetch(`data/${this._lang}.json`);
      const translations = await response.json();
      this._translations = translations; // Store for later access
      this._elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[key]) {
          if (element.hasAttribute("data-i18n-target")) {
             const target = element.getAttribute("data-i18n-target");
             element.setAttribute(target, translations[key]);
          } else {
             if (key === 'hero_roles') {
                element.setAttribute('data-rotate', JSON.stringify(translations[key]));
             } else {
                element.innerHTML = translations[key];
             }
          }
        }
      });

      // Update TxtRotate
      if (translations['hero_roles'] && window.initTxtRotate) {
         window.initTxtRotate();
      }

    } catch (error) {
      console.error("Error loading translations:", error);
    }
  }

  getTranslation(key) {
    return this._translations && this._translations[key] ? this._translations[key] : key;
  }

  updateActiveLanguage(lang) {
    document.querySelectorAll('.lang-switch').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
  }

  init() {
    this.translate();
    this.updateActiveLanguage(this._lang);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const translator = new Translator();
  translator.init();

  // Expose to global scope so buttons can use it
  window.translator = translator;
});
