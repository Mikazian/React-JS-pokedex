function NavBar({
  handleClickNext,
  handleClickPrev,
  pokemonIndex,
  pokemonList,
}) {
  return (
    <>
      <div>
        {pokemonIndex > 0 ? (
          <button onClick={handleClickPrev}>Précèdent</button>
        ) : (
          ""
        )}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={handleClickNext}>Suivant</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default NavBar;
