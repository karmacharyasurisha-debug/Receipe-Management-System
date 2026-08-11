const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

// Render recipe cards to the page
function renderRecipes(list) {
  recipeGrid.innerHTML = "";

  if (list.length === 0) {
    recipeGrid.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  list.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <div class="recipe-card-body">
        <span class="recipe-tag">${recipe.category}</span>
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <a href="recipe-detail.html?id=${recipe.id}" class="btn btn-primary">View Recipe</a>
      </div>
    `;

    recipeGrid.appendChild(card);
  });
}

// Filter recipes by search text and category
function filterRecipes() {
  const searchText = searchInput.value.toLowerCase();
  const category = categorySelect.value;

  const filtered = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchText);
    const matchesCategory =
      category === "" ||
      recipe.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  renderRecipes(filtered);
}

searchInput.addEventListener("input", filterRecipes);
categorySelect.addEventListener("change", filterRecipes);

// Initial render
renderRecipes(recipes);
