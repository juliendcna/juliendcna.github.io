import en from '../i18n/en';

const STYLE = `
.egg{position:fixed;inset:0;z-index:200;display:grid;place-items:center;padding:1rem;background:color-mix(in srgb,var(--night) 55%,transparent);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);animation:egg-fade .25s ease both}
.egg-win{width:min(46rem,100%);height:min(30rem,85svh);display:flex;flex-direction:column;background:var(--night-raised);border:1px solid var(--hairline);border-radius:8px;box-shadow:0 30px 80px -20px color-mix(in srgb,var(--glacial) 35%,transparent);overflow:hidden;font-family:var(--font-mono);font-size:.8125rem;line-height:1.6;animation:egg-pop .35s cubic-bezier(.22,1,.36,1) both}
.egg-bar{display:flex;align-items:center;gap:.45rem;padding:.6rem .85rem;border-bottom:1px solid var(--hairline-faint);color:var(--dim);font-size:.75rem}
.egg-bar i{width:11px;height:11px;border-radius:50%;background:var(--hairline)}
.egg-bar i:first-child{background:#ff5f57;cursor:pointer}
.egg-bar span{margin-left:auto;margin-right:auto;transform:translateX(-1.5rem)}
.egg-out{flex:1;overflow-y:auto;padding:.9rem 1rem;color:var(--bone);white-space:pre-wrap;word-break:break-word}
.egg-out .p{color:var(--glacial)}
.egg-out .d{color:var(--dim)}
.egg-out .ok{color:var(--status)}
.egg-out .err{color:#ff6b6b}
.egg-out a{color:var(--glacial);text-decoration:underline}
.egg-in{display:flex;gap:.6rem;padding:.7rem 1rem;border-top:1px solid var(--hairline-faint)}
.egg-in label{color:var(--glacial);white-space:nowrap}
.egg-in input{flex:1;min-width:0;background:none;border:0;outline:0;color:var(--bone);font:inherit;caret-color:var(--glacial)}
.egg.shake .egg-win{animation:egg-shake .4s linear}
@keyframes egg-fade{from{opacity:0}}
@keyframes egg-pop{from{opacity:0;transform:translateY(18px) scale(.97)}}
@keyframes egg-shake{20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}
@media (prefers-reduced-motion:reduce){.egg,.egg-win,.egg.shake .egg-win{animation:none}}
`;

const PROMPT = 'guest@dacunha.ovh:~$';
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);
const pad = (s: string, n: number) => s + ' '.repeat(Math.max(1, n - s.length));

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const pods = en.skills.groups.flatMap((g) => g.items.map((i) => ({ name: slug(i.label), ns: slug(g.name) })));

const FILES: Record<string, string> = {
  'about.txt': en.about.body,
  'experience.log': en.experience.items.map((i) => `[${i.dates}] ${i.title} @ ${i.org}`).join('\n'),
  'certs.yaml': en.certifications.items.map((c) => `- name: ${c.title}\n  year: ${c.year}`).join('\n'),
};

type Out = string | Promise<string>;

