/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// === State ===

// @returns {FreelancerProfile}
function makeFreelancerProfile() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;

  return{name, occupation, rate}
}
const profiles = Array.from( {length: NUM_FREELANCERS}, makeFreelancerProfile)
console.log(profiles)

function getRates(profiles){
  const rates = profiles.map((profile) => profile.rate)
  return rates;

}

function sumRates(rates){
  const total = rates.reduce((acc, current) => {return acc + current}, 0);
  return total;
}

function makeAverageRate(profiles) {
  const rates = getRates(profiles);
  const total = sumRates(rates);
  const average = total / profiles.length;
  return average;
  
}
console.log(makeAverageRate(profiles));


// === Components ===
// @param {Profile} profile
// @returns {HTMLElement} a line of profile description

function profileStrip(profile) {

const { name, occupation, rate } = profile;



const $card = document.createElement("article");
$card.classList.add("card");
$card.innerHTML = `
<p>${name} — ${occupation} — ${rate}</p>
`;

return $card;
}

// so it looks like name - occupation - rate on one line

// an article containing all profiles as cards
function Profiles() {
  const $container = document.createElement("article");
  $container.classList.add("cards");

  const $cards = profiles.map(profileStrip);
  $container.replaceChildren(...$cards)

  return $container;

}

// === Render ===
function render() {
  const $app = document.querySelector("#app");

  // Clear the app and add the heading
  $app.innerHTML = `<h1>Freelancer Profiles</h1>`;

  // Call Profiles() and append its element
  $app.appendChild(Profiles());
}

render();

