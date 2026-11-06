//pseudoNameGenerator.js

const syllables = {
  latin: [
    'a', 'ae', 'us', 'ius', 'ora', 'lux',
    'ver', 'sol', 'nox', 'vita', 'mor', 'aris',
  ],

  spanish: [
    'luz', 'sol', 'mar', 'vida', 'cielo',
    'alma', 'dor', 'ena', 'rio', 'bella',
  ],

  italian: [
    'bella', 'luna', 'vito', 'cara', 'mira',
    'sora', 'nello', 'tino', 'vera', 'lino',
  ],

  fantasy: [
    'zy', 'ka', 'vex', 'rai', 'xo',
    'nyx', 'thar', 'elo', 'qui', 'zara',
  ],
};

function randomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

export default function generatePseudoName() {
  const language = randomItem(Object.keys(syllables));
  const parts = syllables[language];

  const length = Math.floor(Math.random() * 3) + 2;

  let pseudoName = '';

  for (let i = 0; i < length; i++) {
    pseudoName += randomItem(parts);
  }

  return pseudoName.charAt(0).toUpperCase() + pseudoName.slice(1);
}
