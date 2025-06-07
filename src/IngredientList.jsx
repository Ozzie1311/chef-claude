export default function IngredientsList(props) {
  const ingredientsList = props.ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <section>
      <div className="container-list">
        <h2>Ingredients on hand:</h2>
        <ul className="list">{ingredientsList}</ul>
      </div>
      {props.ingredients.length > 3 && (
        <div className="container">
          <div className="container-info">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.toggleShown}>
            {props.isShown ? "Hide recipe" : "Get recipe"}
          </button>
        </div>
      )}
    </section>
  );
}
