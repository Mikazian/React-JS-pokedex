// Composant bouton
function BtnPokemon({ pokemon, handlePokemonClick, index }) {
  return (
    <button onClick={() => handlePokemonClick(index)}>
      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
    </button>
  );
}

// Composant boutons liste de pokémons
function NavBar({ pokemonList, handlePokemonClick }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <BtnPokemon
          key={index}
          pokemon={pokemon}
          index={index}
          handlePokemonClick={handlePokemonClick}
        />
      ))}
    </>
  );
}

export default NavBar;
