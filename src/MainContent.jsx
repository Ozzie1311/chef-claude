import { useState } from "react";
import IngredientsList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function MainContent() {
  const [ingredients, setIngredients] = useState([]);
  const [isShown, setIsShown] = useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <main>
      <form action={addIngredient}>
        <input
          type="text"
          name="ingredient"
          aria-label="add ingredient"
          placeholder="e.g oregano"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleShown={toggleShown}
          isShown={isShown}
        />
      )}
      {isShown && <ClaudeRecipe />}
    </main>
  );
}
