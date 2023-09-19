import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

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
  const currentPokemon = pokemonList[0];
  return (
    // Affichage du composant
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        <PokemonCard
          pokemon={currentPokemon}
          name={currentPokemon.name}
          imgSrc={currentPokemon.imgSrc}
        />
      </div>
    </>
  );
}

export default App;
