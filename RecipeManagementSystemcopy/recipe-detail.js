const recipeDetail = document.getElementById("recipeDetail");

// Get recipe ID from URL
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");


// Load selected recipe
async function loadRecipe() {

    if (!recipeId) {
        recipeDetail.innerHTML = "<p>Recipe ID not found.</p>";
        return;
    }

    try {

        const response = await fetch(
            `http://localhost:3000/recipes/${recipeId}`
        );

        if (!response.ok) {
            throw new Error("Recipe not found");
        }

        const recipe = await response.json();

        console.log("Selected recipe:", recipe);

        displayRecipe(recipe);

    } catch (error) {

        console.error("Error:", error);

        recipeDetail.innerHTML = `
            <p>Could not load the recipe.</p>
        `;
    }
}


// Display recipe
function displayRecipe(recipe) {

    let ingredients = recipe.ingredients;
    let steps = recipe.steps;

    // Convert JSON strings from MySQL into arrays
    if (typeof ingredients === "string") {
        ingredients = JSON.parse(ingredients);
    }

    if (typeof steps === "string") {
        steps = JSON.parse(steps);
    }


    recipeDetail.innerHTML = `

        <img 
            src="${recipe.image}"
            alt="${recipe.title}"
        >

        <h1>${recipe.title}</h1>

        <span class="recipe-tag">
            ${recipe.category}
        </span>

        <div class="recipe-meta">

            <span>
                ⏱ Preparation: ${recipe.preparation_time || "N/A"}
            </span>

            <span>
                👥 Serves: ${recipe.serving || "N/A"}
            </span>

        </div>


        <p>
            ${recipe.description || "A delicious recipe from RecipeHub."}
        </p>


        <h2>Ingredients</h2>

        <ul>
            ${ingredients.map(item => `
                <li>${item}</li>
            `).join("")}
        </ul>


        <h2>Steps</h2>

        <ol>
            ${steps.map(step => `
                <li>${step}</li>
            `).join("")}
        </ol>

    `;
}


// Load recipe
loadRecipe();