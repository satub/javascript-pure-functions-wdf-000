const app = "I don't do much.";

let heroes = [
  { firstName: 'Tony', lastName: 'Stark', heroName: 'Iron Man' },
  { firstName: 'Steve', lastName: 'Rogers', heroName: 'Captain America' },
  { firstName: 'Barry', lastName: 'Allen', heroName: 'The Flash' },
];

///pure function
const addInitialsToHeroes = heroes => heroes.map(hero => Object.assign({}, hero, {
  initials: hero.firstName.charAt(0) + hero.lastName.charAt(0),
}));

let heroesWithInitials = addInitialsToHeroes(heroes);

///impure function
// function addInitialsToHeroes(heroes) {
//   heroes.forEach(hero => {
//     hero.initials = hero.firstName.charAt(0) + hero.lastName.charAt(0);
//   });
//
//   return heroes;
// }
//
// let heroesWithInitials = addInitialsToHeroes(heroes);
