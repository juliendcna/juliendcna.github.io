const { createApp, ref, computed, onMounted, watch } = Vue;

createApp({
    setup() {
        const data = ref({ en: {}, fr: {} });
        const currentLang = ref('en'); // Default to en, will detect later
        const isDarkMode = ref(false);
        const mobileMenuOpen = ref(false);
        const activeSection = ref('home');
        const activeResumeTab = ref('experience');
        const typewriterText = ref('');
        const scrolled = ref(false);

        // Typewriter effect
        let typeIndex = 0;
        let roleIndex = 0;
        let isDeleting = false;
        let typeTimeout = null;

        // Computed property for current translation
        const t = computed(() => {
            const langData = data.value[currentLang.value];
            // Ensure we have a valid structure even if data isn't fully loaded
            if (!langData || Object.keys(langData).length === 0) {
                 return {
                    nav: {},
                    hero: { roles: [] },
                    about: { stats: {} },
                    resume: { sections: [] },
                    contact: { items: [] },
                    footer: { links: [] }
                };
            }
            return langData;
        });

        const currentResumeSection = computed(() => {
            if (!t.value.resume || !t.value.resume.sections) return {};
            return t.value.resume.sections.find(s => s.id === activeResumeTab.value) || {};
        });

        // Load Data
        const loadData = async () => {
            try {
                const [enRes, frRes] = await Promise.all([
                    fetch('data/en.json'),
                    fetch('data/fr.json')
                ]);
                data.value.en = await enRes.json();
                data.value.fr = await frRes.json();

                // Initialize typewriter after data load
                typeWriter();
            } catch (e) {
                console.error("Error loading data:", e);
            }
        };

        // Language Detection
        const detectLanguage = () => {
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang && browserLang.startsWith('fr')) {
                currentLang.value = 'fr';
            } else {
                currentLang.value = 'en';
            }
        };

        const toggleLanguage = () => {
            currentLang.value = currentLang.value === 'en' ? 'fr' : 'en';
            // Reset typewriter to restart with new language roles
            clearTimeout(typeTimeout);
            typeIndex = 0;
            roleIndex = 0;
            isDeleting = false;
            typeWriter();
        };

        // Dark Mode
        const initDarkMode = () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                isDarkMode.value = true;
            }
            applyDarkMode();
        };

        const toggleDarkMode = () => {
            isDarkMode.value = !isDarkMode.value;
            applyDarkMode();
        };

        const applyDarkMode = () => {
            if (isDarkMode.value) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        // Typewriter Logic
        const typeWriter = () => {
            if (!t.value.hero || !t.value.hero.roles) return;
            const roles = t.value.hero.roles;
            if (!roles || roles.length === 0) return;

            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typewriterText.value = currentRole.substring(0, typeIndex - 1);
                typeIndex--;
            } else {
                typewriterText.value = currentRole.substring(0, typeIndex + 1);
                typeIndex++;
            }

            let typeSpeed = 100;
            if (isDeleting) typeSpeed /= 2;

            if (!isDeleting && typeIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && typeIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500;
            }

            typeTimeout = setTimeout(typeWriter, typeSpeed);
        };

        // Scroll Handler
        const handleScroll = () => {
            scrolled.value = window.scrollY > 50;

            // Active Section Detection
            const sections = ['home', 'about', 'resume', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        activeSection.value = section;
                    }
                }
            }
        };

        // Helper to parse HTML safely (simple version)
        const parseHtml = (html) => {
            return html; // In Vue, we use v-html, so this just returns the string
        };

        const getIconClass = (iconName) => {
            const map = {
                'map-pin': 'fas fa-map-marker-alt',
                'github': 'fab fa-github',
                'mail': 'fas fa-paper-plane',
                'linkedin': 'fab fa-linkedin-in'
            };
            return map[iconName] || 'fas fa-info-circle';
        };

        const alertCV = () => {
            alert(t.value.about.cv_button);
        };

        onMounted(() => {
            detectLanguage();
            loadData();
            initDarkMode();
            window.addEventListener('scroll', handleScroll);
            setTimeout(() => {
                 AOS.init({
                    duration: 800,
                    once: true,
                });
            }, 500); // Slight delay to ensure content is rendered
        });

        return {
            t,
            currentLang,
            isDarkMode,
            mobileMenuOpen,
            activeSection,
            activeResumeTab,
            typewriterText,
            scrolled,
            currentResumeSection,
            toggleLanguage,
            toggleDarkMode,
            parseHtml,
            getIconClass,
            alertCV
        };
    }
}).mount('#app');
