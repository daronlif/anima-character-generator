$ability_fields = ['Athletics', 'Creative', 'Intelluctual', 'Perceptive', 'Social', 'Subterfuge', 'Vigor' ];

$abilities = {
  Attack: {Characteristic: 'DEX'},
  Block: {Characteristic: 'DEX'},
  Dodge: {Characteristic: 'AGI'},
  'Wear Armor': {Characteristic: 'STR'},
  'Magic Projection': {Characteristic: 'DEX'},
  'Psychic Projection': {Characteristic: 'DEX'},
  Summon: {Characteristic: 'POW'},
  Control: {Characteristic: 'WP'},
  Bind: {Characteristic: 'POW'},
  Banish: {Characteristic: 'POW'},
  Acrobatics: {Field: 'Athletics', Characteristic: 'AGI'},
  Athleticism: {Field: 'Athletics', Characteristic: 'AGI'},
  Climb: {Field: 'Athletics', Characteristic: 'AGI'},
  Jump: {Field: 'Athletics', Characteristic: 'STR'},
  Ride: {Field: 'Athletics', Characteristic: 'AGI'},
  Swim: {Field: 'Athletics', Characteristic: 'AGI'},
  Art: {Field: 'Creative', Characteristic: 'POW'},
  Dance: {Field: 'Creative', Characteristic: 'AGI', knowledge: true},
  Forging: {Field: 'Creative', Characteristic: 'DEX', knowledge: true},
  Music: {Field: 'Creative', Characteristic: 'POW', knowledge: true},
  'Sleight of Hand': {Field: 'Creative', Characteristic: 'DEX'},
  Notice: {Field: 'Perceptive', Characteristic: 'PER', passive: true},
  Search: {Field: 'Perceptive', Characteristic: 'PER'},
  Track: {Field: 'Perceptive', Characteristic: 'PER'},
  Intimidate: {Field: 'Social', Characteristic: 'WP'},
  Leadership: {Field: 'Social', Characteristic: 'POW', passive: true},
  Persuasion: {Field: 'Social', Characteristic: 'INT'},
  Style: {Field: 'Social', Characteristic: 'POW', passive: true},
  Disguise: {Field: 'Subterfuge', Characteristic: 'DEX'},
  Hide: {Field: 'Subterfuge', Characteristic: 'PER'},
  'Lock Picking': {Field: 'Subterfuge', Characteristic: 'DEX'},
  Poisons: {Field: 'Subterfuge', Characteristic: 'INT', kowledge: true},
  Theft: {Field: 'Subterfuge', Characteristic: 'DEX'},
  Stealth: {Field: 'Subterfuge', Characteristic: 'AGI'},
  'Trap Lore': {Field: 'Subterfuge', Characteristic: 'DEX'},
  Animals: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
  Appraisal: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
  'Herbal Lore': {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
  History: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
  Memorize: {Field: 'Intellectual', Characteristic: 'INT'},
  'Magic Appraisal': {Field: 'Intellectual', Characteristic: 'POW', knowledge: true, passive: true},
  Medicine: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
  Navigation: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
  Occult: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
  Science: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
  Composure: {Field: 'Vigor', Characteristic: 'WP', passive: true},
  'Feats of Strength': {Field: 'Vigor', Characteristic: 'STR'},
  'Withstand Pain': {Field: 'Vigor', Characteristic: 'WP'}
};

$specializations = {
  History: ['Christian', 'local'],
  Occult: ['local myths', 'religion']
};