const commands: Record<string, { help: string; run: (args: string[]) => Out }> = {
  help: {
    help: 'list commands',
    run: () =>
      Object.entries(commands)
        .filter(([, c]) => c.help)
        .map(([name, c]) => `  <span class="p">${pad(name, 14)}</span>${c.help}`)
        .join('\n'),
  },
  whoami: { help: 'who runs this place', run: () => `Julien Da Cunha — ${en.experience.items[0]!.title} @ ${en.experience.items[0]!.org}\n<span class="d">${en.hero.statusLocation}</span>` },
  ls: { help: 'list files', run: () => Object.keys(FILES).map((f) => `<span class="p">${f}</span>`).join('   ') + '   contact.sh' },
  cat: {
    help: 'read a file (cat about.txt)',
    run: ([f]) => (f && FILES[f] ? esc(FILES[f]!) : `<span class="err">cat: ${esc(f ?? '')}: No such file or directory</span>`),
  },
  kubectl: {
    help: 'kubectl get pods',
    run: ([verb, what]) => {
      if (verb !== 'get' || !what?.startsWith('po')) return '<span class="d">try: kubectl get pods</span>';
      const w = Math.max(...pods.map((p) => p.name.length)) + 3;
      const rows = pods.map(
        (p) => `${pad(p.name, w)}<span class="ok">1/1     Running</span>   0          ${pad(p.ns, 0)}`
      );
      return `<span class="d">${pad('NAME', w)}READY   STATUS    RESTARTS   NAMESPACE</span>\n${rows.join('\n')}`;
    },
  },
  terraform: {
    help: 'terraform plan',
    run: ([verb]) =>
      verb === 'plan'
        ? `<span class="d">Refreshing state...</span>\n\n  <span class="ok">+ resource "collaboration" "you_and_julien" {</span>\n      <span class="ok">+ channel = "julien@dacunha.ovh"</span>\n      <span class="ok">+ outcome = (known after apply)</span>\n    }\n\nPlan: <span class="ok">1 to add</span>, 0 to change, 0 to destroy.\n<span class="d">Run "terraform apply" to make it happen.</span>`
        : verb === 'apply'
          ? (location.assign('mailto:julien@dacunha.ovh?subject=terraform%20apply'), '<span class="ok">Apply complete! Opening your mail client…</span>')
          : '<span class="d">try: terraform plan</span>',
  },
  uptime: { help: 'lab status', run: () => `up 100% · <a href="https://status.dacunha.ovh/" target="_blank" rel="noopener">status.dacunha.ovh</a>` },
  palette: {
    help: 'switch the color combo',
    run: () => {
      document.querySelector<HTMLButtonElement>('.combo-toggle')?.click();
      return `<span class="ok">palette → ${document.documentElement.dataset.combo}</span>`;
    },
  },
  'contact.sh': { help: '', run: () => commands.contact!.run([]) },
  contact: {
    help: 'get in touch',
    run: () => {
      location.assign('mailto:julien@dacunha.ovh');
      return 'Opening your mail client… or reach me on <a href="https://www.linkedin.com/in/julien-da-cunha" target="_blank" rel="noopener">LinkedIn</a>';
    },
  },
  sudo: {
    help: '',
    run: (args) => {
      const box = document.querySelector('.egg');
      box?.classList.remove('shake');
      requestAnimationFrame(() => box?.classList.add('shake'));
      return args.join(' ').includes('rm -rf')
        ? '<span class="err">Nice try. This incident will be reported.</span>\n<span class="d">(it won\'t. but production is fine, thanks for checking 🙃)</span>'
        : '<span class="err">guest is not in the sudoers file.</span>';
    },
  },
  ping: { help: '', run: () => '64 bytes from dacunha.ovh: icmp_seq=1 ttl=64 time=0.42 ms\n<span class="d">pong. I usually answer emails faster.</span>' },
  exit: { help: 'close the terminal', run: () => (close(), '') },
  clear: { help: 'clear the screen', run: () => ((out.innerHTML = ''), '') },
};

let root: HTMLDivElement | null = null;
let out: HTMLDivElement;
let input: HTMLInputElement;
let lastFocus: Element | null = null;
const history: string[] = [];
let cursor = 0;

const print = (html: string) => {
  if (!html) return;
  const line = document.createElement('div');
  line.innerHTML = html;
  out.append(line);
  out.scrollTop = out.scrollHeight;
};

const run = async (raw: string) => {
  const line = raw.trim();
  print(`<span class="p">${PROMPT}</span> ${esc(line)}`);
  if (!line) return;
  history.push(line);
  cursor = history.length;
  const [name, ...args] = line.split(/\s+/);
  const cmd = commands[name!.toLowerCase()];
  print(cmd ? await cmd.run(args) : `<span class="err">command not found: ${esc(name!)}</span> <span class="d">— try "help"</span>`);
};

function close() {
  root?.remove();
  root = null;
  if (lastFocus instanceof HTMLElement) lastFocus.focus();
}

export function openTerminal() {
  if (root) return input.focus();
  if (!document.getElementById('egg-style')) {
    const style = document.createElement('style');
    style.id = 'egg-style';
    style.textContent = STYLE;
    document.head.append(style);
  }
  lastFocus = document.activeElement;

  root = document.createElement('div');
  root.className = 'egg';
  root.innerHTML = `
    <div class="egg-win" role="dialog" aria-modal="true" aria-label="Terminal">
      <div class="egg-bar"><i title="Close"></i><i></i><i></i><span>guest@dacunha.ovh — zsh</span></div>
      <div class="egg-out" aria-live="polite"></div>
      <form class="egg-in"><label for="egg-input">${PROMPT}</label><input id="egg-input" autocomplete="off" autocapitalize="off" spellcheck="false" /></form>
    </div>`;
  document.body.append(root);

  out = root.querySelector('.egg-out')!;
  input = root.querySelector('input')!;
  root.querySelector('.egg-bar i')!.addEventListener('click', close);
  root.addEventListener('click', (e) => e.target === root && close());
  root.querySelector('form')!.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    input.value = '';
    run(value);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault();
      cursor = Math.max(0, cursor - 1);
      input.value = history[cursor] ?? '';
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      cursor = Math.min(history.length, cursor + 1);
      input.value = history[cursor] ?? '';
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = Object.keys(commands).find((c) => commands[c]!.help && c.startsWith(input.value));
      if (match && input.value) input.value = match + ' ';
    }
  });

  print(`<span class="ok">Welcome, explorer.</span> You found the hidden terminal.\nType <span class="p">help</span> to see what you can do. <span class="d">Esc to leave.</span>\n`);
  input.focus();
}
