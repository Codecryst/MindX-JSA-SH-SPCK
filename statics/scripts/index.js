if(document.cookie.includes('email') && document.cookie.includes('password')&& document.cookie.includes('logsign_account=true')) {
    const m = document.cookie.match(/(?:^|; )email=([^;]+)/);
    const first = m ? decodeURIComponent(m[1]).trim().charAt(0).toUpperCase() : '�';

    document.getElementById('account').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16" fill="cyan" aria-hidden="true">
      <circle cx="8" cy="8" r="8"></circle>
      <text x="8" y="10" text-anchor="middle" font-size="8" fill="black" font-family="Arial">${first}</text>
    </svg>
    <button type="button"
        class="btn d-flex align-items-center justify-content-center"
        style="width: 18px; height: 18px; border-radius: 999px; padding: 0;"
        onclick="document.cookie='logsign_account=false; path=/; max-age=31536000'; location.reload();">
        <img src="../../images/logout.png"
        alt="Logout"
        style="width: 18px; height: 18px;">
    </button>`
}
else{
    document.cookie = `logsign_account=false; path=/; max-age=31536000`;
}
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/porygon';


fetch(POKE_API_URL)
  .then(res=> res.json())
  .then(data => {
    console.log(data);
    document.getElementById('porygonNAV').innerHTML = `
        <img style="max-width:2rem" src="${data.sprites.front_default}" alt="${data.name}">
    `
    document.getElementById('apiDisplay').innerHTML = `
        <img style="min-width: 70%;" src="${data.sprites.front_default}" alt="${data.name}">
        <div style="min-width:200%;">
            <h2 style="margin:0;color: white !important;margin-left: -10rem;"><b>${data.name}</b></h2>
            <p class="rounded" style="margin-left:-10rem;margin-top: 1rem;padding:1rem;color: black !important;background-color:white;border: 1px solid black;margin-right: 10rem;">Yo , My name is ${data.name} .This is the end of the website.You better watch your self or I will use "${data.abilities[1].ability.name}" ability on you !</p>
        </div>`;
  })
  .catch(error => console.error(error));