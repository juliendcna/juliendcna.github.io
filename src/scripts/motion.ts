const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---- active section indicator in the nav ---- */
const trimSlash = (path: string) => path.replace(/\/+$/, '');
const anchorNav = document.querySelector<HTMLElement>('.anchors');
const ink = anchorNav?.querySelector<HTMLElement>('.nav-ink');
const links = anchorNav
  ? [...anchorNav.querySelectorAll<HTMLAnchorElement>('a[href*="#"]')].filter((a) => trimSlash(a.pathname) === trimSlash(location.pathname))
  : [];

if (anchorNav && ink && links.length) {
  const sections = links
    .map((link) => document.querySelector<HTMLElement>(link.hash))
    .filter((el): el is HTMLElement => el !== null);
  const visible = new Set<Element>();

  const moveInk = () => {
    const current = sections.find((s) => visible.has(s));
    const link = current ? links.find((l) => l.hash === `#${current.id}`) : undefined;
    links.forEach((l) => l.classList.toggle('active', l === link));
    if (!link) {
      ink.style.setProperty('--ink-o', '0');
      return;
    }
    ink.style.setProperty('--ink-x', `${link.offsetLeft}px`);
    ink.style.setProperty('--ink-w', `${link.offsetWidth}px`);
    ink.style.setProperty('--ink-o', '1');
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      moveInk();
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((s) => io.observe(s));
  window.addEventListener('resize', moveInk);
}

/* ---- reading progress bar under the header ---- */
const progress = document.querySelector<HTMLElement>('.scroll-progress');

if (progress) {
  let queued = false;
  const update = () => {
    queued = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty('--progress', max > 0 ? (window.scrollY / max).toFixed(4) : '0');
  };
  const queue = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', queue, { passive: true });
  // no initial read: the bar starts empty, and a restored scroll position fires a scroll event
  window.addEventListener('resize', queue);
}

if (!reduced) {
  /* ---- hero: name lines drift at different depths while scrolling ---- */
  const layers = [...document.querySelectorAll<HTMLElement>('[data-depth]')];
  const hero = document.querySelector<HTMLElement>('.hero');
  let ticking = false;

  const parallax = () => {
    ticking = false;
    const y = window.scrollY;
    if (hero && y > hero.offsetHeight) return;
    layers.forEach((el) => {
      el.style.translate = `0 ${(y * Number(el.dataset.depth)).toFixed(1)}px`;
    });
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(parallax);
      }
    },
    { passive: true }
  );

  if (finePointer) {
    /* ---- hero: the glow eases toward the cursor ---- */
    if (hero) {
      let tx = 82;
      let ty = -10;
      let x = tx;
      let y = ty;
      let raf = 0;

      const ease = () => {
        x += (tx - x) * 0.08;
        y += (ty - y) * 0.08;
        hero.style.setProperty('--glow-x', `${x.toFixed(2)}%`);
        hero.style.setProperty('--glow-y', `${y.toFixed(2)}%`);
        raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.05 ? requestAnimationFrame(ease) : 0;
      };

      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        tx = ((e.clientX - r.left) / r.width) * 100;
        ty = ((e.clientY - r.top) / r.height) * 100 - 20;
        if (!raf) raf = requestAnimationFrame(ease);
      });

      hero.addEventListener('pointerleave', () => {
        tx = 82;
        ty = -10;
        if (!raf) raf = requestAnimationFrame(ease);
      });
    }

    /* ---- magnetic buttons ---- */
    document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
      const pull = 0.3;
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mag-x', `${((e.clientX - r.left - r.width / 2) * pull).toFixed(1)}px`);
        el.style.setProperty('--mag-y', `${((e.clientY - r.top - r.height / 2) * pull).toFixed(1)}px`);
      });
      el.addEventListener('pointerleave', () => {
        el.style.setProperty('--mag-x', '0px');
        el.style.setProperty('--mag-y', '0px');
      });
    });
  }
}
