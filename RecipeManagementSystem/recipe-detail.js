// Get the recipe id from the URL, e.g. recipe-detail.html?id=1
const params = new URLSearchParams(window.location.search);
const recipeId = parseInt(params.get("id"));

const recipe = recipes.find(r => r.id === recipeId);
const container = document.getElementById("recipeDetail");

if (!recipe) {
  container.innerHTML = "<p>Recipe not found.</p>";
} else {
  container.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}">
    <h1>${recipe.title}</h1>
    <div class="recipe-meta">
      <span>Category: ${recipe.category}</span>
    </div>
    <p>${recipe.description}</p>

    <h2>Ingredients</h2>
    <ul>
      ${(recipe.ingredients || ["Ingredients coming soon"]).map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h2>Steps</h2>
    <ol>
      ${(recipe.steps || ["Steps coming soon"]).map(s => `<li>${s}</li>`).join("")}
    </ol>
  `;
}