import { useRef, useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  // state (état, données)
  const [fruit, setFruit] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  // const inputRef = useRef()

  // comportements
  const handleDelete = (id) => {
    // 1. Copie du state
    const fruitsCopy = [...fruit];
    // 2. Manipuler la copie du State
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    // 3. Modifier mon State avec le setter
    setFruit(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    //1. Copie du State
    const fruitsCopy = [...fruit];

    //2. Manipulation sur la copie du State
    fruitsCopy.push(fruitAAjouter);

    //3. Modifier le State avec le setter
    setFruit(fruitsCopy);
  };

  const afficherFruitPrefere = (fruitNom) => {
    alert(`kawa bonga: ${fruitNom}`);
  };

  // affichage (render)
  return (
    <div>
      <h1>List de Fruit</h1>
      <ul>
        {fruit.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => afficherFruitPrefere(fruit.nom)}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;

//Gestion du Formulaire
//1. créationdu formulaire
//2. soumission du formulaire (onSubmit / handleSubmit)
//3. collecter des données du formulaire
//  3a. méthode 1: documentGetElementById "React" (useRef)
//  3b. méthode 2: sync descendante/ascendante (onChange / handleChange)
