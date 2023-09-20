import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";

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
        <NavBar
          handleClickNext={handleClickNext}
          handleClickPrev={handleClickPrev}
          pokemonIndex={pokemonIndex}
          pokemonList={pokemonList}
        />
      </div>
    </>
  );
}

export default App;
