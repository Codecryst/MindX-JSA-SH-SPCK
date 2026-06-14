const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/porygon';

fetch(POKE_API_URL)
  .then(res=> res.json())
  .then(data => {
    console.log(data);
    document.getElementById('apiDisplay').innerHTML = `
        <img style="min-width: 70%;" src="${data.sprites.front_default}" alt="${data.name}">
        <div style="min-width:200%;">
            <h2 style="margin:0;color: white !important;margin-left: -10rem;"><b>${data.name}</b></h2>
            <p class="rounded" style="margin-left:-10rem;margin-top: 1rem;padding:1rem;color: black !important;background-color:white;border: 1px solid black;margin-right: 10rem;">Yo , My name is ${data.name} .This is the end of the website.You better watch your self or I will use "${data.abilities[1].ability.name}" ability on you !</p>
        </div>`;
  })
  .catch(error => console.error(error));