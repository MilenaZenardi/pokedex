const voltarButton = document.getElementById('voltarButton')

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonName = urlParams.get('name');


    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            const pokemon = convertpokeApiDetailToPokemon(data);

            document.getElementById('pokemonName').innerText = pokemon.name;
            document.getElementById('pokemonNumber').innerHTML = "#" + pokemon.number;
            document.getElementById('pokemonImage').src = pokemon.photo;
            const primaryType = pokemon.types[0];
            const moreDetailsDiv = document.querySelector('.moreDetails');
            moreDetailsDiv.classList.add(primaryType);
            const typesList = document.getElementById('pokemonTypes');
            pokemon.types.forEach(type => {
                const li = document.createElement('li');
                li.textContent = type;
                li.classList.add(type);
                typesList.appendChild(li);
            });

            document.getElementById('pokemonExperience').innerText = pokemon.experience;
            document.getElementById('pokemonHeight').innerText = pokemon.height;
            document.getElementById('pokemonWeight').innerText = pokemon.weight;
            const abilitiesList = document.getElementById('pokemonAbilities');
            pokemon.abilities.forEach(ability => {
                const li = document.createElement('li');
                li.textContent = ability;
                abilitiesList.appendChild(li);
            });
        });
});


voltarButton.addEventListener('click', () => {
    window.location.href = "index.html"
})