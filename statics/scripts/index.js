const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/porygon';
fetch(POKE_API_URL)
.then(res => res.json())
.then((data) => console.log(data))
.catch(error => console.log(error));