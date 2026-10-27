/* Hidden terminal. Opens with the Konami code, the backtick key (like a game
   console) or three quick taps on the hero status pill. The terminal itself
   is a separate chunk, only downloaded when someone finds it. */

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let progress = 0;

const open = () => import('./terminal').then((m) => m.openTerminal());

const typing = (target: EventTarget | null) =>
  target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));

window.addEventListener('keydown', (e) => {
  if (typing(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;

  if (e.key === '`') {
    e.preventDefault();
    open();
    return;
  }

  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
  if (progress === KONAMI.length) {
    progress = 0;
    open();
  }
});

const pill = document.querySelector<HTMLElement>('.hero .pill');
if (pill) {
  let taps = 0;
  let reset: number | undefined;
  pill.addEventListener('click', () => {
    taps += 1;
    window.clearTimeout(reset);
    reset = window.setTimeout(() => (taps = 0), 600);
    if (taps === 3) {
      taps = 0;
      open();
    }
  });
}

console.log(
  '%c JD %c psst… try the Konami code, or press `',
  'background:currentColor;color:Canvas;font:700 14px monospace;padding:2px 6px;border-radius:3px',
  'font:13px monospace'
);
