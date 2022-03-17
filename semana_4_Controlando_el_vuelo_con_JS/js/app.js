var cards = "";

const fetchPokemon = async(pokeInput) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    const pokefetch = await fetch(url);
    const pokemon = await pokefetch.json();
    if (pokefetch.status != '200') {} else {
        const specie = await fetch(pokemon.species.url);
        const color = await specie.json();
        let card = ""
        if (pokemon.types.length == 1) {
            card = `<div class='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
            <div onclick="getPokemon(${pokemon.id})" class="card-poke" style='background: ${color.color.name}'>
            <p class="number">#${pokemon.id}</p>
            <p class="card-name">${pokemon.name}</p>
            <p> <img class="img-search" src='${pokemon.sprites.front_default}' /> </p>
            <p><span>${pokemon.types[0].type.name}</span></p>
            </div></div>`;
        } else {
            card = `<div class='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
            <div onclick="getPokemon(${pokemon.id})" class="card-poke" style='background: ${color.color.name}'>
            <p class="number">#${pokemon.id}</p>
            <p class="card-name">${pokemon.name}</p>
            <p> <img class="img-search" src='${pokemon.sprites.front_default}' /> </p>
            <p><span>${pokemon.types[0].type.name}</span> <span>${pokemon.types[1].type.name}</span></p>
            </div></div>`;
        }

        document.getElementById('pokemones').innerHTML = card;
    }

}

const getPokemon = async(id) => {
    await localStorage.setItem("id", id);
    window.location = 'pokemon.html';
}

const fetch50 = async() => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50";
    const fetchPokemons = await fetch(url);
    const pokemons = await fetchPokemons.json();
    pokemons.results.forEach(async element => {
            //console.log(element.name);
            const fetchPoke = await fetch(element.url);
            const poke = await fetchPoke.json();
            console.log(poke);
            const species = await fetch(poke.species.url);
            const color = await species.json();

            if (poke.types.length == 1) {
                cards += `<div class='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <div onclick="getPokemon(${poke.id})" class="card-poke" style='background: ${color.color.name}'>
                    <p> <img src='${poke.sprites.front_default}' /> </p>
                    <p class="number">#${poke.id}</p>
                    <p class="card-name">${element.name}</p>
                    <p><span>${poke.types[0].type.name}</span></p>
                    </div></div>`;
                document.getElementById('pokemones').innerHTML = cards;

            } else {
                cards += `<div class='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <div onclick="getPokemon(${poke.id})" class="card-poke" style='background: ${color.color.name}'>
                    <p> <img src='${poke.sprites.front_default}' /> </p>
                    <p class="number">#${poke.id}</p>
                    <p class="card-name">${element.name}</p>
                    <p><span>${poke.types[0].type.name}</span> <span>${poke.types[1].type.name}</span></p>
                    </div></div>`;
                document.getElementById('pokemones').innerHTML = cards;
            }

        })
        //console.log(this.cards);


}

const pokeImage = (url) => {
    const pokeImg = document.getElementById('pokemones');
    pokeImg.src = url;
}

const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    fetchPokemon(pokeInput);
}

const mostrarPokemon = async() => {
    let card;

    card = '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>';
    card += '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">';
    card += '<div class="fila">';
    card += '<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">';
    const id = localStorage.getItem('id');
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await (await fetch(url)).json()
    console.log(pokemon);
    console.log(pokemon.name);
    console.log(pokemon.sprites.other.dream_world.front_default);
    const color = await (await fetch(pokemon.species.url)).json()
    console.log(color.color.name);
    card += `<div class="card-head" style="background: ${color.color.name}">`;
    card += `<div class="fila" ><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">`;
    card += `<p class="number">#${pokemon.id}</p>`;
    card += `<p class="card-name">${pokemon.name}</p>`;
    if (pokemon.types.length == 1) {
        card += `<p><span>${pokemon.types[0].type.name}</span></p>`;
        console.log(pokemon.types[0].type.name);
    } else {
        card += `<p><span>${pokemon.types[0].type.name}</span> <span>${pokemon.types[1].type.name}</span></p>`;
        console.log(pokemon.types[0].type.name, pokemon.types[1].type.name);
    }
    card += "</div>";
    card += '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">';
    card += `<img class="pokeImg" src="${await pokemon.sprites.other.dream_world.front_default}" /></div>`;
    card += '</div></div></div>';
    card += '<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">';
    card += '<div class="card-body">'

    card += `<div id="info"><div class="fila"><div onclick="stats()" class="stats active col-lg-6 col-md-6 col-sm-6 col-xs-6">`;
    card += '<p>Estadisticas</p>';
    card += '</div>';
    card += `<div onclick="moves()" class="moves col-lg-6 col-md-6 col-sm-6 col-xs-6">`;
    card += '<p>Movimientos</p>';
    card += '</div></div>';
    card += '<div class="fila">';
    card += '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>';
    card += '<div id="stats"class="col-lg-10 col-md-10 col-sm-10 col-xs-12">';
    card += `<h3 style="color: ${color.color.name}">Estadisticas Base</h3>`;
    pokemon.stats.forEach(stat => {
        card += `<p>${stat.stat.name.toUpperCase()}:</p><span>${stat.base_stat}</span>`;
        console.log(stat.base_stat, stat.stat.name.toUpperCase());


    })
    card += '</div>';
    card += '<div id="moves" style="display: none" class="col-lg-10 col-md-10 col-sm-10 col-xs-12">';
    card += `<h3 style="color: ${color.color.name}">Movimientos</h3>`;
    card += '<div class="fila">';
    for (let i = 0; i <= pokemon.moves.length - 1; i++) {
        if (i == 14) {
            break;
        } else {
            card += '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">';
            card += `<p>${pokemon.moves[i].move.name.toUpperCase()}<p/>`;
            card += '</div>';
            console.log(pokemon.moves[i].move.name);
        }
    }
    card += '</div>'
    card += '</div>';
    card += '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>';
    card += '</div>';


    console.log(card);
    document.getElementById('pokemon').innerHTML = card;

}

const stats = () => {
    //console.log('Hola Stats');
    document.getElementById('moves').style.display = 'none';
    document.getElementById('stats').style.display = 'block';
    document.getElementsByClassName('stats')[0].classList.add('active');
    document.getElementsByClassName('moves')[0].classList.remove('active');
}

const moves = () => {
    //console.log('Hola MOves');
    document.getElementById('moves').style.display = 'block';
    document.getElementById('stats').style.display = 'none';
    document.getElementsByClassName('stats')[0].classList.remove('active');
    document.getElementsByClassName('moves')[0].classList.add('active');
}