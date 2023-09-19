function PokemonCard(pokemon) {
  console.log(pokemon);
  return (
    <>
      <figure className="card">
        {pokemon.imgSrc === undefined || pokemon.imgSrc === "" ? (
          <p>???</p>
        ) : (
          <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img" />
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
