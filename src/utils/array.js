const characters = [
  { name: 'ironman', env: 'marvel' },
  { name: 'black_widow', env: 'marvel' },
  { name: 'wonder_woman', env: 'dc_comics' },
];

function getCharacter(name) {
  return character => character.name === name
}

// find代替filter
characters.find(getCharacter('ironman'))

// some代替find
characters.some(getCharacter('ironman'))

// reduce代替map和filter的组合
characters.filter((character) => character.env === 'marvel')
          .map(character => Object.assign({}, character, {alsoSeenIn: ['Avengers']}))

characters.reduce((acc, character) => {
  if (character.env === 'marvel') {
    acc.concat(Object.assign({}, character, {alsoSeenIn: ['Avengers']}))
  }
  // or
  return character.env === 'marval'
   ? acc.concat(Object.assign({}, character, {alsoSeenIn: ['Avengers']}))
   : acc
}, [])