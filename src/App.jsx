import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const currentPokemon = pokemonList[pokemonIndex];

  const handleClickNext = () => {
    if (pokemonIndex >= 0) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handleClickPrev = () => {
    if (pokemonIndex <= pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    // Affichage du composant
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        <PokemonCard {...currentPokemon} />
      </div>
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

export default App;
