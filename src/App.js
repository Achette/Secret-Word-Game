// IMPORTS DO REACT
import { useCallback, useEffect, useState } from "react";

// CSS
import "./App.css";

// DATA
import { wordsList } from "./data/words";

// COMPONENTS
import StartScreen from "./components/StartScreen/StartScreen";
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetter] = useState([]);

  const pickWordAndCategory = () => {
    // pick a randon category
    const categories = Object.keys(words); // devolve um array com todas as chaves
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]; // retorna uma categoria aleatória


    // pick a randon word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
 

    return { word, category };
  };

  //Starting secrets words game
  const startGame = () => {
    // pick word and category
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetter = word.split("");
    wordLetter = wordLetter.map(l => l.toLowerCase())
   

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetter(letters)

    setGameStage(stages[1].name);
  };

  // process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  // Restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
