const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

let recipes = [];

// Get recipes from Node.js
async function loadRecipes() {

    try {

        const response = await fetch("http://localhost:3000/recipes");

        if (!response.ok) {
            throw new Error("Failed to fetch recipes");
        }

        recipes = await response.json();

        console.log("Recipes from database:", recipes);

        displayRecipes(recipes);

    } catch (error) {

        console.error("Error loading recipes:", error);

        recipeGrid.innerHTML = `
            <p class="error">
                Could not load recipes from the server.
            </p>
        `;
    }
}


// Display recipes
function displayRecipes(recipeList) {

    recipeGrid.innerHTML = "";

    if (recipeList.length === 0) {

        recipeGrid.innerHTML = `
            <p>No recipes found.</p>
        `;

        return;
    }

    recipeList.forEach(recipe => {

        const card = document.createElement("div");

        card.className = "recipe-card";

        card.innerHTML = `
                    <div class="recipe-image-container">

            <img 
                src="${recipe.image || 'https://via.placeholder.com/300x200'}"
                alt="${recipe.title}"
            >

              <button 
    class="delete-icon"
    onclick="deleteRecipe(${recipe.id}, event)"
    title="Delete recipe"
>
    🗑️
</button>

            </div>
            <div class="recipe-card-body">

          <span class="recipe-tag">
                    ${recipe.category}
                </span>

                <h2>${recipe.title}</h2>

                <p>
                    ${recipe.description || "Delicious homemade recipe."}
                </p>

                <div class="recipe-info">

                    <span>
                        ⏱ ${recipe.preparation_time || "N/A"}
                    </span>

                    <span>
                        👥 ${recipe.serving || "N/A"}
                    </span>

                </div>

                <button class="recipe-button" onclick="viewRecipe(${recipe.id})">
                    View Recipe
                </button>

            </div>
        `;

        recipeGrid.appendChild(card);
    });
}


// Search recipes
searchInput.addEventListener("input", filterRecipes);


// Filter by category
categorySelect.addEventListener("change", filterRecipes);


// Search + category filter
function filterRecipes() {

    const searchText = searchInput.value.toLowerCase();
    const category = categorySelect.value.toLowerCase();

    const filteredRecipes = recipes.filter(recipe => {

        const matchesSearch =
            recipe.title.toLowerCase().includes(searchText);

        const matchesCategory =
            category === "" ||
            recipe.category.toLowerCase() === category;

        return matchesSearch && matchesCategory;
    });

    displayRecipes(filteredRecipes);
}


// View recipe
function viewRecipe(id) {

    window.location.href = `recipe-detail.html?id=${id}`;
}

async function deleteRecipe(id, event) {

    // Prevent the button click from affecting the card
    event.stopPropagation();

    const confirmDelete = confirm(
        "Are you sure you want to delete this recipe?"
    );

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await fetch(
            `http://localhost:3000/recipes/${id}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        if (!response.ok) {

            throw new Error(
                data.error || "Failed to delete recipe"
            );

        }

        alert("Recipe deleted successfully!");

        // Remove recipe from JavaScript array
        recipes = recipes.filter(recipe => recipe.id !== id);

        // Display updated recipes
        filterRecipes();

    } catch (error) {

        console.error("Delete error:", error);

        alert("Could not delete recipe.");

    }
}

// Load recipes when page opens
loadRecipes();