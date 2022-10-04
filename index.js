const form = document.querySelector("form");
const input = document.querySelector("input");
const h3 = document.querySelector("h3");
const image = document.querySelector("img");
const cardContainer = document.querySelector('.card-container')
// const button = document.querySelector("button");

// STATS
// const stats = document.querySelector(".stats");
const hp = document.querySelector(".hp");
const attack = document.querySelector(".attack");
const defense = document.querySelector(".defense");
const specialAttack = document.querySelector(".special-attack");
const specialDefense = document.querySelector(".special-defense");
const speed = document.querySelector(".speed");

// ABILITIES
// const abilities = document.querySelector(".abilities");
const ability1 = document.querySelector(".ability1");
const ability2 = document.querySelector(".ability2");



// FUNCTION

form.addEventListener("submit", function (e) {
  e.preventDefault();

  (async function () {
    try {
        const inputValue = input.value.toLowerCase().trim();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);

        const data = await response.json();
        // console.log(data);
if(!input.value) {
  cardContainer.style.display = 'none';
  alert('There is no input');
  throw new Error('Please enter your Pokemon')
}

        cardContainer.style.display = 'block';
        h3.textContent = data.name.toUpperCase();
        image.src = data.sprites.front_default;
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
        ability1.textContent = data.abilities[0].ability.name;
        ability2.textContent = data.abilities[1].ability.name;

    } catch (error) {
      console.log('This is an error', error.messgae);
    }
    input.value = '';
  })();


});

