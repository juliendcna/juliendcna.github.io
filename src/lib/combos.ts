/**
 * UI color combos. Each pairs an accent with a ground; every other color
 * token is derived from these four values in global.css. `accentLight` is a
 * deeper shade of the accent so it keeps contrast on the light ground.
 */
export interface Combo {
  id: string;
  name: string;
  accentDark: string;
  accentLight: string;
  groundDark: string;
  groundLight: string;
}

export const combos: Combo[] = [
  { id: 'toxic-violet', name: 'Toxic violet · Soft chrome', accentDark: '#c06bff', accentLight: '#7a21c9', groundDark: '#120a1a', groundLight: '#d9dee3' },
  { id: 'synthetic-lime', name: 'Synthetic lime · Bio black', accentDark: '#cbf24e', accentLight: '#4e6b00', groundDark: '#0a0c08', groundLight: '#e9eddc' },
  { id: 'hyper-cobalt', name: 'Hyper cobalt · Skin sand', accentDark: '#6d8bff', accentLight: '#1e3fd8', groundDark: '#080b18', groundLight: '#e8d9c5' },
  { id: 'carbon-teal', name: 'Carbon teal · Mint foam', accentDark: '#45d6c0', accentLight: '#0c6a63', groundDark: '#07100f', groundLight: '#d6f2e6' },
  { id: 'chrome-violet', name: 'Chrome violet · Glass blue', accentDark: '#a99bff', accentLight: '#4b3fc4', groundDark: '#0d0f18', groundLight: '#d3e3f2' },
  { id: 'warm-lime', name: 'Warm lime · Olive ink', accentDark: '#d3e05a', accentLight: '#5a6410', groundDark: '#1c1f14', groundLight: '#eef0de' },
  { id: 'neon-lime', name: 'Neon lime · Violet ink', accentDark: '#d6ff3d', accentLight: '#4b5e00', groundDark: '#1a1030', groundLight: '#ede8f7' },
  { id: 'burnt-orange', name: 'Burnt orange · Vanilla', accentDark: '#ff8a4c', accentLight: '#a3410f', groundDark: '#150d08', groundLight: '#f2e7d0' },
  { id: 'sky-mint', name: 'Sky mint · Graphite', accentDark: '#7fe3c4', accentLight: '#126b51', groundDark: '#1b1e22', groundLight: '#e6edea' },
  { id: 'electric-indigo', name: 'Electric indigo · Soft lilac', accentDark: '#9884ff', accentLight: '#4b24e0', groundDark: '#0c0a1c', groundLight: '#e2dcf5' },
  { id: 'electric-orchid', name: 'Electric orchid · Deep plum', accentDark: '#f062d6', accentLight: '#a31889', groundDark: '#1f0c22', groundLight: '#f5e2f0' },
];

export const comboCss = combos
  .map(
    (c) =>
      `html[data-combo='${c.id}']{--accent-d:${c.accentDark};--accent-l:${c.accentLight};--ground-d:${c.groundDark};--ground-l:${c.groundLight}}`
  )
  .join('');
