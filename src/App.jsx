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
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

// Composant SwitchPokemon qui permet de changer de pokémon par son index
function SwitchPokemon({ setPokemonIndex }) {
  // Fonction qui se déclenche au click qui permet de changer de pokémon par son index
  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    // Retourne un composant Navbar avec la fonction et la constante liste de pokémon
    <NavBar handlePokemonClick={handlePokemonClick} pokemonList={pokemonList} />
  );
}

// Composant parent App qui affiche tous les composants enfants
function App() {
  // Destructuration du hook (getter / setter)
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // Récupére le pokémon actuelle
  const currentPokemon = pokemonList[pokemonIndex];

  return (
    <>
      {/* Composant MyTitle */}
      <div>
        <MyTitle />
      </div>

      {/* Composant PokemonCard */}
      <div>
        <PokemonCard {...currentPokemon} />
      </div>

      {/* Composant SwitchPokemon qui contient un composant NavBar */}
      <div>
        <SwitchPokemon setPokemonIndex={setPokemonIndex} />
      </div>
    </>
  );
}

export default App;
