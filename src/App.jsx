import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  return (
    // Affichage du composant
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        <PokemonCard />
      </div>
    </>
  );
}

export default App;
